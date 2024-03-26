from flask import Flask, render_template
from .form import SubmitForm
from .config import Configuration

app = Flask(__name__)
app.config.from_object(Configuration)

@app.route("/")
def home():
    form = SubmitForm()
    return render_template("index.html", form=form)