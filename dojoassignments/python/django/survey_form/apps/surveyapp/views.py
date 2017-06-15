from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    print 'index' * 50
    if not 'count' in request.session:
        request.session['count'] = 0
    return render(request, 'surveyapp/index.html')

#handles form on index page
def process(request):
    print '*' * 50
    print request.method
    if request.method == "POST":
        request.session['first_name'] = request.POST['first_name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        request.session['count'] += 1
        return redirect('result')
    #return redirect('result') #could be hugee
    else:
        return redirect('index')

def result(request):
    return render(request, 'surveyapp/result.html')
