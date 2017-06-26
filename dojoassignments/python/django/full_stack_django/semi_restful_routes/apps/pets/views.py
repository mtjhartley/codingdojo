from django.shortcuts import render, HttpResponse, redirect
from .models import Pet
from django.http import HttpResponseRedirect
from django.urls import reverse

# Create your views here.
def index(request):
    context = {
        "pets": Pet.objects.all()
    }
    return render(request, 'pets/index.html', context)

def new(request):
    return render(request, 'pets/new.html')

def create(request):
    if request.method == 'POST':
        name = request.POST['name']
        description = request.POST['description']
        newPet = Pet.objects.create(name=name, description=description)
    return redirect(reverse('index'))

def show(request, pet_id):
    context = {
        "pet": Pet.objects.get(id=pet_id)
    }
    return render(request, 'pets/show.html', context)

def edit(request, pet_id):
    context = {
        "pet": Pet.objects.get(id=pet_id)
    }
    return render(request, 'pets/edit.html', context)

def update(request, pet_id):

    if request.method == 'POST':
        pet = Pet.objects.get(id=pet_id)
        name = request.POST['name']
        description = request.POST['description']
        pet.name = name 
        pet.description = description
        pet.save()
    return redirect(reverse('index'))

def destroy(request, pet_id):
    if request.method == 'POST':
        pet = Pet.objects.get(id=pet_id).delete()
    return redirect(reverse('index'))

