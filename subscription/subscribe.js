const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const con_email = document.getElementById('confirm-email');
const pass = document.getElementById('password');
const con_pass = document.getElementById('confirm-pass');

form.addEventListener('submit', (e)  => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {

}

const validateInputs = () => {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const conemailValue = con_email.value.trim();
    const passValue = pass.value.trim();
    const conpassValue = con_pass.value.trim();


    if (nameValue === '') {

    }


};