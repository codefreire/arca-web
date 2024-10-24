// JS/login.js

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Simulate a login process (e.g., validate user)
    const fullname = event.target.fullname.value;
    const password = event.target.password.value;

    // Simple validation (in a real app, authenticate against a database)
    if (fullname && password) {
        // Redirect to the dashboard page
        window.location.href = "./homePage.html"; // Ensure this path is correct
    } else {
        alert("Please enter valid credentials.");
    }
});



