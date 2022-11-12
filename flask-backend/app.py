from flask import Flask, jsonify
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'This is my first API call!'

@app.route('/findsuppliers')
def find_suppliers():
    locations = [
        {'latitude': 48.59857641575544 , 'longitude': -123.4222887477357, 'title': "Jeffry's Pharmacy", 'desc': "Pharmacist", 'phone': "192-168-111",  'url': "www.Jeffry.com"},
        {'latitude': 48.59780 , 'longitude': -123.421, 'title': "Jerry's Pharmacy", 'desc': "Pharmacist", 'phone': "192-168-111",  'url': "www.Jerry.com"}
    ]

    return jsonify(locations)


@app.route('/findcarriers')
def find_carriers():
    users = [
        {'name': 'Maria', 'naloxoneQuantity': 3, 'location': {'latitude': 48.4527997-0.0156, 'longitude': -123.3646428-0.0099}, 'isAvailable': True},
        {'name': 'Mohammed', 'naloxoneQuantity': 0, 'location': {'latitude': 48.4526994-0.0002, 'longitude': -123.3646428-0.0001}, 'isAvailable': True},
        {'name': 'Wei', 'naloxoneQuantity': 1, 'location': {'latitude': 48.4526994-0.0001, 'longitude': -123.3646428-0.0001}, 'isAvailable': False},
        {'name': 'Ana', 'naloxoneQuantity': 2, 'location': {'latitude': 48.4526994-0.0190, 'longitude': -123.3646428-0.0200}, 'isAvailable': True},
        {'name': 'John', 'naloxoneQuantity': 3, 'location': {'latitude': 48.4526994-0.0001, 'longitude': -123.3646428-0.0001}, 'isAvailable': True},
    ]

    return jsonify(users)
