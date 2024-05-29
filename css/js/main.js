document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');
    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;

    const temperature = 10; // static value for now
    const windSpeed = 5; // static value for now
    displayWindChill(temperature, windSpeed);
});

function displayWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temperature - 11.
