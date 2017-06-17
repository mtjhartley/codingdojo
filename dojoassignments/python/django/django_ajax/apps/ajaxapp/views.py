from django.shortcuts import render, redirect, HttpResponse

# Create your views here.

def index(request):
    return render(request, 'ajaxapp/index.html')

def message(request):
    stringy = "You found me!"
    return HttpResponse(stringy)