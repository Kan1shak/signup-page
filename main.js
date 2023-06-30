const passwordInputs = document.querySelectorAll('input[type="password"]');
function checkPasswordsMatch() {
    const password = passwordInputs[0].value;
    const passwordConfirm = passwordInputs[1].value;
    if (password === passwordConfirm && (password.length > 8 && passwordConfirm.length > 8)) {
        passwordInputs.forEach(inputButton => {
            inputButton.setCustomValidity('');
            inputButton.setAttribute('title', '');
            inputButton.setAttribute('style', 'box-shadow: 0px 0px 0px 2px rgb(40, 177, 91); border: 0px;');    
        });
    } else if (password != passwordConfirm && (password.length > 8 && passwordConfirm.length > 8)) {
        passwordInputs.forEach(inputButton => {
            inputButton.setCustomValidity("Passwords do not match");
            inputButton.setAttribute('title', 'Passwords do not match');
            inputButton.setAttribute('style', 'box-shadow: 0px 0px 0px 2px rgb(255, 40, 79); border: 0px;');
        });
    }
    else {
        passwordInputs.forEach(inputButton => {
            inputButton.setCustomValidity("Password must be at least 8 characters");
            inputButton.setAttribute('title', 'Password must be at least 8 characters');
            inputButton.setAttribute('style', 'box-shadow: 0px 0px 0px 2px rgb(255, 40, 79); border: 0px;');
        });
    }
    }

//add event listener to both inputs
passwordInputs.forEach(inputButton => {
    inputButton.addEventListener('input', checkPasswordsMatch);
});