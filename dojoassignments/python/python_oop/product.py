class Product(object):
    def __init__(self, price, name, weight, brand, cost):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "For Sale."
    def showInfo(self):
        print "Price:", self.price
        print "Name:", self.name
        print "Weight:", self.weight
        print "Brand:", self.brand
        print "Cost:", self.cost
        print "Status:", self.status
        return self
    def sell(self):
        print "You are selling this item!"
        self.status = "Sold."
        return self
    def addTax(self, tax):
        print "Calculating the new cost of the item with tax"
        print "The original price of the item was", self.price
        print "The new price of the item is ", self.price * tax + self.price
        return self.price * tax + self.price
    def returnItem(self, reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
        elif reason == "unopened":
            self.status = "For Sale"
        elif reason =="unwanted": #opened
            self.status = "Used"
            self.price = self.price * .8 

yeezys = Product(100, "Yeezys", 2, "Nike", 50)

yeezys.showInfo().sell().showInfo().returnItem("unwanted")
yeezys.showInfo()
