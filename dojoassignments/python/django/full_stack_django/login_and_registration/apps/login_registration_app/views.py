from django.shortcuts import render, HttpResponse, redirect
from .models import User
from django.contrib import messages


# Create your views here.
def index(request):
    return render(request, 'login_registration_app/index.html')

def register(request):
    userObjet = User.objects.isValidRegistration(request.POST)
    if 'user' in userObject:
        messages.success(request, userObject['success'])
        return redirect('success')
    else:
        for error in userObject['errors']:
            messages.warning(request, error)
        return redirect('index')

def login(request):
    userObject = User.objects.isValidLogin(request.POST)
    if 'user' in userObject:
        messages.success(request, userObject['success'])
        return redirect('success')
    else:
        for error in userObject['errors']:
            messages.warning(request, error)
        return redirect('index')

def success(request):
    return render(request, 'login_registration_app/success.html')
