var footer = document.querySelector('footer');
var copyrightParagraph = footer.querySelector('#copyright');
var currentYear = new Date().getFullYear();
copyrightParagraph.textContent = '@' + currentYear + '🌻 Su Myat Yadanar Shin 🌻 Myanmar';
var lastModifiedParagraph = footer.querySelector('#lastModified');
var lastModifiedDate = new Date(document.lastModified);
var formattedDate = lastModifiedDate.toLocaleDateString();
lastModifiedParagraph.textContent = 'Last Modified:' + formattedDate;


