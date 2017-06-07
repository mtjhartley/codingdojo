from flask import Flask, redirect, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def handle_process():
    name = request.form['name']
    print "Wow! How simple it is to get data from a form."
    print "Here's the name you inputted:", name
    return redirect('/')

app.run(debug=True)
