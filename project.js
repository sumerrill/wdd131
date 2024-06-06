// Toggle navigation for mobile view
function toggleNav() {
    const nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// Dynamic greetings based on time of day
function setGreeting() {
    const heroMessage = document.getElementById('hero-msg');
    const date = new Date();
    const hour = date.getHours();
    let greeting = "Welcome to Shwe Burmese Cuisine!";

    if (hour < 12) {
        greeting = "Good Morning! Welcome to Shwe Burmese Cuisine!";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Explore our Burmese Delights!";
    } else {
        greeting = "Good Evening! Taste the best of Myanmar!";
    }

    heroMessage.querySelector('h1').textContent = greeting;
}

// Save last visited page in local storage
function saveLastVisitedPage() {
    localStorage.setItem('lastVisited', window.location.href);
}

// Load last visited page information
function loadLastVisitedPage() {
    const lastVisited = localStorage.getItem('lastVisited');
    if (lastVisited) {
        console.log(`Your last visited page was: ${lastVisited}`);
    }
}

// Event listener for order button
function setupOrderButtonListener() {
    const orderButton = document.querySelector('.order');
    orderButton.addEventListener('click', () => {
        alert('Thank you for your order!');
        saveLastVisitedPage();
    });
}

// Initialize all scripts
function initialize() {
    setGreeting();
    loadLastVisitedPage();
    setupOrderButtonListener();
    // Add more event listeners or initializations here
}

document.addEventListener('DOMContentLoaded', initialize);
