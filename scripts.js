document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'medium' });

    document.getElementById('year').textContent = currentYear;
    document.getElementById('lastModified').textContent = formattedDate;
});

    const temperature = 10; // F
    const windSpeed = 5; // km/h

    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2) + ' °C';
        } else {
            return "N/A";
        }
    }

    const windChillDisplay = document.getElementById('windChillDisplay');
    windChillDisplay.textContent = calculateWindChill(temperature, windSpeed);

    
    
    