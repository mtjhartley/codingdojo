from flask import Flask, redirect, render_template, request
import random
app = Flask(__name__)

@app.route('/')
def index():
    colors = {}
    colors['red'] = 255
    colors['green'] = 255
    colors['blue'] = 255
    
    return render_template("index.html", color = colors)

@app.route('/changecolor', methods=['POST'])
def change_color():
    print request.form
    red = int(request.form["red"])
    green = int(request.form["green"])
    blue = int(request.form["blue"])

    colors = {}
    colors['red'] = int(request.form["red"])
    colors['green'] = int(request.form["green"])
    colors['blue'] = int(request.form["blue"])
    rand1= random.randint(0,255)
    rand2= random.randint(0,255)
    rand3= random.randint(0,255)

    return render_template('index.html', color = colors, random1 = rand1, random2 = rand2, random3 = rand3)

app.run(debug=True, port=4000)

