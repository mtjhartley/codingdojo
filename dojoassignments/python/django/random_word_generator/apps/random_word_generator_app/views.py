from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string
# Create your views here.

def random_word_generator():
    random_string = get_random_string(length=14)
    return random_string
    
def index(request):    
    if not 'count' in request.session:
        request.session['count'] = 1
    print "yo"
    if request.session['count'] > 0:
        randomWord = {
            "word": random_word_generator()
        }
    else:
        randomWord = {
            "word": "I am your starting point. Farewell!"
        }
    return render(request, 'random_word_generator_app/index.html', randomWord)

def increment(request):
    if request.method == "POST":
        request.session['count'] += 1
        return redirect('/')
    else:
        return redirect('/')

def clear(request):
    if request.method == "POST":
        request.session['count'] = 0
        return redirect('/')
    else:
        return redirect('/')