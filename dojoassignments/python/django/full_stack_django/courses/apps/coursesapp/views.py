from django.shortcuts import render, redirect, HttpResponse 
from .models import Course, Description

# Create your views here.
def index(request):
    context = {
        "courses": Course.objects.all()
    }
    return render(request, 'coursesapp/index.html', context)

#function to handle adding new course
def courses(request):
    if request.method == 'POST':
        course = Course.objects.create(name=request.POST['name'])
        Description.objects.create(text=request.POST['description'], course_id=course)
        print course
        print Description
        print course.description.text
    return redirect('/')

def delete(request, course_id):
    context = {
        "courses": Course.objects.get(id=course_id)
    }
    return render(request, 'coursesapp/delete.html', context)

def destroy(request, course_id):
    if request.method == 'POST':
        print course_id
        Course.objects.filter(id=course_id).delete()
        return redirect('/')
        #Course.objects.delete method where id = course_id