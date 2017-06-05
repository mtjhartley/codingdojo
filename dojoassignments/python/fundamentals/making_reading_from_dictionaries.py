my_dict = {"favorite_game": "Super Smash Bros. Melee"}

my_dict["first_name"] = "Michael"
my_dict["last_name"] = "Hartley"
my_dict["age"] = 23
my_dict["birth_country"] = "USA"
my_dict["favorite_language"] = "Python"

print my_dict

def unpack_dictionary(any_dict):
    for key in my_dict:
        print "My " + str(key) + " is " + str(my_dict[key])

unpack_dictionary(my_dict)
