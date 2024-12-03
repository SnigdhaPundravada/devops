document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.textContent = ""; // Clear any previous error messages
        alert("Registration successful!");
    }
});
