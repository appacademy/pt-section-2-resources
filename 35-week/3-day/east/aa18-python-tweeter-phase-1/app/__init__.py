from flask import Flask, render_template
from .config import Config
from .tweets import tweets
from .forms.sample import SampleForm
import random

app = Flask(__name__)
app.config.from_object(Config)

@app.route("/")
def home():
    # index = random.randint(0, len(tweets) - 1)
    # tweet = tweets[index]
    tweet = random.choice(tweets)
    return render_template("base.html")

@app.route("/feed")
def feed():
    return render_template("feed.html", tweets=tweets)

@app.route("/new")
def new():
    form = SampleForm()
    return render_template("form.html", form=form)