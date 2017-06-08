from flask import Flask, render_template, redirect, request, session, flash
import re
import datetime

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")

app = Flask(__name__)
app.secret_key="ABC"




@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=["POST"])
def process():
    personInfo = {}
    needRedirect = False

    if len(request.form['first_name']) < 1:
        flash("Please enter a first name.")
        needRedirect = True
    elif not request.form['first_name'].isalpha():
        flash("Your first name can only contain letters.")
        needRedirect = True
    else:
        personInfo['first_name'] = request.form['first_name']
    #last_name validator
    if len(request.form['last_name']) < 1:
        flash("Please enter a last name.")
        needRedirect = True
    elif not request.form['first_name'].isalpha():
        flash("Your last name can only contain letters.")
        needRedirect = True
    else:
        personInfo['last_name'] = request.form['last_name']
    
    #email validator
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        needRedirect = True
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        needRedirect = True
    else:
        personInfo['email'] = request.form['email']
    #password validator
    if len(request.form['password']) < 8:
        flash("Password can not be less than 8 char.")
        needRedirect = True
    elif request.form['password'] != request.form['confirm_password']:
        flash("Passwords do not match!")
        needRedirect = True
    elif not PASSWORD_REGEX.match(request.form['password']):
        flash("Invalid Password: Must have 1 Uppercase, 1 numeric value.")
        needRedirect = True
    else:
        personInfo['password'] = request.form['password']
    
    print request.form["password"]
    #birthday Validator (Can't be born today or in the future.)

    try:
        currentDate = datetime.datetime.now().date()
        birthday = request.form['birthday']
        datetimeBirthday = datetime.datetime.strptime(birthday, '%Y-%m-%d').date()
        print datetimeBirthday
        print type(datetimeBirthday)
        if datetimeBirthday >= currentDate:
            flash ("Are you a time traveler? You can't be born in the future...")
            needRedirect = True
        else:
            personInfo["birthday"] = datetimeBirthday
    except ValueError:
        flash("Please enter a valid date")
        needRedirect = True
        

    #will add all flash messages to the page, instead of immediately redirecting when one is found
    if needRedirect:
        return redirect('/')
    else:
        print personInfo
        flash("Thanks for submitting your information.")
        return redirect('/')


app.run(debug=True, port=4000)