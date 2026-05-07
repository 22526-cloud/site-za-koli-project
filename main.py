from flask import Flask, render_template, jsonify

app = Flask(__name__)

cars = [
    {"id": 1, "brand": "BMW", "model": "M3", "price": "55,000", "year": "2018", "engine": "Бензин", "hp": "431", "image": "https://hips.hearstapps.com/hmg-prod/images/2018-bmw-m3-cs-1545077615.jpg"},
    {"id": 2, "brand": "Audi", "model": "RS6", "price": "115,000", "year": "2021", "engine": "Бензин", "hp": "600", "image": "https://www.cnet.com/a/img/resize/746957665d3a6c7867cdad171e4b7cfd814f6420/hub/2020/11/02/dbfbaf70-caab-4614-976f-83fe2b9f5322/rs6-promo.jpg?auto=webp&width=768"},
    {"id": 3, "brand": "Mercedes", "model": "C63 AMG", "price": "48,000", "year": "2017", "engine": "Бензин", "hp": "476", "image": "https://cdn-fastly.autoguide.com/media/2023/06/07/12316945/2017-mercedes-amg-c63-s-coupe-review.jpg?size=720x845&nocrop=1"},
    {"id": 4, "brand": "VW", "model": "Golf 8", "price": "28,000", "year": "2022", "engine": "Хибрид", "hp": "150", "image": "https://www.motorweek.org/images/2022_VW_GOLF_GTI_1.jpg"},
    {"id": 5, "brand": "Tesla", "model": "Model 3", "price": "32,000", "year": "2021", "engine": "Електрическа", "hp": "325", "image": "https://images.dealersync.com/3/Photos/1080764/20240106070352659_IMG_0012.jpg?_=9b0c5a2762f7b31e441d8799be35a4ad5ceaaac5"},
    {"id": 6, "brand": "Porsche", "model": "911 Sport Classic", "price": "350,000", "year": "2023", "engine": "Бензин", "hp": "550", "image": "https://hips.hearstapps.com/hmg-prod/images/2023-porsche-911-sport-classic-135-654267f304d29.jpg?crop=0.638xw:0.538xh;0.282xw,0.303xh&resize=2048:*"},
    {"id": 7, "brand": "Toyota", "model": "Supra", "price": "45,000", "year": "2020", "engine": "Бензин", "hp": "340", "image": "https://www.digitaltrends.com/tachyon/2019/05/2020_toyotasupra_fw2.jpg?resize=1200%2C720"},
    {"id": 8, "brand": "Ford", "model": "Mustang", "price": "35,000", "year": "2018", "engine": "Бензин", "hp": "310", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUIfNnjVBIR9ZxCImQx4a0llJyMMA2DzX_Q&s"},
    {"id": 9, "brand": "Nissan", "model": "GT-R", "price": "120,000", "year": "2019", "engine": "Бензин", "hp": "570", "image": "https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/a5c21ac282c8cec160193ee5f450fe8a911959cb"},
    {"id": 10, "brand": "Honda", "model": "Civic Type R", "price": "38,000", "year": "2020", "engine": "Бензин", "hp": "320", "image": "https://www.automoli.com/common/vehicles/_assets/img/gallery/f68/honda-civic-type-r-fk8-facelift-2020.jpg"}
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/cars')
def get_cars():
    return jsonify(cars)

if __name__ == '__main__':
    app.run(debug=True)
