const selectors = {
    inputName: '.input__name',
    inputSurname: '.input__surname',
    button: '.button__done',
    password: '.input__pass',
    passwordCheck: '.input__pass-check',
}

const inputName = document.querySelector(selectors.inputName);
const inputSurname = document.querySelector(selectors.inputSurname);
const buttonDone = document.querySelector(selectors.button);
const inputPass = document.querySelector(selectors.password);
const inputPassCheck = document.querySelector(selectors.passwordCheck);

const passwordUserValid = /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

const nameUserValid = /^[а-яА-ЯёЁa-zA-Z]{2,30}$/;

buttonDone.addEventListener('click', () => {

    if (nameUserValid.test(inputName.value) === false) {
        alert('Пожалуйста, ввидите корректное имя');
        inputName.value = '';
    }

    if (nameUserValid.test(inputSurname.value) === false) {
        alert('Пожалуйста, ввидите корректную фамилию');
        inputSurname.value = '';
    }

    if (passwordUserValid.test(inputPass.value) === false) {
        alert('Пожалуйста, ввидите корректный пароль');
        inputPass.value = '';

        if (inputPass != inputPassCheck) {
            alert('Пароли не совпадают')
        }
    }


})
