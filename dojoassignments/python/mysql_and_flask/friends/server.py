from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySqlConnector
app = Flask(__name__)
mysql = MySqlConnector(app,'friendsdb')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/friends', methods=['POST'])
def create():
    #add a friend to the database!
    return redirect('/')


app.run(debug=True)