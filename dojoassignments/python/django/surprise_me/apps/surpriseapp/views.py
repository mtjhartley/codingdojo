from django.shortcuts import render, redirect, HttpResponse
import random
VALUES = ['Spider-Man', 'Batman', 'Superman', 'Captain America', 'Iron Man', 'Thor', 'The Flash', 'Strider Hiryu', 'Megaman X', 'Zero']
# Create your views here.
def index(request):
    return render(request, 'surpriseapp/index.html')

def results(request):
    context = {}
    if request.method == 'POST':
        quantity = int(request.POST['quantity'])
        print '*' * 50
        print quantity
        random.shuffle(VALUES)
        context['heroes'] = VALUES[:quantity]
    elif request.method == 'GET':
        context['message'] = "Please use our form to reach this page :)"

    return render(request, 'surpriseapp/results.html', context)