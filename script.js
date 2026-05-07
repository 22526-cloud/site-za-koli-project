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
            <p class="price">€${car.price}</p>
            <button class="contact-btn" onclick="openModal(${car.id})">Детайли</button>
        </div>
    `).join('');
}

function openModal(carId) {
    const car = allCars.find(c => c.id === carId);
    const modal = document.getElementById("carModal");
    const detailsDiv = document.getElementById("modal-details");

    detailsDiv.innerHTML = `
        <h2 style="color: #2c3e50;">${car.brand} ${car.model}</h2>
        <img src="${car.image}" style="width: 100%; border-radius: 10px; margin: 10px 0;">
        <div style="text-align: left; background: #f9f9f9; padding: 15px; border-radius: 10px;">
            <p>📅 <strong>Година:</strong> ${car.year} г.</p>
            <p>⛽ <strong>Гориво:</strong> ${car.engine}</p>
            <p>🐎 <strong>Мощност:</strong> ${car.hp} к.с.</p>
            <p>💰 <strong>Цена:</strong> <span style="color: #27ae60; font-size: 1.2em;">${car.price} €.</span></p>
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("carModal").style.display = "none";
}

function filterCars() {
    const searchTerm = document.getElementById('brand-search').value.toLowerCase();
    const filtered = allCars.filter(car => 
        car.brand.toLowerCase().includes(searchTerm) || 
        car.model.toLowerCase().includes(searchTerm)
    );
    displayCars(filtered);
}

window.onclick = function(event) {
    const modal = document.getElementById("carModal");
    if (event.target == modal) closeModal();
}

window.onload = fetchCars;
