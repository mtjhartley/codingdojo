from django.shortcuts import render
from .models import Product

# Create your views here.
def index(request):
    return render(request, 'productsapp/index.html')