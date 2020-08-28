from flask import Flask, request, render_template, jsonify
from flask_mysqldb import MySQL
import time

app = Flask(__name__)

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

@app.route("/addMessage", methods=['GET', 'POST'])
def addMessage():
    if request.method == 'POST':
        print(request.json)
        data = request.json
        print(data['sender_id'], data['message'], data['tag'], data['timestamp'])
        cur = mysql.connection.cursor()
        cur.execute('insert into chats values(%s, %s, %s, %s, %s);',('5', data['sender_id'], data['tag'], data['message'], data['timestamp']))
        mysql.connection.commit()
        #payload = []
        #content = {}
        #for result in data:
        #    content = {'id': result[0], 'sender_id':result[1], 'tag': result[2], 'msg': result[3], 'timestamp': result[4]}
        #    payload.append(content)
        #    content = {}
        return "Data Addes susscessfuly!"

if __name__ == "__main__":
    app.run(debug=True)