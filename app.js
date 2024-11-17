// Select the search button and result div elements
const searchButton = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');

// Function to sanitize user input to prevent script injection
function sanitizeInput(input) {
    const tempElement = document.createElement('div');
    tempElement.textContent = input;
    return tempElement.innerHTML;
}

// Add an event listener for the 'click' event on the search button
searchButton.addEventListener('click', () => {
    // Get the sanitized user input from the search field
    const query = sanitizeInput(document.getElementById('search-input').value.trim());

    // Define the URL of the PHP script with the query parameter
    const url = `superheroes.php?query=${encodeURIComponent(query)}`;

    // Make an AJAX request using Fetch API
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Display the result inside the result div
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p style="color:red;">An error occurred. Please try again.</p>`;
            console.error('Error:', error);
        });
});
