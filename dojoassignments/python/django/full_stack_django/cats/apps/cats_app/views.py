from django.shortcuts import render, HttpResponse, redirect
#from .models import Cat

# Create your views here.
def index(request):
    print "in cat index"
    context = {

    }
    return render(request, 'cats_app/index.html', context={})

