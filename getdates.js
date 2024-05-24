document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'medium' });

    document.getElementById('year').textContent = currentYear;
    document.getElementById('lastModified').textContent = formattedDate;
});


