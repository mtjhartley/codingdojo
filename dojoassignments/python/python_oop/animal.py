class Animal(object):
    def __init__(self, name, health=100):
        self.name = name
        self.health = health
    def walk(self):
        print "I am walking!"
        self.health -= 1
        return self
    def run(self):
        print "I am running!"
        self.health -= 5
        return self
    def displayHealth(self):
        print "I currently have " + str(self.health) + " health."
        return self

ammy = Animal("Ammy", 100)
ammy.walk().walk().walk().run().run().displayHealth()
    
class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def displayAttributes(self):
        print self.name, self.health
        return self
    def pet(self):
        print "Petting the dog!"
        self.health += 5
        return self

doge = Dog("doge")

doge.displayAttributes().pet().displayAttributes()

class Dragon(Animal):
    def __init__(self,name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        print "Fly dragon, fly!"
        self.health -= 10
        print self.health
        return self
    def displayHealth(self):
        print "I am a dragon! Show my health!"
        super(Dragon, self).displayHealth()
        return self

spyro = Dragon("Spyro")

spyro.fly().fly().displayHealth().fly().displayHealth()

#doge.fly() doesn't work!
print "doge test"
doge.displayHealth() #does not print dragon!
