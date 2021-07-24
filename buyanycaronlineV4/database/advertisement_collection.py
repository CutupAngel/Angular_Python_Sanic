import json
from datetime import datetime

import pymongo
from pymongo.errors import PyMongoError, DuplicateKeyError

from common.enums import AdvertisementTypes, AdvertisementStatus
from models.vehicle_model import *
from models.accessory_model import *
from database.database import DataBase
from models.class_to_dict import convert_to_dict
from common.utils import IDGenerator


class AdvertisementDB:
    @staticmethod
    def create_advertisement(advertisement: Advertisement):
        try:
            col = DataBase.advertisement_collection()
            data = convert_to_dict(advertisement.__dict__)
            data["_id"] = IDGenerator.generate_ID()
            data["last-modified-date"] = datetime.now().isoformat()
            col.insert_one(data)
        except DuplicateKeyError as e:
            return "Error duplicate key", None
        except PyMongoError as e:
            return "Error creating advertisement", None
        return "Car advertisement have been successfully created", data["_id"]

    @staticmethod
    def get_advertisement_by_id(id: str):
        record = None
        try:
            col = DataBase.advertisement_collection()
            record = col.find_one({"_id": id})
        except PyMongoError as e:
            print(e)
        if record is not None:
            if record["adType"] == AdvertisementTypes.NUMBERPLATE.value:
                numberplate = NumberPlate(owner=record["owner"], title=record["title"], 
                                    price=record["price"], decription=record["description"], 
                                    digits=record["digits"], adType=AdvertisementTypes.NUMBERPLATE.value)
                return numberplate
            
            vehicle = Vehicle(owner=record["owner"], title=record["title"], price=record["price"],
                              decription=record["description"], make=record["make"], model=record["model"],
                              features=record["features"], cylinder=record["cylinders"], color=record["color"],
                              year=record["year"], warranty=record["warranty"], fuel=record["fuelType"],
                              condition=record["condition"], images=record["images"])
            if record["adType"] == AdvertisementTypes.CAR.value:
                car = Car(hp=record["hp"], body_type=record["bodyType"], trans=record["transmission"],
                          region=record["region"], doors=record["numOfDoors"], distance=record["distance"])
                for k, v in vehicle.__dict__.items():
                    car.__setattr__(k, v)
                car.set_adType(AdvertisementTypes.CAR.value)
                return car
            if record["adType"] == AdvertisementTypes.HEAVY.value:
                heavy = HeavyVehicle(distance=record["distance"], hours=record["hours"], heavyType=record["heavyType"])
                for k, v in vehicle.__dict__.items():
                    heavy.__setattr__(k, v)
                heavy.set_adType(AdvertisementTypes.HEAVY.value)
                return heavy
            if record["adType"] == AdvertisementTypes.BOAT.value:
                boat = Boat(length=record["length"], hours=record["hours"], typed=record["type"],
                            sub_type=record["subType"])
                for k, v in vehicle.__dict__.items():
                    boat.__setattr__(k, v)
                boat.set_adType(AdvertisementTypes.HEAVY.value)
                return boat
            if record["adType"] == AdvertisementTypes.MOTORCYCLE.value:
                motorcycle = MotorCycle(hours=record["hours"], engine_size=record["engineSize"])
                for k, v in vehicle.__dict__.items():
                    motorcycle.__setattr__(k, v)
                motorcycle.set_adType(AdvertisementTypes.HEAVY.value)
                return motorcycle
        else:
            raise Exception("Can't find an advertisement with that ID.")

    @staticmethod
    def update_advertisement(advertisement: Advertisement, id: str):
        try:
            col = DataBase.advertisement_collection()
            json = convert_to_dict(advertisement.__dict__)
            if "id" in json:
                del json['id']
            col.update_one({"_id": id}, {"$set": json})
        except PyMongoError as e:
            return "Error updating advertisement"
        return "Advertisement have been successfully updated"

    @staticmethod
    def get_unapproved_ads(pageNumber: int, nPerPage: int):
        return AdvertisementDB.get_advertisements({"status": AdvertisementStatus.UNDER_PROCESS.value},
                                                  pageNumber, nPerPage)

    @staticmethod
    def get_advertisements(query: json, pageNumber: int, nPerPage: int):
        data = list()
        try:
            col = DataBase.advertisement_collection()
            records = col.find(query).sort([("last-modified-date", 1)]).skip(
                (pageNumber - 1) * nPerPage if pageNumber > 0 else 0) \
                .limit(nPerPage)
            count = col.estimated_document_count()
            for record in records:
                data.append(record)
            return {"Message": "successfully found data", "data": data, "count": count}
        except PyMongoError as e:
            return {"Message": "Error finding data"}

    @staticmethod
    def approve_advertisement(advertisementID: str):
        try:
            col = DataBase.advertisement_collection()
            col.update_one({"_id": advertisementID}, {"$set": {"status": AdvertisementStatus.APPROVED.value}})
            return "Advertisement have been successfully updated"
        except PyMongoError as e:
            return "Error advertisement not updated"

    @staticmethod
    def search(request):
        page = int(request.args.get("page", "0"))
        advertisement_type = int(request.args.get('advertisementType', AdvertisementTypes.CAR.value))
        min_price = request.args.get('minPrice')
        max_price = request.args.get('maxPrice')
        make = request.args.get('make')
        model = request.args.get('model')
        features = request.args['features'] if 'features' in request.args else None
        color = request.args['color'] if 'color' in request.args else None
        cylinders = request.args['cylinders'] if 'cylinders' in request.args else None
        min_year = request.args.get('minYear')
        max_year = request.args.get('maxYear')
        condition = request.args.get('condition')
        fuel_type = request.args.get('fuelType')
        warranty = request.args.get('warranty')
        has_image = request.args.get('hasImage')
        region = request.args.get('region')
        max_distance = request.args.get('maxDistance')
        body_type = request.args['bodyType'] if 'bodyType' in request.args else None
        doors = request.args['numOfDoors'] if 'numOfDoors' in request.args else None
        transmission = request.args.get('transmission')
        min_hp = request.args.get('minHp')
        max_hp = request.args.get('maxHp')

        if warranty:
            warranty = True if warranty == 'true' else False

        if has_image:
            has_image = True if has_image == 'true' else False

        if transmission:
            transmission = True if transmission == 'true' else False

        if advertisement_type not in [AdvertisementTypes.CAR.value, AdvertisementTypes.BOAT.value,
                                      AdvertisementTypes.HEAVY.value,
                                      AdvertisementTypes.MOTORCYCLE.value]:
            return json({"Message": "Error, invalid advertisement type!"})

        per_page = 10

        _query = {}
        _and = []
        filters = {}

        _and.append({'status': AdvertisementStatus.APPROVED.value})
        _and.append({'adType': advertisement_type})

        if min_price:
            _and.append({'price': {'$gte': int(min_price)}})
            filters['min_price'] = int(min_price)

        if max_price:
            _and.append({'price': {'$lte': int(max_price)}})
            filters['max_price'] = int(max_price)

        if make:
            _and.append({'make': int(make)})
            filters['make'] = int(make)

        if model:
            _and.append({'model': int(model)})
            filters['model'] = int(model)

        if features and len(features) > 0:
            filters['features'] = []

            for _feature in features:
                _and.append({'features': _feature})
                filters['features'].append(_feature)

        if color and len(color) > 0:
            _colors = []
            filters['color'] = []

            for _color in color:
                _colors.append({'color': _color})
                filters['color'].append(_color)

            _and.append({'$or': _colors})

        if cylinders and len(cylinders) > 0:
            _cylinders = []
            filters['cylinders'] = []

            for _cylinder in cylinders:
                _cylinders.append({'cylinders': int(_cylinder)})
                filters['cylinders'].append(int(_cylinder))

            _and.append({'$or': _cylinders})

        if min_year:
            _and.append({'year': {'$gte': int(min_year)}})
            filters['min_year'] = int(min_year)

        if max_year:
            _and.append({'year': {'$lte': int(max_year)}})
            filters['max_year'] = int(max_year)

        if model:
            _and.append({'model': int(model)})
            filters['model'] = int(model)

        if condition:
            _and.append({'condition': int(condition)})
            filters['condition'] = int(condition)

        if fuel_type:
            _and.append(({'fuelType': int(fuel_type)}))
            filters['fuelType'] = int(fuel_type)

        if warranty is not None:
            _and.append({'warranty': warranty})
            filters['warranty'] = warranty

        if has_image is not None and has_image == True:
            _and.append((
                {'$nor': [
                    {'images': {'$exists': False}},
                    {'images': {'$size': 0}},

                ]}
            ))
            filters['has_image'] = True

        if region:
            _and.append({'region': int(region)})
            filters['has_image'] = int(region)

        if max_distance:
            _and.append({'distance': {'$lte': int(max_distance)}})
            filters['max_distance'] = int(max_distance)

        if body_type and len(body_type) > 0:
            _body_types = []
            filters['body_type'] = []

            for _body_type in body_type:
                _body_types.append({'bodyType': int(_body_type)})
                filters['body_type'].append(int(_body_type))

            _and.append({'$or': _body_types})

        if doors and len(doors) > 0:
            _doors = []
            filters['doors'] = []

            for _door in doors:
                _doors.append({'numOfDoors': int(_door)})
                filters['doors'].append(int(_door))

            _and.append({'$or': _doors})

        if transmission is not None:
            _and.append({'transmission': transmission})
            filters['transmission'] = transmission

        if min_hp:
            _and.append({'hp': {'$gte': int(min_hp)}})
            filters['min_hp'] = int(min_hp)

        if max_hp:
            _and.append({'hp': {'$lte': int(max_hp)}})
            filters['max_hp'] = int(max_hp)

        _query['$and'] = _and

        data = list()
        try:
            col = DataBase.advertisement_collection()

            records = col.find(_query).sort([("last-modified-date", pymongo.DESCENDING)]).skip(
                (page - 1) * per_page if page > 0 else 0) \
                .limit(per_page)
            count = col.find(_query).count()
            for record in records:
                data.append(record)
            return {"Message": "successfully found data", "data": data, "count": count, "filters": filters}
        except PyMongoError as e:
            return {"Message": "Error finding data"}