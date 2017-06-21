from django.shortcuts import render, HttpResponse, redirect
from .models import User, Secret
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Count

# Create your views here.
def index(request):
    return render(request, 'secrets/index.html')

def register(request):
    if request.method == 'POST':
        userObject = User.objects.isValidRegistration(request.POST)
        if 'user' in userObject:
            request.session['id'] = userObject['user'].id 
            request.session['first_name'] = userObject['user'].first_name 
            return redirect(reverse('secrets'))
        else:
            for error in userObject['errors']:
                messages.warning(request, error)
            return redirect(reverse('index'))
    else:
        return redirect('')

def login(request):
    if request.method == 'POST':
        userObject = User.objects.isValidLogin(request.POST)
        if 'user' in userObject:
            request.session['id'] = userObject['user'].id 
            request.session['first_name'] = userObject['user'].first_name
            return redirect(reverse('secrets'))
        else:
            for error in userObject['errors']:
                messages.warning(request, error)
            return redirect(reverse('index'))

def secrets(request):
    context = {
        "current_user": User.objects.get(id=request.session['id']),
        "secrets": Secret.objects.annotate(num_likes=Count('like')).order_by('-created_at'),
    }
    #iterate through secrets, add a key for minutes_since or time_since. 

    return render(request, 'secrets/secrets.html', context)

def handle_secrets(request):
    if request.method == 'POST':
        user = User.objects.get(id=request.session['id'])
        print request.POST['secret']
        print user
        print user.first_name
        print user.id
        secret = Secret.objects.create(secret=request.POST['secret'], author=user)

    #add secrets to our db!
    return redirect(reverse('secrets'))

def delete_secrets(request, secret_id):
    if request.method == 'POST':
        Secret.objects.get(id=secret_id).delete()
        #should also delete the likes from the manytomany table that share the secret_id

    return redirect(reverse('secrets'))

def like_secrets(request, secret_id):
    if request.method == 'POST':
        liking_user = User.objects.get(id=request.session['id'])
        secret = Secret.objects.get(id=secret_id)
        secret.like.add(liking_user)
    return redirect(reverse('secrets'))


def hall_of_fame(request):
    context = {
    "secrets":Secret.objects.annotate(num_likes=Count('like')).order_by('-num_likes'),

    }
    
    return render(request, "secrets/hall_of_fame.html", context)