from django.shortcuts import render
from .models import Client, Project
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    context = {
        "clients": Client.objects.all()

    }
    return render(request, 'resources/index.html', context)

def client_add(request):
    return render(request, 'resources/client_add.html')

def handle_client_add(request):
    if request.method == 'POST':
        new_client = Client.objects.create(business_name=request.POST['business_name'], email=request.POST['email'], phone=request.POST['phone'], notes=request.POST['notes'])
        print "*" * 50
        print new_client.id
        url = reverse('client_show', kwargs={'client_id': new_client.id})
        return HttpResponseRedirect(url)

def client_show(request, client_id):
    context = {
        "client": Client.objects.get(id=client_id)
    }
    return render(request, 'resources/client_show.html', context)

def project_add(request, client_id):
    context = {
        "client": Client.objects.get(id=client_id)
    }
    return render(request, 'resources/project_add.html', context)

def handle_project_add(request, client_id):
    if request.method =='POST':
        client = Client.objects.get(id=client_id)
        project_name = request.POST['project_name']
        notes = request.POST['notes']
        new_project = Project.objects.create(project_name=project_name, client=client, notes=notes)
        url = reverse('project_show', kwargs={'project_id': new_project.id})
        return HttpResponseRedirect(url)
    else:
        return redirect('index')


def project_show(request, project_id):
    context = {
        "project": Project.objects.get(id=project_id),
        "client": Client.objects.get(projects__id=project_id) #foreign keys!

    }
    return render(request, 'resources/project_show.html', context)
