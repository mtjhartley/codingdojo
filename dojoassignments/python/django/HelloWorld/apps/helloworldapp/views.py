from django.shortcuts import render

# Create your views here.
def index(request):
    print "hello world xD"
    return render(request, 'helloworldapp/index.html')