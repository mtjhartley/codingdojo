from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'disappearing_ninja_app/index.html')

def ninjas(request):
    context = {}
    image_path = 'disappearing_ninja_app/images/tmnt.png'
    context['image'] = image_path
    return render(request, 'disappearing_ninja_app/ninjas.html', context)


def ninjas_color(request, color):
    image_path = 'disappearing_ninja_app/images/'

    if color == "":
        image_path += 'tmnt.png'
    elif color == "blue":
        image_path += 'leonardo.jpg'
    elif color == "orange":
        image_path += 'michelangelo.jpg'
    elif color == "red":
        image_path += 'raphael.jpg'
    elif color == "purple":
        image_path += 'donatello.jpg'
    else:
        image_path += 'notapril.jpg'
    
    context= {
        "image":image_path
    }
    return render(request, 'disappearing_ninja_app/ninjas.html', context)