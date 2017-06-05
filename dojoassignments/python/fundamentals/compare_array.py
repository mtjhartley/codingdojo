"""
Write a program that compares two lists and prints a message depending on if the inputs are identical or not.

Your program should be able to accept and compare two lists: list_one and list_two. 
If both lists are identical print "The lists are the same". 
If they are not identical print "The lists are not the same." 
Try the following test cases for lists one and two:
"""

list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]

list_three = [1,2,5,6,5]
list_four = [1,2,5,6,5,3]

list_five = [1,2,5,6,5,16]
list_six = [1,2,5,6,5]

list_seven = ['celery','carrots','bread','milk']
list_eight = ['celery','carrots','bread','cream']

list_nine = ['a', 'b', 'c']
list_ten = ['a','b','z']

#assumes order matters. if order doesn't matter, would call sorted() or .sort on both lists before checking.
def compare_array_order_matters(lst1, lst2):
    if len(lst1) != len(lst2):
        print "The lists are not the same"
        print "This is because the list lengths are not the same."
    else:
        for index in range(len(lst1)):
            if lst1[index] == lst2[index] and (index == len(lst1)-1):
                print lst1[index], lst2[index]
                print "The lists are identical"
            elif lst1[index] == lst2[index]:
                print lst1[index], lst2[index]
                continue
            else:
                print lst1[index], lst2[index]
                print "These items are not the same, thus: "
                print "The lists are not the same."
                break


compare_array_order_matters(list_one, list_two)
print
compare_array_order_matters(list_three, list_four)
print
compare_array_order_matters(list_five, list_six)
print
compare_array_order_matters(list_seven, list_eight)
print
compare_array_order_matters(list_nine, list_ten)
print

def compare_array_order_doesnt_matter(lst1, lst2):
    sorted_lst1 = sorted(lst1)
    sorted_lst2 = sorted(lst2)
    if sorted_lst1 == sorted_lst2:
        print "The lists are equal"
    else:
        print "The lists are not equal"
print "--------------------------------------------------"
print "Now testing the lists when order doesn't matter"
print
compare_array_order_doesnt_matter(list_one, list_two)
compare_array_order_doesnt_matter(list_three, list_four)
compare_array_order_doesnt_matter(list_five, list_six)
compare_array_order_doesnt_matter(list_seven, list_eight)
compare_array_order_doesnt_matter(list_nine, list_ten)





