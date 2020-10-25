from flask import Flask


app = Flask(__name__, static_folder='./build', static_url_path='/')


from generic_urls.views import generic_urls_blueprint
app.register_blueprint(generic_urls_blueprint)