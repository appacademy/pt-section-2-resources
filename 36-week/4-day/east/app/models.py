from .db import db

class Basic(db.Model):
    __tablename__ = "basics"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    age = db.Column(db.Integer)