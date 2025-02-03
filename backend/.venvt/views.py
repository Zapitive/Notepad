from flask import Blueprint

views = Blueprint(__name__,'views')

@views.route('/')
def index():
    return "Hello Pranay!"