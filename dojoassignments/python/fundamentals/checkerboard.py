"""
Write a program that prints a 'checkerboard' pattern to the console.

Your program should require no input and produce console output that looks like so:
* * * *
 * * * *
* * * *
 * * * *
* * * *
 * * * *
* * * *
 * * * *
"""



def print_checkerboard(num_lines):
    for num in range(num_lines): #implicit start at 0
        if num % 2 == 0:
            print "* * * *"
        else:
            print " * * * *"
print_checkerboard(8)