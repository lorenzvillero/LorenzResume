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
