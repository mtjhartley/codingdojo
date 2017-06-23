from django.shortcuts import render, HttpResponse, redirect
from ..login_registration.models import User
from django.contrib.auth.decorators import login_required
from django.core.urlresolvers import reverse
import bcrypt


# Create your views here.
def dashboard(request):
    user = User.objects.get(id=request.session['id'])
    boolean = user.admin
    context = {
        "users": User.objects.all(),
        "boolean": boolean
    }

    return render(request, 'dashboard/dashboard.html', context)



def add_user(request):
    user = User.objects.get(id=request.session['id'])
    boolean = user.admin
    if boolean:
        return render(request, 'dashboard/add_user.html')
    else:
        return redirect('index')


def handle_add_user(request):
    if request.method =='POST':
        userObject = User.objects.isValidRegistration(request.POST)
    return redirect(reverse('dashboard'))

def edit_user(request, user_id):
    print user_id
    user = User.objects.get(id=user_id)

    admin_user = User.objects.get(id=request.session['id'])
    context = {
        "user": user,
        "boolean": admin_user.admin,
    }
    if admin_user.admin or int(user_id) == request.session['id']:
        print user.admin
        print "i'm an admin"
        return render(request, 'dashboard/edit_user.html', context)
    else:
        print "not rendering correctly >:("
        return redirect(reverse('index'))

def handle_edit_user(request, user_id):
    user = User.objects.get(id=user_id)
    if request.method == "POST":
        print request.POST
        if 'password' in request.POST and request.POST['password'] == request.POST['password']:
            hashed = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
            print hashed
            user.password = hashed
            user.save()
            #user.password = request.POST['password']
        else:
            user.email = request.POST['email']
            user.first_name = request.POST['first_name']
            user.last_name = request.POST['last_name']
            user.admin = request.POST['admin']
            user.save()

    # if password in request.POST
    # do password change
    #else do information change.
    return redirect(reverse('dashboard'))

def handle_delete_user(request, user_id):
    current_user = User.objects.get(id=request.session['id'])
    user_to_delete = User.objects.get(id=user_id)
    if current_user.admin and not user_to_delete.admin:
        user = User.objects.get(id=user_id).delete()
    return redirect(reverse('dashboard'))

def show_user(request, user_id):
    user = User.objects.get(id=user_id)
    context = {
        "user": user
    }
    #create forms, render messages on show page and you're done :)
    return render(request, 'dashboard/show_user.html', context)
