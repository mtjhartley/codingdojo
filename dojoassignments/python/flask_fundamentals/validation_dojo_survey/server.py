from flask import Flask, redirect, render_template, request, flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key="ABC"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    personInfo = {}
    #things from dropdown menus can only be what I expect
    personInfo['location'] = request.form['location']
    personInfo['language'] = request.form['language']
    #validate name
    needRedirect = False
    if len(request.form['name']) < 1:
        flash("Name field can not be empty!")
        needRedirect = True

    else:
        personInfo['name'] = request.form['name']
    
    #validate comment
    if len(request.form['comment']) > 120:
        flash("Comment is over 120 chars. Please shorten!")
        needRedirect = True
    elif len(request.form['comment']) < 1:
        flash("Comment field can not be empty!")
        needRedirect = True
    else:
        personInfo['comment'] = request.form['comment']
    
    if needRedirect:
        return redirect('/')

    return render_template('result.html', person = personInfo)

app.run(debug=True, port=4000)