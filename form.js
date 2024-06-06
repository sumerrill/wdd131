document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'medium' });

    document.getElementById('year').textContent = currentYear;
    document.getElementById('lastModified').textContent = formattedDate;
});

document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: '1', name: 'Product 1' },
        { id: '2', name: 'Product 2' },
        { id: '3', name: 'Product 3' }
    ];

    const productSelect = document.getElementById('product');
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    document.querySelector('form').addEventListener('submit', () => {
        let count = localStorage.getItem('reviewCount') || 0;
        localStorage.setItem('reviewCount', parseInt(count) + 1);
    });
});
