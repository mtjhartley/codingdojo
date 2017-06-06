class Underscore(object):
    def map(self, array, function):
        new_array = []
        for element in array:
            new_array.append(function(element))
        return new_array
    def reduce(self, array, function):
        new_array = []
        total = 0
        for element in array:
            new_array.append(function(element))
        for new_element in new_array:
            total += new_element
        return total
            
    def find(self, array, function):
        for element in array:
            if function(array[element]) == True:
                return array[element]
                break #finds the first instance 
            else:
                return False
                
    def filter(self, array, function):
        new_array = []
        for index in range(len(array)):
            if function(array[index]) == True:
                new_array.append(array[index]) 
        return new_array
    def reject(self, array, function):
        new_array = []
        for index in range(len(array)):
            if not function(array[index]):
                new_array.append(array[index])
        return new_array
                
                
                

#library with five methods
#instancing the class
_ = Underscore() #instancing as a variable that is an underscore

#evens = _.filter([1,2,3,4,5,6], lambda x: x % 2 == 0)
#should return [2,4,6]

double = _.map([1,2,3], lambda x : x * 2)

add_squares = _.reduce([1,2,3], lambda x: x ** 2)

first_divisible_by_2 = _.find([1,2000,3,4,5,6], lambda x: x % 2 == 0)

keep_divis_by_3 = _.filter([3,6,9,11,14,18], lambda x: x % 3 == 0)

reject_evens = _.reject([1, 7, 4, 3, 8, 10], lambda x: x % 2 == 0)

print double
print add_squares
print first_divisible_by_2
print keep_divis_by_3
print reject_evens
