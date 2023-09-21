// Get a reference to the spinner element by its ID
var spinner = document.getElementById("loading-spinner");

// Function to hide the spinner
function hideSpinner() {
    spinner.style.display = "none";
}

// Show the spinner initially (if it's not hidden by default)
spinner.style.display = "block";

// Set a timeout to hide the spinner after 2 seconds (adjust the delay as needed)
setTimeout(hideSpinner, 1000);

var currentPage = 1; // Track the current page

function showPage(pageNumber) {
    // Hide all pages
    var pages = document.querySelectorAll('.resume-page');
    pages.forEach(function (page) {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById('page-' + pageNumber).style.display = 'block';
}

// Show the initial page (Page 1)
showPage(currentPage);

// Event listener for the "Next" button
document.getElementById('next-page').addEventListener('click', function () {
    var totalPages = document.querySelectorAll('.resume-page').length;
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

// Event listener for the "Previous" button
document.getElementById('prev-page').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});
