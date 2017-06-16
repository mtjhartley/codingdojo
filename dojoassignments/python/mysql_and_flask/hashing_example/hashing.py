from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import md5
app = Flask(__name__)
mysql = MySQLConnector(app, 'friendsdb')

password = 'password'
#encrypt password as 32 char str
hashed_password = md5.new(password).hexdigest()
print hashed_password  
# 5f4dcc3b5aa765d61d8327deb882cf99 

#the route you use to handle users in your database!
@app.route('/users/create', methods=['POST'])
def create_user():
    username = request.form['username']
    email = request.form['email']
    password = md5.new(request.form['password']).hexdigest()
    insert_query = "INSERT INTO users (username, email, password, created_at, updated_at) \
    VALUES (:username, :email, :password, NOW(), NOW())"
    query_data = {'username': username, 'email': email, 'password': password}
    mysql.query_db(insert_query, query_data)

@app.route('/users/login', methods=['POST'])
def login_user():
    password = md5.new(request.form['password']).hexdigest()
    email = request.form['email']
    user_query = "SELECT * FROM users WHERE users.email = :email AND users.password = :password"
    query_data = {'email': email, 'password': password}
    user = mysql.query_db(user_query, query_data)
    # do the necessary logic to login if exists, otherwise
    #redirect to login page with error message

"""~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"""
#Now with salting!

def create_user_salt():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
    salt =  binascii.b2a_hex(os.urandom(15))
    hashed_pw = md5.new(password + salt).hexdigest()
    insert_query = "INSERT INTO users (username, email, password, salt, created_at, updated_at)
        VALUES (:username, :email, :hashed_pw, :salt, NOW(), NOW())"
    query_data = { 'username': username, 'email': email, 'hashed_pw': hashed_pw, 'salt': salt}
    mysql.query_db(insert_query, query_data)

def login_user_salt():
    email = request.form['email']
    password = request.form['password']
    user_query = "SELECT * FROM users WHERE users.email = :email LIMIT 1"
    query_data = {'email': email}
    user = mysql.query_db(user_query, query_data)
    if len(user) != 0:
    encrypted_password = md5.new(password + user[0]['salt']).hexdigest();
        if user[0]['password'] == encrypted_password:
            # this means we have a successful login!
        else:
            # invalid password!
    else:
        # invalid email!



