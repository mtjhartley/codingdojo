from django.shortcuts import render, HttpResponse, redirect
import random
import datetime

# Create your views here.
def index(request):
    print "hello world"
    if not "log" in request.session:
        request.session['gold'] = 1
        request.session['log'] = []
        
    return render(request, 'ninjagoldapp/index.html')

def process_money(request, money_method):
    print "hello process"
    
    if request.method == "POST":
        if money_method == "farm":
            zennys_gained = random.randint(10,20)
            request.session['gold'] += zennys_gained
            request.session['log'].insert(0, "Earned " + str(zennys_gained) + " zennys from the farm! " + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
        elif money_method == "cave":
            zennys_gained = random.randint(5,10)
            request.session['gold'] += zennys_gained
            request.session['log'].insert(0, "Earned " + str(zennys_gained) + " zennys from the cave! " + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
        elif money_method == "house":
            zennys_gained = random.randint(2,5)
            request.session['gold'] += zennys_gained
            request.session['log'].insert(0, "Earned " + str(zennys_gained) + " zennys from the cave! " + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
        elif money_method == "casino":
            zennys_gained = random.randint(-50,50)
            request.session['gold'] += zennys_gained
            if zennys_gained >= 0:
                request.session['log'].insert(0, "Earned " + str(zennys_gained) + " zennys from the casino! " + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
            else:
                request.session['log'].insert(0, "Lost " + str(zennys_gained) + " zennys from the casino :(" + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
        else:
            request.session['log'].insert(0, "Invalid route, sneaky you!")
            pass

        
        #code here
        return redirect('index')
    else:
        return redirect('index')

def restart(request):
    request.session.clear()
    return redirect('index')
