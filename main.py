from flask import Flask, render_template, jsonify

app = Flask(__name__, template_folder='.')

cars = [
    {"id": 1, "brand": "BMW", "model": "M3", "price": "45,000", "image": "https://via.placeholder.com/200"},
    {"id": 2, "brand": "Audi", "model": "RS6", "price": "120,000", "image": "https://via.placeholder.com/200"},
    {"id": 3, "brand": "Mercedes", "model": "C63", "price": "55,000", "image": "https://via.placeholder.com/200"},
    {"id": 4, "brand": "Volkswagen", "model": "Golf 8", "price": "35,000", "image": "https://via.placeholder.com/200"}
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/cars')
def get_cars():
    return jsonify(cars)

if __name__ == '__main__':
    app.run(debug=True)
