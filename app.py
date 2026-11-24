import sqlite3
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect("expenses.db")

    conn.execute("""
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT NOT NULL,
            amount REAL NOT NULL,
            type TEXT NOT NULL,
            category TEXT NOT NULL,
            date TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/add-transaction", methods=["POST"])
def add_transaction():
    data = request.get_json()

    description = data["description"]
    amount = data["amount"]
    transaction_type = data["type"]
    category = data["category"]
    date = data["date"]

    conn = sqlite3.connect("expenses.db")

    conn.execute("""
        INSERT INTO transactions
        (description, amount, type, category, date)
        VALUES (?, ?, ?, ?, ?)
    """, (description, amount, transaction_type, category, date))

    conn.commit()
    conn.close()

    return jsonify({"message": "Transaction saved successfully!"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
