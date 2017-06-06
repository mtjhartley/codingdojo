class User(object):
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.logged = True
    def __repr__(self):
        return "User object {}, email{}>".format(self.name, self.email)

if __name__ == "__main__":
    user = User("Anna", "anna@anna.com")
    print user