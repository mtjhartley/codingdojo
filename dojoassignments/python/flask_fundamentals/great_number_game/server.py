from flask import Flask, redirect, render_template, request, session, url_for, jsonify
import random
app = Flask(__name__)
app.secret_key ="ABC"


#function to initialize the random number from 1-100
def getSession():
    session['correct_number'] = random.randint(1,100)
    
@app.route('/')
def index():
    if not session['correct_number']:
        getSession()
    print "printing session"
    print session['correct_number']
    return render_template('index.html')

@app.route('/guess', methods=["POST"])
def guess():
    #if the users guess, sent thru the post form, matches the rng
    if int(request.form['number_guess']) == int(session['correct_number']):
        boolean = True
        session['guess'] = boolean
        session['low'] = False
        session['low'] = False
        #are redirected to the homepage, and the session values
        #in the flask template become true for guess
        #and the div is rendered. 
        return redirect('/')
    elif int(request.form['number_guess']) > int(session['correct_number']):
        session['high'] = True
        session['low'] = False
        session['guess'] = False
        return redirect('/')
    else:
        session['high'] = False
        session['low'] = True
        session['guess'] = False
        return redirect('/')
    return redirect(url_for('index'))
    
#if the user hits the play again button,
#the entire session is cleared, redirected to '/'...is this changing the session?
@app.route('/play_again', methods=["POST"])
def play_again():
    session.clear()
    getSession() 
    return redirect('/')

app.run(debug=True, port=2222)