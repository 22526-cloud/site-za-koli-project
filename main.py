from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Примерни данни (вместо истинска база данни за начало)
cars = [
    {"id": 1, "brand": "BMW", "model": "320d", "price": 15000},
    {"id": 2, "brand": "Audi", "model": "A4", "price": 18000},
    {"id": 3, "brand": "VW", "model": "Golf 7", "price": 12000}
]

@app.route('/')
def home():
    return "Добре дошли в CarsBG API!"

@app.route('/api/cars')
def get_cars():
    # Тази функция връща списъка с коли в JSON формат
    return jsonify(cars)

if __name__ == '__main__':
    app.run(debug=True)