from flask import Blueprint
from datetime import datetime


generic_urls_blueprint = Blueprint("generic_urls", __name__)


@generic_urls_blueprint.route("/")
def index():
    return "<h1>Deptment of  Control</h1>"


@generic_urls_blueprint.route("/time")
def get_current_time():
    return {"time": datetime.now().strftime("%A, %d. %B %Y %I:%M%p")}