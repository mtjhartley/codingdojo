#declare a class and give it the name User
class User(object):
    # the __init__ method is called everytime a new object is created
    def __init__(self,name,email):
        #set some instance variables, just like any variable we can call these anything
        self.name = name
        self.email = email
        self.logged = False
    # this is the method we created to help a user login
    def login(self):
        self.logged = True
        print self.name + " is logged in."
        return self
    def logout(self):
        self.logged = False
        print self.name + " is not logged in."
        return self
    def show(self):
        print "My name is {}, and I am a {}. You can email me at {}".format(self.name, self.permission, self.email)
        return self    
#now create an instance of the class
new_user = User("Anna", "anna@anna.com")

print new_user.email
    
