import math
array1 = [1,2,3,4,5,15]


def balance_point_bst(arr, index):
	
	if sum(arr[:index]) == sum(arr[index:]):
		print sum(arr[:index])
		print sum(arr[index:])
		print "match"
		search = False
		return True
	elif search:
		if sum(arr[:index]) < sum(arr[index:]):
			print "recursing"
			balance_point_bst(arr, int(math.floor(len(arr)+index)/2))
		else:
			print "this doesn't work"
	else:
		return True

print balance_point_bst(array1, int(math.floor(len(array1)/2)))