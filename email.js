const btn = document.querySelector('.btn--red');
const emailInput = document.querySelector('.form__input');

function isValid(email) {
    let regex = /[^@\s]+@[^@\s]+/;
    let result = email.match(regex);
    if (result) {
        return true;
    }
    return false;
}

function addValidationMsg(cssClass, msg) {
    const emailForm = document.querySelector('.form')
    const oldValidation = emailForm.querySelector('.validation')
    const oldFormstyle =  document.querySelector('.form--error')

    if (oldValidation) {
        oldValidation.remove();
    }

    if (oldFormstyle) {
        emailForm.classList.remove('form--error');
    }

    let node = document.createElement('P');
    node.classList.add('validation', cssClass);
    node.innerHTML = msg;
    emailForm.appendChild(node);

    if(cssClass == 'error-msg') {
        emailForm.classList.add('form--error')
        emailInput.classList.add('form--error__input')
    } if (cssClass == 'correct-msg') {
        emailInput.classList.add('form--correct__input')
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (isValid(emailInput.value)) {
        addValidationMsg('correct-msg', 'Successfully sent!');
    } else {
        addValidationMsg('error-msg', "Whoops, make sure it's an email");
    }
});
