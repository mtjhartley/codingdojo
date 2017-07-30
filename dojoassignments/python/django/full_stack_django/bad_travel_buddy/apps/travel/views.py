from django.shortcuts import render, HttpResponse, redirect
from .models import Destination
from ..login_registration.models import User
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.urls import reverse

# Create your views here.
def index(request):
    context = {
        "destinations": Destination.objects.all()
    }
    return render(request, 'travel/index.html', context)

def new(request):
    return render(request, 'travel/new.html')

def create(request):
    user = User.objects.get(id=request.session['id'])
    if request.method == 'POST':
        destinationObject = Destination.objects.isValidDestination(request.POST, user)
        if 'destination' in destinationObject:
            return redirect(reverse('travel:index'))
        else:
            for error in destinationObject['errors']:
                messages.warning(request, error)
            return redirect(reverse('travel:new'))
    else:
        return redirect(reverse('travel:index'))


def delete_all(request):
    User.objects.all().delete()
    Destination.objects.all().delete()
    return redirect(reverse('auth:index'))