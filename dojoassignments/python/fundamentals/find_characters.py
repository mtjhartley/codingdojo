"""
Write a program that takes a list of strings and a string containing a single character, and prints a new list of all the strings containing that character.

Here's an example:
# input
word_list = ['hello','world','my','name','is','Anna']
char = 'o'
# output
new_list = ['hello','world']
"""

def find_characters(lst, char):
    new_list = []
    for word in lst:
        if char in word:
            new_list.append(word)
    return new_list

word_list = ['hello','world','my','name','is','Anna']
char = 'o'

print find_characters(word_list, char)


            
