from flask import Flask, redirect, render_template, request, session, url_for, jsonify
import random
import datetime
app = Flask(__name__)
app.secret_key ="ABC"


@app.route('/')
def index():
    if not "log" in session:
        session['gold'] = 0
        session['log'] = [];
    else:
        pass
    return render_template('index.html')

@app.route('/process_money', methods=["POST"])
def process_money():
    if request.form['building'] == 'farm':
        gold_gained = random.randint(10,20)
        session['gold'] += gold_gained
        session['log'].insert(0, "Earned " + str(gold_gained) + " gold from the farm! " + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
    elif request.form['building'] == 'cave':
        gold_gained = random.randint(5,10)
        session['gold'] += gold_gained
        session['log'].insert(0, "Earned " + str(gold_gained) + " gold from the cave! " + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
    elif request.form['building'] == 'house':
        gold_gained = random.randint(2,5)
        session['gold'] += gold_gained
        session['log'].insert(0, "Earned " + str(gold_gained) + " gold from the house! " + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
    elif request.form['building'] == 'casino':
        gold_gained = random.randint(-50,50)
        session['gold'] += gold_gained
        if gold_gained >= 0:
            session['log'].insert(0, "Earned " + str(gold_gained) + " gold from the casino! " + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
        else:
            session['log'].insert(0, "Lost " + str(gold_gained) + " gold from the casino :(" + "(" + str(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))+ ")")
    return redirect('/')

@app.route('/restart', methods=["POST"])
def restart():
    session.clear()
    return redirect('/')

app.run(debug=True, port=4000)