from flask import Blueprint


generic_urls_blueprint = Blueprint("generic_urls", __name__)


@generic_urls_blueprint.route("/")
def index():
    return "<h1>Welcome to our server !!</h1>"