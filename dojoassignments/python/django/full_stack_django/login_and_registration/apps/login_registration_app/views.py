from django.shortcuts import render, HttpResponse, redirect
from .models import User


# Create your views here.
def index(request):
    return render(request, 'login_registration_app/index.html')

def register(request):
    print "birthday info"
    print "type", type(request.POST['birthday'])
    print request.POST['birthday']
    if User.objects.isValidRegistration(request.POST, request):
        return redirect('success')
    else:
        return redirect('index')

def login(request):
    if User.objects.isValidLogin(request.POST, request):
        return redirect('success')
    else:
        return redirect('index')

def success(request):
    return render(request, 'login_registration_app/success.html')
