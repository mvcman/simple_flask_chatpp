from flask import Flask, request, render_template, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
import time

app = Flask(__name__)

CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'mandar'
app.config['MYSQL_PASSWORD'] = 'mandar'
app.config['MYSQL_DB'] = 'chatapp'
mysql = MySQL(app)

@app.route("/", methods=['GET'])
def main():
    cur = mysql.connection.cursor()
    cur.execute('select * from chats;')
    data = cur.fetchall()
    print(data)
    payload = []
    content = {}
    for result in data:
        content = {'id': result[0], 'sender_id':result[1], 'tag': result[2], 'msg': result[3], 'timestamp': result[4]}
        payload.append(content)
        content = {}
    return jsonify(payload)

@app.route("/getTags", methods=["GET"])
def getTags():
    cur = mysql.connection.cursor()
    cur.execute('select distinct(tag) from chats;')
    data = cur.fetchall()
    d = [a for b in data for a in b]
    print(d)
    return jsonify(d)

@app.route("/addMessage", methods=['GET', 'POST'])
def addMessage():
    if request.method == 'POST':
        print(request.json)
        data = request.json
        print(data['sender_id'], data['message'], data['tag'], data['timestamp'])
        cur = mysql.connection.cursor()
        cur.execute('select * from chats;')
        chats = cur.fetchall()
        print(chats)
        cur.execute('insert into chats values(%s, %s, %s, %s, %s);',(len(chats) + 1, data['sender_id'], data['tag'], data['message'], data['timestamp']))
        mysql.connection.commit()
        return "Data Addes susscessfuly!"

@app.route("/getMessages/<tag_name>", methods=['GET', 'POST'])
def getMessages(tag_name):
    print(tag_name)
    cur = mysql.connection.cursor()
    d = 'select * from chats where tag=\'{}\';'.format(tag_name)
    print(d)
    cur.execute('select * from chats where tag=\'{}\';'.format(tag_name))
    chats = cur.fetchall()
    payload = []
    content = {}
    for result in chats:
        content = {'id': result[0], 'sender_id':result[1], 'tag': result[2], 'msg': result[3], 'timestamp': result[4]}
        payload.append(content)
        content = {}
    if len(payload) == 0:
        return "data not found"
    return jsonify(payload)

if __name__ == "__main__":
    app.run(debug=True)