from flask import Flask, request, redirect, render_template, session, flash, url_for
from mysqlconnection import MySQLConnector
import re
import os, binascii
import md5
app = Flask(__name__)
app.secret_key="ABC"
mysql = MySQLConnector(app,'mydb')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')




def validate_registration_forms(first_name, last_name, email, password, confirm_password):
    data = {}
    passTests = True
    #validate first_name
    if len(first_name) >= 2 and len(first_name) < 256:
        data["first_name"] = first_name
    else:
        flash("First name must be at least 2 characters!")
        passTests = False
    
    #validate last_name
    if len(last_name) >= 2 and len(last_name) < 256:
        data["last_name"] = last_name
    else:
        flash("Last name must be at least 2 characters!")
        passTests = False
    #validate email
    if len(email) < 1:
        flash("Email cannot be blank!")
        passTests = False
    elif not EMAIL_REGEX.match(email):
        flash("Invalid Email Address!")
        passTests = False
    else:
        data["email"] = email
    #validate password
    if len(password) < 8:
        flash("Password must be at least 8 characters long.")
        passTests = False
    elif password != confirm_password:
        flash("Passwords do not match.")
        passTests = False
    else:
        password = password
        salt = binascii.b2a_hex(os.urandom(15))
        hashed_pw = md5.new(password + salt).hexdigest()
        data['salt'] = salt
        data['hashed_pw'] = hashed_pw
    
    if passTests:
        print data
        return data
    else:
        return False

@app.route('/handle_registration', methods=['POST'])
def handle_registration():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    confirm_password = request.form['confirm_password']
    user_data = validate_registration_forms(first_name, last_name, email, password, confirm_password)
    query = "INSERT INTO books_users (first_name, last_name, email, password, salt, created_at, updated_at) \
    VALUES (:first_name, :last_name, :email, :hashed_pw, :salt, NOW(), NOW())"

    if user_data:
        user_id = mysql.query_db(query, user_data)
        #prolly don't need to flash for success since user will be redirected
        flash("Successfully registered!")
        session['id'] = user_id
        return redirect('/allbooks')
    else:
        flash("Error with registration. Please fix the above errors.")
        return redirect('/')
    
@app.route('/')
def register():
    return render_template('new_user.html')

@app.route('/handle_login', methods=['POST'])
def handle_login():
    email = request.form['email']
    password = request.form['password']
    user_query = "SELECT * FROM books_users \
    WHERE books_users.email = :email LIMIT 1"
    query_data = {'email': email}
    

    user = mysql.query_db(user_query, query_data)
    print "Printing data from login", user
    if len(user) != 0:
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
        print user[0]['password']
        print encrypted_password
        if user[0]['password'] == encrypted_password:
            #prolly don't need to flash for success since user will be redirected
            flash("Successfully logged in!")
            session['id'] = user[0]['id']
            return redirect('/allbooks')
        else:
            flash("Invalid login password. Please try again.")
            return redirect('/')
    else:
        flash("Email not in database. Try again.")
        return redirect('/')

@app.route('/add')
def add_book():
    return render_template('add.html')


@app.route('/handle_add', methods=['POST'])
def handle_add():
    if session['id']:
        title = request.form['title']
        author = request.form['author']
        #update books_books table 
        user_query = "INSERT INTO books_books (title, author, created_at, updated_at) \
        VALUES (:title, :author, NOW(), NOW())"

        query_data = {
            "title": title,
            "author": author
        }

        book_id = mysql.query_db(user_query, query_data)

        #update books_users_favorite_books table
        user_query2 = "INSERT INTO books_users_favorite_books (books_user_id, books_book_id) \
                    VALUES (:user_id, :book_id)"
        
        query_data2 = {
            "user_id": session['id'],
            "book_id": book_id
        }
        mysql.query_db(user_query2, query_data2)
        return redirect('/allbooks')
    else:
        flash("Could not add book. Let's debug this error together")
        return redirect('/add')
    

@app.route('/allbooks')
def all_books():
    if not session['id']:
        return redirect('/')
    else:
        query = "SELECT books_books.id as book_id, books_books.title as title, books_books.author as author, \
                    DATE_FORMAT(books_books.created_at, '%M %d %Y %T') as date_added, CONCAT(books_users.first_name, ' ', books_users.last_name) as name, \
                    books_users.id as added_by_id \
                    FROM books_books JOIN books_users_favorite_books on books_books.id = books_users_favorite_books.books_book_id \
                    JOIN books_users ON books_users_favorite_books.books_user_id = books_users.id \
                    ORDER BY date_added DESC"
        books = mysql.query_db(query)
        return render_template('books.html', all_books = books, everyone=True)



@app.route('/delete/<book_id>')
def delete(book_id):
    query_data = {
        "book_id": book_id 
    }
    query = "SELECT * FROM books_books WHERE id = :book_id"
    bookInfo = mysql.query_db(query, query_data)
    book_name = bookInfo[0]['title']
    return render_template('delete.html', book_name=book_name, book_id=book_id)

@app.route('/handle_delete', methods=['POST'])
def handle_delete():

    book_id = request.form['book_id']
    user_query = "DELETE FROM books_users_favorite_books \
            WHERE books_user_id = :user_id AND books_book_id = :book_id"
    query_data = {
        "user_id": session['id'],
        "book_id": book_id
    }
    mysql.query_db(user_query, query_data)
    """
    user_query = "DELETE FROM books_books WHERE id = :book_id"
    query_data = {
    "book_id": book_id
    }
    mysql.query_db(user_query, query_data)
    """

    return redirect('/allbooks')

@app.route('/user/<user_id>')
def user_books(user_id):
    if not session['id']:
        return redirect('/')
    else:
        
        user_query = "SELECT books_book_id FROM books_users_favorite_books \
                WHERE books_user_id = :user_id"
        
        query_data = {
            "user_id": user_id
        }

        results = mysql.query_db(user_query, query_data)
        if len(results) > 0:
            print results
            book_ids = []
            for result in results:
                book_ids.append (int(result['books_book_id']))
            print "book ids",book_ids
            
            user_query = "SELECT books_books.id as book_id, books_books.title as title, books_books.author as author, \
                    DATE_FORMAT(books_books.created_at, '%M %d %Y %T') as date_added, CONCAT(books_users.first_name, ' ', books_users.last_name) as name, \
                    books_users.id as added_by_id \
                    FROM books_books JOIN books_users_favorite_books on books_books.id = books_users_favorite_books.books_book_id \
                    JOIN books_users ON books_users_favorite_books.books_user_id = books_users.id \
                    WHERE books_users.id = :user_id"
            
            query_data = {
                "user_id": session['id'],
            }

            users_books = mysql.query_db(user_query, query_data)
            print "all users books",users_books

            return render_template('books.html', all_books = users_books, everyone=False)
        else:
            user_query = "SELECT CONCAT(books_users.first_name, ' ', books_users.last_name) as name \
                            FROM books_users WHERE books_users.id = :user_id"
            query_data = {
                "user_id": user_id
            }
            user_name = mysql.query_db(user_query, query_data)
            print user_name[0]['name']
            message = "You have no books :( Add some!"
            return render_template('books.html', all_books = user_name, message=message)

@app.route('/addexisting/<book_id>')
def add_existing(book_id):
    query_data = {
        "book_id": book_id 
    }
    query = "SELECT * FROM books_books WHERE id = :book_id"
    bookInfo = mysql.query_db(query, query_data)
    book_name = bookInfo[0]['title']
    return render_template('add_existing.html', book_name=book_name, book_id=book_id)

@app.route('/handle_add_existing', methods=['POST'])
def handle_add_existing():
    book_id = request.form['book_id']
    query = "INSERT INTO books_users_favorite_books (books_user_id, books_book_id) \
            VALUES (:user_id, :book_id)"
    data = {
        "user_id":session['id'],
        'book_id': book_id
    }
    mysql.query_db(query, data)

    return redirect(url_for('user_books', user_id=session['id']))


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')



app.run(debug=True)