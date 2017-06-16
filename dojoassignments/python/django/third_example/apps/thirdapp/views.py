from django.shortcuts import render, HttpResponse, redirect
import random

# Create your views here.
def index(request):
    
    context = {
        "email": "mtjhartley@gmail.com",
        "name": "Michael",
        "rng": str(random.randint(1,10))
    }
    return render(request, "thirdapp/index.html", context)

def show(request, user_id):
    context = {
        "id": user_id
    }
    return render(request, "thirdapp/show.html", context)