from flask import Flask, render_template
from .config import Config
from .forms import SimpleForm

app = Flask(__name__)
app.config.from_object(Config)

@app.route("/")
def home():
    form = SimpleForm()
    return render_template("index.html", form=form)