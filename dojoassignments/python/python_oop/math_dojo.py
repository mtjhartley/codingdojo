#Part I

class MathDojo(object):
    def __init__(self, value=0):
        self.value = value
    def add(self, *args):
        for arg in args:
            self.value += arg
        return self
    def subtract(self, *args):
        for arg in args:   
            self.value -= arg
        return self
    def result(self):
        print "Current value of the dojo is: " + str(self.value)
        return self

md = MathDojo()

md.add(2).add(2,5).subtract(3,2).add(1).result()

#Part 2
#Can just use magic *args as an argument, cool!
class MathDojo2(object):
    def __init__(self, value=0):
        self.value = value

    def add(self, *args):
        for arg in args:
            if isinstance(arg, list) or isinstance(arg, tuple):
                for val in arg:
                    self.value += val
            elif isinstance(arg, int) or isintance(arg, float):
                self.value += arg
        return self

    def subtract(self, *args):
        for arg in args:
            if isinstance(arg, list) or isinstance(arg, tuple):
                for val in arg:
                    self.value -= val
            elif isinstance(arg, int) or isintance(arg, float):
                self.value -= arg
        return self

    def result(self):
        print "Current value of the dojo is: " + str(self.value)
        return self

print
print
print "Testing Math Dojo 2"
md2 = MathDojo2()
md2.add([1],3,4).add([3,5,7,8],[2,4.3,1.25]).subtract(2, [2,3], [1.1, 2.3]).result()
md2.add([1],3,4).add([3,5,7,8],[2,4.3,1.25]).subtract(2, [2,3], [1.1, 2.3]).result()

print "Testing Math Dojo 3"
md3 = MathDojo2()
#changed some lists to tuples, still works!
md3.add((1),3,4).add((3,5,7,8),[2,4.3,1.25]).subtract(2, [2,3], [1.1, 2.3]).result()
