from flask import Flask, render_Template

app = Flask(__name__)

@app.route('/')

def index():
    return render_Template('index.html')

if __name__ == "__main__":
    app.run(debug = True)
