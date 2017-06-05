"""
Create a function called draw_stars() that takes a list of numbers and prints out *.
For example:
x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)should print the following in when invoked:
****
******
*
***
*****
*******
*************************
"""

def draw_stars(lst):
    for num in lst:
        if isinstance(num, int):
            print "*" * num

x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)

"""
Part 2: Modify to allow a list of integers and strings. If strings, display the first letter repeated
by the length of the string.
"""
print
print "Now drawing better stars"
print
def draw_better_stars(lst):
    for thing in lst:
        if isinstance(thing, int):
            print "*" * thing
        elif isinstance(thing, str):
            print thing[0].lower() * len(thing)

y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_better_stars(y)