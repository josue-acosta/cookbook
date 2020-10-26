from flask import Blueprint
from initial import app
from datetime import datetime


generic_urls_blueprint = Blueprint("generic_urls", __name__)


@generic_urls_blueprint.route("/")
def index():
    return app.send_static_file('index.html')


@generic_urls_blueprint.route("/api/time")
def get_current_time():
    return {"time": datetime.now().strftime("%A, %d. %B %Y %I:%M%p")}