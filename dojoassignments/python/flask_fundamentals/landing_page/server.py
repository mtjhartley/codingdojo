from flask import Flask, redirect, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

#examples of sessions!
@app.route('/show')
def show_user():
    return render_template('user.html', name='Jay', email='kpatel@codingdojo.com')

@app.route('/ninjas')
def ninjas():
    return render_template("ninjas.html")

@app.route('/dojos/new')
def new_dojo():
    return render_template('dojos.html')

@app.route('/handleuser', methods=["POST"])
def handle_user():
    print request.form
    return redirect('/')
    
app.run(debug=True)