document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'medium' });

    document.getElementById('year').textContent = currentYear;
    document.getElementById('lastModified').textContent = formattedDate;
});

document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 'fc-1888', name: "flux capacitor", avgRating: 4.5 },
        { id: 'fc-2050', name: "power laces", avgRating: 4.7 },
        { id: 'fs-1987', name: "time circuits", avgRating: 3.5 },
        { id: 'ac-2000', name: "low voltage reactor", avgRating: 3.9 },
        { id: 'jj-1969', name: "warp equalizer", avgRating: 5.0 }
    ];

    populateProductDropdown(products);
});

function populateProductDropdown(products) {
    const selectElement = document.getElementById('product'); // Ensure your select element has this ID
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

// Assuming the form submits to a page called "review.html"
if (window.location.pathname.endsWith('review.html')) {
    incrementReviewCount();
}

function incrementReviewCount() {
    let count = parseInt(localStorage.getItem('reviewCount') || '0');
    localStorage.setItem('reviewCount', count + 1);
    displayReviewCount();
}

function displayReviewCount() {
    const countElement = document.getElementById('reviewCount');
    if (countElement) {
        countElement.textContent = `Number of Reviews Submitted: ${localStorage.getItem('reviewCount')}`;
    }
}
