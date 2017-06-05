#Count odds and evens
def odd_even():
    for num in range(1,2001):
        if num % 2 == 0:
            print "Number is " + str(num) + " This is an even number."
        else:
            print "Number is " + str(num) + " This is an odd number."
odd_even()

#Multiply an array by a factor
def multiply(lst, factor=5):
    for index in range(len(lst)):
        lst[index] *= factor
    return lst

multiply([1,2,3])

#Hacker Challenge
def layered_multiples(arr):
    output = []
    for num in arr:
        temp_list = []
        count = 1
        while count <= num:
            temp_list.append(1)
            count += 1
        output.append(temp_list)
    return output
print layered_multiples([1,2,3])

a = [2,4,5]

print layered_multiples(multiply(a, 3))




