from django.shortcuts import render, HttpResponse, redirect
from pos import pos
import nltk

# Create your views here.
def index(request):
    return render(request, 'nltkapp/index.html')

#process post data
def handle_sentence(request):
    

    sentence = request.POST['sentence']
    print sentence
    words = nltk.word_tokenize(sentence)
    print words
    tagged = nltk.pos_tag(words)
    print tagged

    grammarInfo = pos()
    grammarDictToDisplay = {}
    request.session['original_sentence'] = sentence
    request.session['list'] = []
    for pair in tagged:
        try:
            request.session['list'].append((pair[0], grammarInfo[pair[1]]))
        except KeyError:
            pass
    print '*' * 50
    print request.session.items()
    return redirect('success')

def success(request):
    return render(request, 'nltkapp/success.html')