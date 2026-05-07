let allCars = [];

async function fetchCars() {
    const response = await fetch('/api/cars');
    allCars = await response.json();
    displayCars(allCars);
}

function displayCars(carsToDisplay) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = carsToDisplay.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="Car">
            <h3>${car.brand} ${car.model}</h3>
            <p>${car.price} лв.</p>
        </div>
    `).join('');
}

function filterCars() {
    const searchTerm = document.getElementById('brand-search').value.toLowerCase();
    const filtered = allCars.filter(car => 
        car.brand.toLowerCase().includes(searchTerm)
    );
    displayCars(filtered);
}

window.onload = fetchCars;