
#Find and Replace
words = "It's thanksgiving day. It's my birthday too!"
first_occurance_of_day = words.find('day')
print first_occurance_of_day #prints 18, the index where the d in day starts.
new_string = words.replace('day', 'month')
print new_string

#Min and Max
x = [2,54,-2,7,12,98]
print min(x)
print max(x)

#First and Last
x = ["hello", 2, 54, -2, 7, 12, 98, "world"]
print x[0], x[-1]
new_x = [x[0], x[-1]]
#alternatively, new_x = [x[0], x[len(x)-1]]
print new_x

#New List
y = [19,2,54,-2,7,12,98,32,10,-3,6]
y.sort()
# y = [-3, -2, 2, 6, 7, 10, 12, 19, 32, 54, 98] now
halfway = len(y)/2
start = y[:halfway]
end = y[halfway:]

final_list = [start]
final_list_2 = [start]
print final_list #[[-3,-2,2,6,7]]
for number in end:
    final_list.append(number)
print final_list


