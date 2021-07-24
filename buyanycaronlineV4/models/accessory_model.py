from models.advertisement_model import Advertisement

"""
This Accessory class is the same as the Advertisement class, but it will be needed for future expansion.
"""


class NumberPlate(Advertisement):
    def __init__(self, adType: int = -1, owner: str = "", title: str = "", price: int = 0, decription: str = "", digits: int = 0, city: str =""):
        super().__init__(adType=adType,title=title, price=price, decription=decription, owner=owner)
        self.__digits = digits
        self.__city = city

    def get_digits(self):
        return self.__digits

    def set_digits(self, val: int):
        self.__digits = val