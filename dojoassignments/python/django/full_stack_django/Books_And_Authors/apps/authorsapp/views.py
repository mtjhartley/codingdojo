from django.shortcuts import render, HttpResponse
#import models

# Create your views here.
def index(request):
    return render(request, 'authorsapp/index.html')
