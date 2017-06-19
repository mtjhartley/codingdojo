from django.shortcuts import render
#from .models import #ModelName
# Create your views here.
def index(request):
    return render(request, 'booksapp/index.html')