from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

#works cause of Jinja going through our .html template!
@app.route('/templatetest')
def hello_template():
    return render_template('template_test.html', name="Michael")
    

@app.route('/users', methods=['POST'])
def create_user():
    print "Got Post Info"
    name = request.form['name']
    email = request.form['email']
    print request.form
    print name, email
    return redirect('/')

@app.route('/users/<username>/')
def show_user_profile(username):
    print username

    return render_template("user.html")


@app.route('/passingdata')
def pass_data():
    return render_template("pass_data.html", phrase="Hello", times=10)


app.run(debug=True)

