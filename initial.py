from flask import Flask


app = Flask(__name__)


from generic_urls.views import generic_urls_blueprint
app.register_blueprint(generic_urls_blueprint)