class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = .15
        else:
            self.tax = .12
    def displayAll(self):
        print "Price:", self.price
        print "Speed:", str(self.speed)
        print "Fuel:", str(self.fuel)
        print "Mileage:", str(self.mileage)
        print "Tax:", self.tax
        

car1 = Car(11000, "60mph", "Full", "20mpg")
car2 = Car(8000, "40mph", "Half Full", "30mpg")
car3 = Car(10000, "80mph", "Full", "50mpg")
car4 = Car(120, "10mph", "Empty", "5mpg")
car5 = Car(10000000, "120mph", "Full", "3mpg")
car6 = Car(1000, "30mph", "Quarter Tank", "31mpg")

car1.displayAll()
print
car2.displayAll()
print
car3.displayAll()
print
car4.displayAll()
print
car5.displayAll()
print
car6.displayAll()

