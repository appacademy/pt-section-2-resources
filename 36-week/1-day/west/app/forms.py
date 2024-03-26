from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, SelectField, IntegerField
from wtforms.validators import DataRequired

class SimpleForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    email = StringField("Email")
    age = IntegerField("Age")
    issue = SelectField("Issue", choices=["404", "Ded PC", "Other"])
    submit = SubmitField("Submit")