class Bike(object):
    def __init__(self, price, max_speed, miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayInfo(self):
        print "This bike costs " + str(self.price) + " dollars"
        print "This bike's max speed is", self.max_speed
        print "This bike's has been ridden for " + str(self.miles) + " miles."
        return self
    def ride(self):
        print "You are currently riding the bike~!"
        self.miles += 10
        return self
    def reverse(self):
        print "You are reversing...the miles on the bike?"
        self.miles -= 5
        if self.miles < 0:
            print "You can't go under 0 miles!"
            self.miles = 0
        return self



bike1 = Bike(200, "25 MPH", 0)
bike2 = Bike(10, "15 MPH", 10)
bike3 = Bike(300, "35 MPH", 5)
bike4 = Bike(200, "25 MPH", 0)


#bike1 and bike4 are equivalent after method calls, proof of chaining methods.
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

bike4.ride().ride().ride().reverse().displayInfo()

bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()

bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()

