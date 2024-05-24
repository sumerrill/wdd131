document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'medium' });

    document.getElementById('year').textContent = currentYear;
    document.getElementById('lastModified').textContent = formattedDate;
});

    // Hamburger menu functionality
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle visibility of nav menu
        // Change hamburger icon to 'X' when open
        if (navMenu.classList.contains('active')) {
            hamburger.innerHTML = '&times;'; // 'X' symbol
        } else {
            hamburger.innerHTML = '&#9776;'; // Hamburger symbol
        }
    });

