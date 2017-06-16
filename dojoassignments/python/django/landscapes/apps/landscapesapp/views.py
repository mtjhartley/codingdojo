from django.shortcuts import render, redirect, HttpResponse
import random
from prime_checker import is_prime
# Create your views here.
def index(request):
    return render(request, 'landscapesapp/index.html')

def picture(request, number):
    end_paths = ['snow.jpg', 'desert.jpg', 'forest.jpg', 'vineyard.jpg', 'tropical.jpg']
    context = {}
    image_path = 'landscapesapp/images/'
    number = int(number)
    #check if number is out of range
    if number < 1 or number > 50:
        print "out of range condition"
        context['message'] = "Please keep your url in the range 1-50! We've assigned you a random integer from 1-50"
        number = random.randint(1,50)
    
    #check if number is prime, and render immediately to secure the image_path
    if is_prime(number):
        print "prime condition"
        context['prime'] = "Your number was prime! Enjoy your random image!"
        image_path += end_paths[random.randint(0,4)]
        context['image_path'] = image_path
        return render(request, 'landscapesapp/picture.html', context)
    
    #otherwise, add to the image path string but do not render until the end. only one of these elifs will ever be true.
    elif number >= 1 and number <=10:
        image_path += end_paths[0]

    elif number >= 11 and number <=20:
        image_path += end_paths[1]

    elif number >= 21 and number <=30:
        image_path += end_paths[2]

    elif number >= 31 and number <=40:
        image_path += end_paths[3]

    elif number >= 41 and number <=50:
        image_path += end_paths[4]

    context['image_path'] = image_path
    return render(request, 'landscapesapp/picture.html', context)