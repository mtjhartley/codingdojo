from flask import Flask, redirect, request, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninja/')
def ninja():
    image = "ninjas/tmnt.png"
    return render_template('ninja.html', img_src = image)

@app.route('/ninja/<color>')
def specific_ninja(color):

    if color == 'blue':
        image = "ninjas/leonardo.jpg"
        
    elif color == 'red':
        image = "ninjas/raphael.jpg"
        
    elif color == 'orange':
        image = "ninjas/michelangelo.jpg"
        
    elif color == 'purple':
        image = "ninjas/donatello.jpg"
    
    else:
        image= "ninjas/notapril.jpg"
            
    return render_template('ninja.html', img_src = image)

app.run(debug=True, port=3000)
