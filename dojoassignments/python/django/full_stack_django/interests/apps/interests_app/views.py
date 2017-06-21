from django.shortcuts import render, HttpResponse, redirect
from .models import User, Interest
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect
# Create your views here.
def index(request):
    return render(request, 'interests_app/index.html')

def users(request):
    context = {
        "users": User.objects.all()

    }
    return render(request, 'interests_app/users.html', context)

def show(request, user_id):
    
    context = {
        "user": User.objects.get(id=int(user_id))
    }
    return render(request, 'interests_app/show.html', context)

def add(request):
    if request.method == 'POST':
        user_name = request.POST['name']
        interest_to_check = request.POST['interest']

        #code to check if user if new, if they are, create em

        if User.objects.filter(name=user_name):
            user = User.objects.get(name=user_name)
        else:
            user = User.objects.create(name=user_name)

        #code to check if interest is new. if it is, create it
        
        if Interest.objects.filter(name=interest_to_check):
            #if the interest exists in the database:
            interest = Interest.objects.get(name=interest_to_check)
        else:
            #if it doesn't exist in the database, create it
            interest = Interest.objects.create(name=interest_to_check)
        
        #now we have our person and our interest, let's add em
        interest.people.add(user)
        return redirect(reverse('users'))

def remove(request, user_id, interest_id):
    if request.method == 'POST':
        user = User.objects.get(id=user_id)
        interest = Interest.objects.get(id=interest_id)

        interest.people.remove(user)
        url = reverse('show', kwargs={'user_id': user_id})
        return HttpResponseRedirect(url)
    else:
        return redirect('users')
