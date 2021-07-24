from bson import ObjectId
from pymongo.errors import PyMongoError, DuplicateKeyError

from database.database import DataBase
import gridfs


class ImageDB:

    @staticmethod
    def create_image(_id, file, instance_id):
        try:
            col = DataBase.image_collection()
            grid_fs = gridfs.GridFS(DataBase.getInstance())

            img_id = grid_fs.put(file.body, content_type=file.type, filename=file.name, encoding='utf-8')
            col.insert({"_id": _id, "img_id": img_id, "instance_id": instance_id})

            return _id

        except PyMongoError as e:
            return "Error creating image"

        return "Image have been successfully created"

    @staticmethod
    def get_image(image_id):

        try:
            col = DataBase.image_collection()
            grid_fs = gridfs.GridFS(DataBase.getInstance())

            image_obj = col.find_one({"_id": image_id})

            if image_obj:
                file = grid_fs.find_one({"_id": image_obj["img_id"]})
                image = file.read()

                return image
        except:
            pass

    @staticmethod
    def remove_image(image_id):
        col = DataBase.image_collection()
        grid_fs = gridfs.GridFS(DataBase.getInstance())

        image_obj = col.find_one({"_id": ObjectId(image_id)})

        if image_obj:
            grid_fs.remove_one({"_id": image_obj["img_id"]})
            col.remove_one({"_id": ObjectId(image_id)})


