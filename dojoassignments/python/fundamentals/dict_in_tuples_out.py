"""
Write a function that takes in a dictionary and 
returns a list of tuples where the first tuple item is the key
and the second is the value. Here's an example:

# function input
my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}
#function output
[("Speros", "(555) 555-5555"), ("Michael", "(999) 999-9999"), ("Jay", "(777) 777-7777")]

"""

my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def dict_in_tuples_out(any_dict):
    tuples = []
    for key in any_dict:
        my_tuple = (key, any_dict[key])
        tuples.append(my_tuple)
    return tuples

print dict_in_tuples_out(my_dict)

