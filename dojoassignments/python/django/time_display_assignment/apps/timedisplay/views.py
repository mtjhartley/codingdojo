from django.shortcuts import render, HttpResponse
import datetime

# Create your views here.
def index(request):
    
    date = datetime.datetime.now().date()
    date_str = date.strftime('%b %d, %Y')
    time = datetime.datetime.now().time()
    time_str = time.strftime('%H:%M:%S')
    #print date_str

    datetime_dict = {
        "date": date_str,
        "time": time_str
    }
    #rint datetime_dict
    return render(request, 'timedisplay/index.html', datetime_dict)
