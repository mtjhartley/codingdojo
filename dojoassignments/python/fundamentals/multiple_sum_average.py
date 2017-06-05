#Multiples Part I
# for num in range(1,1000):
#     if num % 2 == 1:
#         print num

#Multiples Part II
# for num in range (5,1000005):
#     if num % 5 == 0:
#         print num

#Sum List
a = [1, 2, 5, 10, 255, 3]

def sum_list(lst): 
    total = 0
    for num in lst:
        total += num
    print total

sum_list(a)

#Average List
def avg_list(lst):
    total = 0.0
    count = 0
    for num in lst:
        total += num
        count += 1
    print total/count
    
avg_list(a)
