document.getElementById('userForm').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        e.preventDefault();
        alert('Passwords do not match. Please try again.');
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('password').focus();
    }
});

// JavaScript for enhanced validation
document.getElementById('membershipForm').addEventListener('submit', function(event) {
    const emailField = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (!emailPattern.test(emailField.value)) {
        event.preventDefault();
        alert('Please enter a valid byui.edu email address.');
        emailField.focus();
    }
});