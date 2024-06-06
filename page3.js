document.addEventListener('DOMContentLoaded', () => {
    setDynamicGreeting();
    setupContactFormListener();
    loadPreferences();
});

// Dynamic greeting based on time of day
function setDynamicGreeting() {
    const heroMessage = document.getElementById('hero-msg');
    const hours = new Date().getHours();
    let greeting = "Welcome to Shwe | Burmese Cuisine!";

    if (hours < 12) {
        greeting = "Good morning! Interested in our catering?";
    } else if (hours < 18) {
        greeting = "Good afternoon! Explore our catering options.";
    } else {
        greeting = "Good evening! Perfect time to plan your events with us.";
    }

    heroMessage.querySelector('h4').textContent = greeting;
}

// Event listener for the Order Now button
function setupContactFormListener() {
    const orderButton = document.querySelector('.order');
    orderButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent page navigation
        showModalOrderForm();
    });
}

// Show a modal or alert for ordering or contacting
function showModalOrderForm() {
    alert('Thank you for your interest! Please call us or visit our contact page to order.');
}

// Save and load preferences using local storage
function savePreferences(key, value) {
    localStorage.setItem(key, value);
}

function loadPreferences() {
    const savedMessage = localStorage.getItem('welcomeMessage');
    if (savedMessage) {
        document.querySelector('#hero-msg h4').textContent = savedMessage;
    }
}

// Change and save hero message dynamically
function changeHeroMessage() {
    const newMessage = 'Explore our exclusive catering services!';
    document.querySelector('#hero-msg h4').textContent = newMessage;
    savePreferences('welcomeMessage', newMessage);
}

// Call this function to update the hero message on some user action, e.g., a button click
document.querySelector('#hero-msg').addEventListener('click', changeHeroMessage);
