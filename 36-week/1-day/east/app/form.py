from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired

class SubmitForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    email = StringField("Email")
    age = IntegerField("Age")
    issue = SelectField("Issue", choices=["404", "Dead PC", "Other"])
    submit = SubmitField("Submit")