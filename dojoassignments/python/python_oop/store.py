class Store(object):
    def __init__(self,location,owner):
        self.location = location
        self.owner = owner
        self.products = []
    def storeInfo(self):
        print "Location:", self.location
        print "Owner:", self.owner
        print "Products:", self.products
        return self
    def add_product(self, product):
        self.products.append(product)
        return self
    def remove_product(self, product_name):
        for product in self.products:
            if product["name"] == product_name:
                print "Found a match!"
                self.products.remove(product)
        return self
    def inventory(self):
        print "Inventory:"
        for product in self.products:
            print product
        return self

mikeyMart = Store("Everett", "Mikey")

COD = {
    "name": "Call of Duty",
    "price": 60,
    "genre": "First Person Shooter",
}

HALO = {
    "name": "Halo 3",
    "price": 40,
    "genre": "First Person Shooter",
}

MELEE = {
    "name": "Melee",
    "price": 10,
    "genre": "Party Game",
}
mikeyMart.add_product(COD).add_product(HALO).add_product(MELEE).storeInfo().remove_product("Halo 3").storeInfo().inventory()

