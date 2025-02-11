from flask import Flask
from flask_cors import CORS
from views import views

application = Flask(__name__)
CORS(application,origins=["http://localhost:3000","http://localhost:5173"])

application.register_blueprint(views, url_prefix="/")
application.secret_key = 'Hello'


if __name__ == '__main__':
   application.run(debug = True, port =5000)