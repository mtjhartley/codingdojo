from django.shortcuts import render
from .models import People

# Create your views here.
def index(request):
    People.objects.create(first_name="Michael", last_name="Hartley")
    people = People.objects.all()
    Course.objects.create(first_name="Michael", last_name="Hartley")
    course = Course.objects.all()
    print people
    return render(request, 'modelapp/index.html')