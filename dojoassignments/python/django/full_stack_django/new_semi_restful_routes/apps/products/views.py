from django.shortcuts import render, redirect, HttpResponse
from .models import Product
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.urls import reverse
from ..login_registration.models import User
# Create your views here.
def index(request):
    context = {
        "products": Product.objects.all()

    }
    return render(request, 'products/index.html', context)

def new(request):
    return render(request, 'products/new.html')

def create(request):
    user = User.objects.get(id=request.session['id'])
    if request.method == 'POST':
        productObject = Product.objects.isValidProduct(request.POST, user)
        if 'product' in productObject:
            return redirect(reverse('products:index'))
        else:
            for error in productObject['errors']:
                messages.warning(request, error)
            return redirect(reverse('products:new'))
    else:
        return redirect(reverse('products:index'))
            
    
def show(request, product_id):
    context = {
        "product": Product.objects.get(id=product_id)
    }
    return render(request, 'products/show.html', context)

def edit(request, product_id):
    context = {
        "product": Product.objects.get(id=product_id)
    }
    return render(request, 'products/edit.html', context)

def update(request, product_id):
    if request.method =='POST':
        productObject = Product.objects.updateValidProduct(request.POST, product_id)
        if 'product' in productObject:
            return redirect(reverse('products:index'))
        else:
            for error in productObject['errors']:
                messages.warning(request, error)
            url = reverse('products:edit', kwargs={'product_id': product_id})
            return HttpResponseRedirect(url)
    else:
        return redirect(reverse('products:index'))

def destroy(request, product_id):
    if request.method == 'POST':
        product = Product.objects.get(id=product_id).delete()
        return redirect(reverse('products:index'))
    else:
        return redirect(reverse('products:index'))
        

    