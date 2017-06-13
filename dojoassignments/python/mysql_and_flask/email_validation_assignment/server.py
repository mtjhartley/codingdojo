from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re

EMAIL_REGEX = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
app = Flask(__name__)
app.secret_key = "ThisIsSecret"
mysql = MySQLConnector(app,'mydb')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=["POST"])
def process():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        return redirect('/')
    else:
        flash("The email address you entered " + str(request.form['email'] + " is VALID. Thank you!"))
        query = "INSERT INTO email_validation_assignment (email, created_at, updated_at)VALUES (:email, NOW(), NOW())"
        data = { "email": request.form['email'] }
        mysql.query_db(query, data)
        return redirect('/success')

@app.route('/success')
def success():
    query = "SELECT email, DATE_FORMAT(created_at, '%m %d %Y %h:%i %p') as date_created FROM email_validation_assignment"
    emails = mysql.query_db(query)
    return render_template('success.html', all_emails = emails)


@app.route('/delete', methods=["POST"])
def delete():
    query = "DELETE FROM email_validation_assignment WHERE email = :email"
    data = { 'email': request.form['email']}
    mysql.query_db(query, data)
    return redirect('/success')
app.run(debug=True)