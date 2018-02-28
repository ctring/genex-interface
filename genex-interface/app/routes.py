from app import app
from flask import render_template, jsonify, request,url_for
import json


@app.route('/')
@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/datasets')
def datasets():
	with open('datasets.json','r') as datasets_json:
		datasets = json.load(datasets_json)
	keys = ['ID','name']
	datasets = [{k: x[k] for k in keys} for x in datasets]
	datasets_json.close()
	return jsonify(datasets)

