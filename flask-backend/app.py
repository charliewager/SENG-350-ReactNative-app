from flask import Flask, jsonify, request, abort
import smtplib
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

@app.route('/sendhelpnotification', methods=['POST'])
def send_help_notification():

    users = [
        {'name': 'Maria', 'naloxoneQuantity': 3, 'location': {'latitude': 48.4527997-0.0156, 'longitude': -123.3646428-0.0099}, 'isAvailable': True, 'phone': "7783501007@txt.bell.ca"},
        {'name': 'Mohammed', 'naloxoneQuantity': 0, 'location': {'latitude': 48.4526994-0.0002, 'longitude': -123.3646428-0.0001}, 'isAvailable': True, 'phone': "7783501007@txt.bell.ca"},
        {'name': 'Wei', 'naloxoneQuantity': 1, 'location': {'latitude': 48.4526994-0.0001, 'longitude': -123.3646428-0.0001}, 'isAvailable': False, 'phone': "7783501007@txt.bell.ca"},
        {'name': 'Ana', 'naloxoneQuantity': 2, 'location': {'latitude': 48.4526994-0.0190, 'longitude': -123.3646428-0.0200}, 'isAvailable': True, 'phone': "7783501007@txt.bell.ca"},
        {'name': 'John', 'naloxoneQuantity': 3, 'location': {'latitude': 48.4526994-0.0001, 'longitude': -123.3646428-0.0001}, 'isAvailable': True, 'phone': "7783501007@txt.bell.ca"},
    ]
    location = request.json.get('location')
    recipient = request.json.get('recipient')
    drugtype = request.json.get('drugtype')

    if not location or not recipient or not drugtype:
        abort(400)

    for user in users:
        if user['name'] == recipient:
            send(f"Someone is overdosing on {drugtype} at this location, {location}", user['phone'])
            return "sent"

    return "recipient not found"


def send(message, to):
        # Replace the number with your own, or consider using an argument\dict for multiple people.
    to_number = '7783501007@txt.bell.ca'
    auth = ('seng350.helprequired@gmail.com', 'fpffiupiznugathp')

    # Establish a secure session with gmail's outgoing SMTP server using your gmail account
    server = smtplib.SMTP( "smtp.gmail.com", 587 )
    server.starttls()
    server.login(auth[0], auth[1])

    # Send text message through SMS gateway of destination number
    server.sendmail( auth[0], to_number, message)
