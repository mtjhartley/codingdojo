from flask import Flask, render_template, redirect, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

    '''
    return jsonify(username=g.user.username,
                    email=g.user.email)

app.run(debug=True, port=3333)