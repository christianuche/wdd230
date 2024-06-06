function setUserName() {
    const nameInput = document.getElementById('name');
    const userName = nameInput.value;
    if (userName.trim() !== '') {
        document.getElementById('user-name').innerText = userName;
        nameInput.value = '';  // Clear the input field

        // Hide the input after 5 seconds
        setTimeout(() => {
            document.querySelector('.user-input').style.display = 'none';
        }, 5000);
    }
}