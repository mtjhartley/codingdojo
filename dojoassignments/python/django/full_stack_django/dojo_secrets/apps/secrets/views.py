from django.shortcuts import render, HttpResponse, redirect
from .models import Secret
from ..login_registration.models import User
from django.core.urlresolvers import reverse
from django.db.models import Count

# Create your views here.
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

def delete_secrets(request, secret_id, source):
    Secret.objects.get(id=secret_id).delete()
    print "source"
    print source

    #should also delete the likes from the manytomany table that share the secret_id
    # or is this automattock?
    if source=="main_page":
        return redirect(reverse('secrets'))
    else:
        return redirect(reverse('hall_of_fame'))

def like_secrets(request, secret_id, page=None):
    liking_user = User.objects.get(id=request.session['id'])
    secret = Secret.objects.get(id=secret_id)
    secret.like.add(liking_user)
    if source=="main_page":
        return redirect(reverse('secrets'))
    else:
        return redirect(reverse('hall_of_fame'))


def hall_of_fame(request):
    context = {
    "current_user": User.objects.get(id=request.session['id']),
    "secrets":Secret.objects.annotate(num_likes=Count('like')).order_by('-num_likes'),
    } 
    return render(request, "secrets/hall_of_fame.html", context)