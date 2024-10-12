document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        // Prevent form from submitting
        event.preventDefault();

        // Retrieve input values and trim whitespaces
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and messages
        let isValid = true;
        let messages = [];

        // Username validation: should be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation: should include '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must include '@' and '.'");
        }

        // Password validation: should be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Display all error messages
            feedbackDiv.style.color = "#dc3545"; // Red for errors
        }
    });
});
