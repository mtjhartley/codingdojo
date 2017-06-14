from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
import os, binascii
import md5
app = Flask(__name__)
app.secret_key="ABC"
mysql = MySQLConnector(app,'mydb')


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register')
def register():
    return render_template('register.html')
    

@app.route('/handle_registration', methods=['POST'])
def handle_registration():
    passTests = True
    query = "INSERT INTO wall_users (first_name, last_name, email, password, salt, created_at, updated_at) \
    VALUES (:first_name, :last_name, :email, :hashed_pw, :salt, NOW(), NOW())"
    data = {}

    #first_name validation
    if len(request.form['first_name']) >= 2 and len(request.form['first_name']) < 46:
        data["first_name"] = request.form['first_name']
    else:
        flash("First name must be at least 2 characters!")
        passTests = False
    #last_name validation
    if len(request.form['last_name']) >= 2 and len(request.form['last_name']) < 46:
        data["last_name"] = request.form['last_name']
    else:
        flash("Last name must be at least 2 characters!")
        passTests = False
    #email validation
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        passTests = False
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        passTests = False
    else:
        data["email"] = request.form['email']
    #password validation
    if len(request.form['password']) < 8:
        flash("Password must be at least 8 characters long.")
        passTests = False
    elif request.form['password'] != request.form['confirm_password']:
        flash("Passwords do not match.")
        passTests = False
    else:
        password = request.form['password']
        salt = binascii.b2a_hex(os.urandom(15))
        hashed_pw = md5.new(password + salt).hexdigest()
        data['salt'] = salt
        data['hashed_pw'] = hashed_pw
    print "Printing data from registration."
    print data

    if passTests:
        user_id = mysql.query_db(query, data)
        flash("Successfully registered!")
        session['id'] = user_id
        return redirect('/wall')
    else:
        return redirect('/register')


@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/handle_login', methods=['POST'])
def handle_login():
    email = request.form['email']
    password = request.form['password']
    user_query = "SELECT * FROM wall_users \
    WHERE wall_users.email = :email LIMIT 1"
    query_data = {'email': email}
    

    user = mysql.query_db(user_query, query_data)
    print "Printing data from login", user
    if len(user) != 0:
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
        print user[0]['password']
        print encrypted_password
        if user[0]['password'] == encrypted_password:
            flash("Successfully logged in!")
            session['id'] = user[0]['id']
            return redirect('/wall')
        else:
            flash("Invalid login password. Please try again.")
            return redirect('/login')
    else:
        flash("Email not in database. Try again.")
        return redirect('/login')
        

@app.route('/success')
def success():
    #only displays if logged in 
    if not session['id']:
        return redirect('/login')
    else:
        return redirect('/wall')

@app.route('/handle_message', methods=['POST'])
def handle_message():
    post_message = request.form['wall_message']
    user_id = session['id']
    user_query = "INSERT INTO wall_messages (message, wall_user_id, created_at, updated_at) \
    VALUES (:post_message, :user_id, NOW(), NOW())"
    query_data = {
        "post_message" : post_message,
        "user_id" : user_id
    }
    print user_id
    print post_message
    mysql.query_db(user_query, query_data)

    return redirect('/wall')
    
    
@app.route('/handle_comment', methods=['POST'])
def handle_comment():
    post_comment = request.form['wall_comment']
    message_id = request.form['message_id']
    user_id = session['id']
    user_query = "INSERT INTO wall_comments (comment, wall_user_id, wall_message_id, created_at, updated_at) \
                VALUES (:post_comment, :user_id, :message_id, NOW(), NOW())"
    query_data = {
        "post_comment": post_comment,
        "user_id": user_id,
        "message_id": message_id
    }
    mysql.query_db(user_query, query_data)

    return redirect('/wall')

@app.route('/delete', methods=['POST'])
def delete_message():
    message_id = request.form['message_id']
    user_query = "DELETE FROM wall_messages WHERE wall_messages.id = :message_id"
    query_data = {
        "message_id" : message_id
    }
    mysql.query_db(user_query, query_data)
    
    return redirect('/wall')


@app.route('/wall')
def wall():
    messageInfo = {}
    query = "SELECT wall_messages.message as message, wall_messages.wall_user_id as message_user_id,wall_messages.id as message_id, DATE_FORMAT(wall_messages.created_at, '%M %d %Y %T') as calendar_date, \
            CONCAT(wall_users.first_name, ' ', wall_users.last_name) as name \
            FROM wall_messages \
            JOIN wall_users \
            ON wall_messages.wall_user_id = wall_users.id \
            ORDER BY wall_messages.created_at DESC"
    messages = mysql.query_db(query)

    comment_query = "SELECT wall_comments.comment as comment, DATE_FORMAT(wall_comments.created_at, '%M %d %Y %T') as calendar_date, \
                    CONCAT(wall_users.first_name, ' ', wall_users.last_name) as name, \
                    wall_comments.wall_user_id as commenter_id, \
                    wall_comments.wall_message_id as message_id \
                    FROM wall_comments \
                    JOIN wall_users \
                    ON wall_comments.wall_user_id = wall_users.id"
    comments = mysql.query_db(comment_query)
    return render_template('wall.html', messages=messages, comments = comments)


app.run(debug=True)

