from flask import Flask, redirect, request, render_template, session, url_for
app = Flask(__name__)
app.secret_key ="TestKey"



@app.route('/')
def index():
    print "Printing session"
    if not session:
        session['count'] = 0
    else:
        session['count'] += 1
    return render_template('index.html')

@app.route('/by_two', methods=["POST"])
def count_by_two():
    session['count'] += 1
    return redirect(url_for('index'))

@app.route('/reset', methods=["POST"])
def reset():
    session['count'] = 0
    return redirect(url_for('index'))


app.run(debug=True)
    