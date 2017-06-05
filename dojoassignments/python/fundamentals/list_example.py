fruits = ['apple', 'banana', 'orange']
vegetables = ['corn', 'bok choy', 'lettuce']

fruits_and_vegetables = fruits + vegetables
print fruits_and_vegetables

salad = 3 * vegetables

print salad
print vegetables[0] #corn
print vegetables[1] #bok choy
print vegetables[2] #lettuce

vegetables.append('spinach')
print vegetables[3]

print vegetables[2:] #[lettuce, spinach]

print vegetables[1:3] #[bok choy, lettuce]

for index, item in enumerate(vegetables):
    item = item.upper()
    vegetables[index] = item

print vegetables

index = 0
for food in vegetables:
    vegetables[index] = food.lower()
    index += 1

print vegetables

#another enumerate example
my_list = ['apple', 'banana', 'grapes', 'pear']
counter_list = list(enumerate(my_list, 1))
print counter_list

numbers = [1,2,3,4]

new_numbers = map(lambda x: x*3, numbers)

print new_numbers