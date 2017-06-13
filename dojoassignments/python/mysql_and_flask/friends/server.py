from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
    query = "SELECT * FROM friends" #define my query
    friends = mysql.query_db(query)
    return render_template('index.html', all_friends = friends) #pass data to template

#inserting records
@app.route('/friends', methods=["POST"])
def create():
    #add a friend to the database!
    #write our query as a string, note multiple values
    query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (:first_name, :last_name, :occupation, NOW(), NOW())"
    #then create a dictionary of data from the post data received!
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "occupation": request.form['occupation'],
    }
    mysql.query_db(query, data)
    return redirect('/')


#displaying records
@app.route('/friends/<friend_id>')
def show(friend_id):
    #write query to select specific user by id. at every point we want
    #to insert our own data, write : followed by variable name.
    query = "SELECT * FROM friends WHERE id = :specific_id"
    # Then define a dictionary with key that matches :variable_name in query.
    data = {'specific_id': friend_id} #<friend_id> = friend_id, must match, as must specific_id
    #run query with inserted data!
    friends = mysql.query_db(query, data)
    return render_template('index.html', all_friends=friends)

@app.route('/update_friend/<friend_id>', methods=['POST'])
def update(friend_id):
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, occupation = :occupation WHERE id = :id"
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'occupation': request.form['occupation'],
             'id': friend_id
           }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/remove_friend/<friend_id>', methods=["POST"])
def delete(friend_id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': friend_id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)