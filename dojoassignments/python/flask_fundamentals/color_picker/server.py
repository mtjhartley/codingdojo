from flask import Flask, redirect, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET'])
def change_color():
    red = request.args.get("red")
    green = request.args.get("green")
    blue = request.args.get("blue")

    colors = {}
    colors['red'] = red
    colors['green'] = green
    colors['blue'] = blue

    return render_template('index.html', color = colors)

app.run(debug=True, port=4000)

