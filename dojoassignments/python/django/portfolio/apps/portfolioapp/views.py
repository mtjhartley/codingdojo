from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'portfolioapp/index.html')

def testimonials(request):
    return render(request, 'portfolioapp/testimonials.html')
