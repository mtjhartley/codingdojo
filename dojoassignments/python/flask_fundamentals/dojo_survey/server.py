from flask import Flask, redirect, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    personInfo = {}
    personInfo['name'] = request.form['name']
    personInfo['location'] = request.form['location']
    personInfo['language'] = request.form['language']
    personInfo['comment'] = request.form['comment']
    return render_template('result.html', person = personInfo)

app.run(debug=True, port=4000)