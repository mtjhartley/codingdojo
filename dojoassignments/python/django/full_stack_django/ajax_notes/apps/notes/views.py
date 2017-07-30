from django.shortcuts import render, HttpResponse, redirect
from .models import Note
from django.urls import reverse


# Create your views here.
def index(request):
    context = {
        "notes": Note.objects.all(),

    }
    return render(request, 'notes/index.html', context)

def create(request):
    if request.method == 'POST':
        title = request.POST['title']
        description = request.POST['description']
        Note.objects.create(title=title, description=description)
    context = {
        'notes': Note.objects.all(),
    }
    return render(request, 'notes/notes_index.html', context)

def destroy(request, note_id):
    if request.method == 'POST':
        Note.objects.get(id=int(note_id)).delete()
    context = {
        'notes': Note.objects.all()
    }
    return render(request, 'notes/notes_index.html', context)