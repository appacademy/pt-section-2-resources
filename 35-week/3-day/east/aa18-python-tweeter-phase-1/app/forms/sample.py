from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class SampleForm(FlaskForm):
    tweet = StringField("Tweet")
    author = StringField("Author")
    submit = SubmitField("Submit")