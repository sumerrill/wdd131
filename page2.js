document.addEventListener('DOMContentLoaded', () => {
    setupMenuInteractions();
    loadPreferences();
});

function setupMenuInteractions() {
    // Select all menu items and add click event listeners
    const menuItems = document.querySelectorAll('.single-menu');
    menuItems.forEach(item => {
        item.addEventListener('click', () => toggleDescription(item));
    });
}

function toggleDescription(menuItem) {
    const description = menuItem.querySelector('.menu-content p');
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
}

function loadPreferences() {
    const backgroundPreference = localStorage.getItem('backgroundPreference');
    if (backgroundPreference) {
        document.body.style.backgroundColor = backgroundPreference;
    }
}

function savePreferences(color) {
    localStorage.setItem('backgroundPreference', color);
}

function changeBackground(color) {
    document.body.style.backgroundColor = color;
    savePreferences(color);
}

function dailySpecial() {
    const specials = [
        { day: 0, special: 'Closed' }, // Sunday
        { day: 1, special: '50% off on all breakfast items' }, // Monday
        { day: 2, special: 'Free dessert with any meal' }, // Tuesday
        { day: 3, special: 'Buy one get one free on salads' }, // Wednesday
        { day: 4, special: 'Happy hour extended all day' }, // Thursday
        { day: 5, special: '20% off on beverages' }, // Friday
        { day: 6, special: 'Chef’s surprise special' }  // Saturday
    ];
    const today = new Date().getDay();
    const todaySpecial = specials.find(s => s.day === today);

    const specialText = `Today's Special: ${todaySpecial.special}`;
    document.getElementById('hero-msg').innerHTML += `<p>${specialText}</p>`;
}

// Example usage of template literals and array methods
function updateMenuPrices() {
    const prices = document.querySelectorAll('.menu-content h5 span');
    prices.forEach(price => {
        const currentPrice = parseFloat(price.textContent.replace('$', ''));
        const updatedPrice = currentPrice * 1.1; // Increase price by 10%
        price.textContent = `$${updatedPrice.toFixed(2)}`;
    });
}

// Initialize special and update prices on page load
document.addEventListener('DOMContentLoaded', () => {
    dailySpecial();
    updateMenuPrices();
});
