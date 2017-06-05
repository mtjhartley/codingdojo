name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def make_dict(arr1, arr2):
    new_dict = {}
    for index in range(len(arr1)):
        new_dict[arr1[index]] = arr2[index]
    return new_dict

print make_dict(name, favorite_animal)


name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar", "Michael"] #len 8
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"] # len 7

def make_dict_unequal_len_array(arr1, arr2):
    new_dict = {}
    if len(arr1) >= len(arr2):
        array_of_keys = arr1
        array_of_values = arr2
    else:
        array_of_keys = arr2
        array_of_values = arr1
    for index in range(len(array_of_keys)):
        new_dict[array_of_keys[index]] = array_of_values[index]
    return new_dict

        
