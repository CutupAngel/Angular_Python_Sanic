from sanic import Blueprint, response

from common.enums import AdvertisementTypes
from database.advertisement_collection import AdvertisementDB
from database.image_collection import ImageDB
from decorators.Auth import *

advertisement_blue_print = Blueprint("advertisement_route_blueprint")

@advertisement_blue_print.get("/advertisement/helloworld")
async def helloworld(request: Request):
    return json(body={'hello': 'world'})

@advertisement_blue_print.get("/advertisement/unapproved")
@AuthorizedMod()
async def get_unapproved_ads(request: Request):
    pageNumber = request.args.get("pageNumber")
    nPerPage = request.args.get("nPerPage")
    return json(body=AdvertisementDB.get_unapproved_ads(int(pageNumber), int(nPerPage)))


@advertisement_blue_print.get("/advertisement/approve")
@AuthorizedMod()
async def get_unapproved_ads(request: Request):
    advertisementID = request.args.get("advertisementID")
    return json(body=AdvertisementDB.approve_advertisement(advertisementID))


@advertisement_blue_print.get("/advertisement/search")
async def search(request):
    result = AdvertisementDB.search(request)
    return json(body=result)


@advertisement_blue_print.post("/advertisement/<advertisement_id>/image")
@Authenticated()
async def create_advertisement_image(request, advertisement_id):
    files = request.files['files']
    payload = await decode_jwt_and_get_payload(request)

    db_obj = AdvertisementDB.get_advertisement_by_id(advertisement_id)
    if db_obj.get_adType() not in [AdvertisementTypes.CAR.value, AdvertisementTypes.MOTORCYCLE.value,
                                   AdvertisementTypes.HEAVY.value, AdvertisementTypes.BOAT.value]:
        return json({"Message": "Error, is not a valid advertisement"})
    if db_obj.get_owner() != payload["username"]:
        return json({"Message": "You are not the owner of this ad"})

    images = db_obj.get_images()

    for _file in files:
        if _file.type not in ['image/jpeg', 'image/png']:
            return json({"Message": "Error, image must be a JPEG file."})

    index_of_images = len(images) + 1

    for _file in files:
        file_name = '%s-%d' % (advertisement_id, index_of_images)
        img_id = ImageDB.create_image(file_name, _file, advertisement_id)
        images.append({'_id': img_id})

        index_of_images += 1

    db_obj.set_images(images)

    message = AdvertisementDB.update_advertisement(db_obj, advertisement_id)

    return json({"Message": message})


@advertisement_blue_print.delete("/advertisement/<advertisement_id>/image/<image_id>")
@Authenticated()
async def remove_advertisement_image(request, advertisement_id, image_id):
    payload = await decode_jwt_and_get_payload(request)

    db_obj = AdvertisementDB.get_advertisement_by_id(advertisement_id)
    if db_obj.get_adType() not in [AdvertisementTypes.CAR.value, AdvertisementTypes.MOTORCYCLE.value,
                                   AdvertisementTypes.HEAVY.value, AdvertisementTypes.BOAT.value]:
        return json({"Message": "Error, is not a valid advertisement"})
    if db_obj.get_owner() != payload["username"]:
        return json({"Message": "You are not the owner of this ad"})

    images = db_obj.get_images()
    new_list = []

    for _image in images:
        if _image['_id'] != image_id:
            new_list.append(_image)

    db_obj.set_images(new_list)

    message = AdvertisementDB.update_advertisement(db_obj, advertisement_id)

    return json({"Message": message})


@advertisement_blue_print.get("/advertisement/image/<image_id>")
async def get_advertisement_image(request, image_id):
    image_id = str(image_id).replace('.jpeg', '')
    image = ImageDB.get_image(image_id)

    if image:
        return response.raw(image, content_type='image/jpeg')

    return json({'Message': 'Image not found.'}, 404)


@advertisement_blue_print.get("/advertisement/image")
async def get_advertisement_images(request):
    id_list = request.args['adId'] if 'adId' in request.args else []
    result = []

    for advertisement_id in id_list:
        advertisement = AdvertisementDB.get_advertisement_by_id(id=advertisement_id)
        images = advertisement.get_images()

        first_image = images[0] if images and len(images) > 0 else None

        result.append({'adId': advertisement_id, 'imageId': first_image})

    return json({'data': result})