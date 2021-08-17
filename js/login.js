const submitButton = document.getElementById('login-submit');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const error = document.getElementById("error");
    if (emailInput.value === '') {
        error.innerText = "Error ! email can not be empty";
        return;
    }
    if (passwordInput.value === "") {
        error.innerText = "Error ! password can not be empty!"
        return;
    }
    if (emailInput.value === "bapkasontan@gmail.com" && passwordInput.value === "Rjhj,rf123!") {
        window.location.href = "banking.html";
    } else {
        error.innerText = "Error ! you have typed wrong credentials"
        emailInput.value = "";
        passwordInput.value = "";

    }
})