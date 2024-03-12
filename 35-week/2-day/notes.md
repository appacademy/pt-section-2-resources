# Flask Cheat Sheet

## Setting up a Flask App

1. Install flask with `pipenv install flask`
2. Create a folder for the app with a `__init__.py` file
3. Import Flask into the `__init__.py` file with `from flask import Flask`
4. Instantiate a Flask instance with `app = Flask(__name__)`
5. Add a `.flaskenv` file with the following variables:

```env
FLASK_APP=app
FLASK_DEBUG=True
```
6. Install the python-dotenv package to load environmental variables: `pipenv install python-dotenv`
7. Run the application with `pipenv run flask run` (you can specify the port by adding `-p <port number>`)

## Setting up Blueprints (AKA Routers) in Flask

1. Create a file for your Blueprint
2. Import Blueprint from flask with `from flask import Blueprint`
3. Create the Blueprint by using the Blueprint constructor and saving it to a variable

```py
my_router = Blueprint("name", "import_name") # The import name is usually __name__
```

4. Add routes to the blueprint by using the `@blueprint_name.route("url")` decorator
5. Import the Blueprint into your application's `__init__.py` file
6. Register your Blueprint with the `app.register_blueprint(blueprint, url_prefix="/prefix")` method