mixed_list = ['magical unicorns',19,'hello',98.98,'world']
integer_list = [1,2,3,4,5]
string_list = ["Michael", "Dempsey", "Hartley"]

def identify_list_type(lst):
    new_string = ''
    total = 0
    for thing in lst:
        if isinstance(thing, int) or isinstance(thing, float):
            total += thing
        elif isinstance(thing, str):
            new_string += thing

    if new_string and total:
        print "The array you entered is of mixed type"
        print "String:", new_string
        print "Total:", total
    elif new_string:
        print "The array you entered is of string type"
        print "String:",new_string
    else:
        print "The array you entered is of number(float or int) type"
        print "Total:", total

print
identify_list_type(mixed_list)
print
identify_list_type(integer_list)
print
identify_list_type(string_list)
print

        
            


