// script.js

// Function to load and include content
function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById(elementId).innerHTML = content;
        });
}

// Load content for different sections
loadContent('Home.html', 'home');
loadContent('Features.html', 'features');
loadContent('Works.html', 'work');
loadContent('Footer.html', 'footer');
