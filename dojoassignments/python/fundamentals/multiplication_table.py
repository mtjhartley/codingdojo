numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12]
#print x + numbers

def print_multiplicaton_table(numbers_list, toNum = 12):
    print "x", " ".join(map(str,numbers))
    for multiplier in range(1, toNum+1):
        new_list = map(lambda x: x * multiplier, numbers_list)
        print multiplier, " ".join(map(str,new_list))

print_multiplicaton_table(numbers)

print
#without using map hof, imo it's better to use it
def print_multiplicaton_table_2(numbers_list, toNum = 13):
    print "x", " ".join(map(str,numbers))
    for multiplier in range(1, toNum):
        new_list = []
        for value in numbers_list:
            new_list.append(value*multiplier)
        print multiplier, " ".join(map(str,new_list))

print_multiplicaton_table_2(numbers)
