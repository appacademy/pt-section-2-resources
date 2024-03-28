from flask import Flask, render_template
from flask_migrate import Migrate
from .form import SubmitForm
from .config import Configuration
from .db import db
from .models import Basic


app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)


@app.route("/")
def home():
    form = SubmitForm()
    return render_template("index.html", form=form)