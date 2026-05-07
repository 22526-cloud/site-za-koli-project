let allCars = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

fetch('/api/cars')
    .then(response => response.json())
    .then(data => {
        allCars = data;
        displayCars(allCars);
    })
    .catch(err => console.error("Грешка при зареждане:", err));

function displayCars(cars) {
    const container = document.getElementById("cars-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    if (cars.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Няма намерени автомобили.</p>";
        return;
    }

    cars.forEach(car => {
        const isFav = favorites.includes(car.id);
        const carCard = `
            <div class="car-card">
                <div class="fav-heart ${isFav ? 'active' : ''}" onclick="toggleFav(${car.id}, this)">❤</div>
                <img src="${car.image}" alt="${car.model}">
                <h3>${car.brand} ${car.model}</h3>
                <p class="price">€${Number(car.price).toLocaleString()}</p>
                <p class="location">📍 ${car.location}</p>
                <button class="btn-details" onclick="openModal(${car.id})">Детайли</button>
            </div>`;
        container.innerHTML += carCard;
    });
}

function filterCars() {
    const searchInput = document.getElementById("search");
    const priceInput = document.getElementById("priceRange");
    const priceDisplay = document.getElementById("priceValue");

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
    const maxPrice = priceInput ? Number(priceInput.value) : 400000;
    
    if (priceDisplay) {
        priceDisplay.innerText = maxPrice.toLocaleString();
    }

    const filtered = allCars.filter(car => {
        const matchesName = (car.brand + " " + car.model).toLowerCase().includes(searchTerm);
        const matchesPrice = Number(car.price) <= maxPrice;
        return matchesName && matchesPrice;
    });
    displayCars(filtered);
}

function toggleFav(carId, element) {
    if (favorites.includes(carId)) {
        favorites = favorites.filter(id => id !== carId);
        element.classList.remove("active");
    } else {
        favorites.push(carId);
        element.classList.add("active");
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function showFavorites() {
    const favCars = allCars.filter(car => favorites.includes(car.id));
    displayCars(favCars);
}

function showAll() {
    displayCars(allCars);
}

function openModal(carId) {
    const car = allCars.find(c => c.id === carId);
    const modal = document.getElementById("carModal");
    const detailsDiv = document.getElementById("modal-details");
    
    if (!car || !modal || !detailsDiv) return;

    detailsDiv.innerHTML = `
        <h2>${car.brand} ${car.model}</h2>
        <img src="${car.image}" style="width: 100%; border-radius: 10px; height: 200px; object-fit: cover;">
        <div style="text-align: left; padding: 15px;">
            <p><strong>Година:</strong> ${car.year}</p>
            <p><strong>Двигател:</strong> ${car.engine}</p>
            <p><strong>Мощност:</strong> ${car.hp} к.с.</p>
            <p><strong>Местоположение:</strong> ${car.location}</p>
            <p><strong>Цена:</strong> €${Number(car.price).toLocaleString()}</p>
            <hr>
            <p style="font-size: 1.2em; color: #27ae60; text-align: center;">
                <strong>📞 Контакт: ${car.phone}</strong>
            </p>
        </div>`;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("carModal");
    if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("carModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
