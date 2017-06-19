from django.shortcuts import render, redirect
from .models import Blog, Comment

# Create your views here.
def index(request):
    context = {
        "blogs": Blog.objects.all() #select * from Blog
    }
    return render(request, 'blogapp/index.html', context)

def blogs(request):
    if request.method == 'POST':
        #using ORM here!
        #runs the query for us, inserting into Blogs title, blog, values of these things :)
        Blog.objects.create(title=request.POST['title'], blog=request.POST['blog'])
        return redirect('/')
    else:
        return redirect('/')

def comments(request, blog_id):
    blog = Blog.objects.get(id=blog_id)
    Comment.objects.create(comment=request.POST['comment'], blog=blog)
    return redirect('/')
