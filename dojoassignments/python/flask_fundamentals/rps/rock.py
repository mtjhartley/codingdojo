from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisisSecret'

@app.route('/', methods=['POST', 'GET'])
def index():
    if "wins" not in session:
        session['wins'] = 0
        session['losses'] = 0
        session['ties'] = 0

    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        # logic to determine the winner
        array = ["ROCK", "PAPER", "SCISSORS"]

        random_number = random.randint(0,2)
        computer_choice = array[random_number]
        print computer_choice

        our_choice = request.form['rps']
        print our_choice

        if computer_choice == our_choice:
            #tie
            session['ties'] += 1
            message = "You tied."

        elif computer_choice == "PAPER" and our_choice == "ROCK":
            session['losses'] += 1
            message = "You lost."

        elif computer_choice == "PAPER" and our_choice == "SCISSORS":
            session['wins'] += 1
            message = "You won."

        elif computer_choice == "ROCK" and our_choice == "SCISSORS":
            session['losses'] += 1
            message = "You lost."

        elif computer_choice == "ROCK" and our_choice == "PAPER":
            session['wins'] += 1
            message = "You won."

        elif computer_choice == "SCISSORS" and our_choice == "PAPER":
            session['losses'] += 1
            message = "You lost."

        elif computer_choice == "SCISSORS" and our_choice == "ROCK":
            session['wins'] += 1
            message = "You won."

        if session['wins'] == 2:
            message = "YOU WON!"
            session['wins'] = 0
            session['losses'] = 0
            session['ties'] = 0

        elif session['losses'] == 2:
            message = "YOU LOST!"
            session['wins'] = 0
            session['losses'] = 0
            session['ties'] = 0

        print session
        return render_template('index.html', message = message)

app.run(debug=True)
