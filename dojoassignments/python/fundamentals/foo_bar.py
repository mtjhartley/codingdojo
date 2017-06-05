"""
Optional Assignment: Foo and Bar
Write a program that prints all the prime numbers and all the perfect squares for all numbers between 100 and 100000.

For all numbers between 100 and 100000 test that number for whether it is prime or a perfect square.
 If it is a prime number print "Foo". If it is a perfect square print "Bar".
If it is neither print "FooBar". Do not use the python math library for this exercise. 
For example, if the number you are evaluating is 25, you will have to figure out if it is a perfect square. It is, so print "Bar".

This assignment is extra challenging! Try pair programming and pulling up a white board.
"""
     

def prime_number(number):
    if number > 1:
        for divisor in range(2, number):
            if (number % divisor) == 0:
                return False
        return True

def perfect_square(number):
    if number == 1:
        return True
    for multiplicant in range(2, number):
        if multiplicant ** 2 == number:
            return True
    return False

def foo_bar():
    for number in range(100, 100001):
        if prime_number(number) and perfect_square(number):
            print "FooBar" #would this ever happen...? no it wouldn't.
        elif prime_number(number):
            print "Foo"
        elif perfect_square(number):
            print "Bar"
        else:
            print number

foo_bar()