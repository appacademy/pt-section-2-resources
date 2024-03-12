from flask import Blueprint

user_routes = Blueprint("user_routes", __name__)

@user_routes.route("")
def home():
    return '<h1>USER HOME ROUTE</h1>'