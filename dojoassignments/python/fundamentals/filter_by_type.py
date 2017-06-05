"""
Assignment: Filter by Type
Write a program that, given some value, tests that value for its type. Here's what you should do for each type:

Integer
If the integer is greater than or equal to 100, print "That's a big number!" If the integer is less than 100, print "That's a small number"

String
If the string is greater than or equal to 50 characters print "Long sentence." If the string is shorter than 50 characters print "Short sentence."

List
If the length of the list is greater than or equal to 10 print "Big list!" If the list has fewer than 10 values print "Short list."
"""

def integer_filter(num):
    if isinstance(num, int):     #if type(num) == int:
        if num >= 100:
            print "That's a big number."
        else:
            print "That's a small number."
    else:
        print "That's not an integer!"

sI = 45
mI = 100
bI = 455
eI = 0
spI = -23

integer_filter(sI)
integer_filter(mI)
integer_filter(bI)
integer_filter(eI)
integer_filter(spI)

def string_filter(string):
    if isinstance(string, str):
        if len(string) >= 50:
            print "Long sentence."
        else:
            print "Short sentence."
    else: 
        print "Not a string!"
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
string_filter(sS)
string_filter(mS)
string_filter(bS)
string_filter(eS)

def list_filter(lst):
    if isinstance(lst, list):
        if len(lst) >= 10:
            print "Big list!"
        else:
            print "Short list"

aL = [1,7,4,21]
mL = [3,5,7,34,3,2,113,65,8,89]
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
eL = []
spL = ['name','address','phone number','social security number']

list_filter(aL)
list_filter(mL)
list_filter(lL)
list_filter(eL)
list_filter(spL)
