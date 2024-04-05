const registrationForm = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    resetErrors();

    let isValid = true;

    if (usernameInput.value.length < 6) {
        usernameError.textContent = "Username must be at least 6 characters long.";
        isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    if (passwordInput.value.length < 8 || !containsCapitalAndNumber(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain at least one capital letter and one number.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
        registrationForm.reset();
    }
}

function resetErrors() {
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function containsCapitalAndNumber(password) {
    return /[A-Z]/.test(password) && /\d/.test(password);
}
