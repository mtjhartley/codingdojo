from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
    query = "SELECT CONCAT(first_name, ' ', last_name) as name, occupation, DATE_FORMAT(created_at, '%d %b %y') as friend_since, (YEAR(NOW()) - YEAR(birthday)) as age FROM friends" #define my query
    friends = mysql.query_db(query)
    return render_template('index.html', all_friends = friends) #pass data to template

#inserting records
@app.route('/friends', methods=["POST"])
def create():
    #add a friend to the database!
    #write our query as a string, note multiple values
    query = "INSERT INTO friends (first_name, last_name, occupation, birthday, created_at, updated_at) VALUES (:first_name, :last_name, :occupation, :birthday, NOW(), NOW())"
    #then create a dictionary of data from the post data received!
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "occupation": request.form['occupation'],
        "birthday": request.form['birthday'],
    }
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)