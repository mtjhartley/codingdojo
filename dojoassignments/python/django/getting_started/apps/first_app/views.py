from django.shortcuts import render, HttpResponse
#CONTROLLER!!! client does something, it comes to this controller!
#the index function is called when the root is visited
#this view can also(should) render a template!
def index(request):
    print "*" * 50
    response = "Hello, I am your first request!"
    #return HttpResponse(response)
    return render(request, 'first_app/index.html')

# Create your views here.
