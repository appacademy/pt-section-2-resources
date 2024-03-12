from flask import Flask
from .routes.user_routes import user_routes

app = Flask(__name__)

app.register_blueprint(user_routes, url_prefix="/users")

@app.route("/")
def home():
    return '<h1>APP HOME</h1>'