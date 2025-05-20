// getting the form

const form = document.getElementById("form");

// getting values from the user
const fullname_input = document.getElementById("username");
const email_input = document.getElementById("email");
const phone_input = document.getElementById("phone");
const password_input = document.getElementById("password");
const con_password_input = document.getElementById("confirm-pass");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;


// error message values
const error_name = document.getElementById("fullname-error");
const error_email = document.getElementById("email-error");
const error_phone = document.getElementById("phone-error");
const error_password = document.getElementById("password-error");
const error_con_password = document.getElementById("con_password-error");


form.addEventListener("submit", (e) => {
    // variables
    const fullname = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const con_password = document.getElementById("confirm-pass").value.trim()
    
    let errors = 0;

    // handle name
    if (fullname === "" || fullname === null){
        errors++;
        error_name.innerText = "Fullname is Required";
        error_name.parentElement.style.display = "inline-flex";
        fullname_input.previousElementSibling.classList.add("invalid");
        fullname_input.classList.add("form-invalid");
    }
    
    // handle email
    if (email === "" || email === null){
        errors++;
        error_email.innerText = "Email is Required";
        error_email.parentElement.style.display = "inline-flex";
        email_input.previousElementSibling.classList.add("invalid");
        email_input.classList.add("form-invalid");
    }
    else if (!emailRegex.test(email)){
        errors++;
        error_email.innerText = "Email Format Must be Correct";
        error_email.parentElement.style.display = "inline-flex";
        email_input.previousElementSibling.classList.add("invalid");
        email_input.classList.add("form-invalid");
    }
    else if (emailRegex.test(email)){
        error_email.parentElement.style.display = "none";
        email_input.classList.add("form-valid");
    }
    
    // handle phone number
    if (phone === "" || phone === null){
        errors++;
        error_phone.innerText = "Phone Number is Required";
        error_phone.parentElement.style.display = "inline-flex";
        phone_input.previousElementSibling.classList.add("invalid");
        phone_input.classList.add("form-invalid");
    }
    else if (!phoneRegex.test(phone)){
        errors++;
        error_phone.innerText = "Phone Number Format Must be Correct";
        error_phone.parentElement.style.display = "inline-flex";
        phone_input.previousElementSibling.classList.add("invalid");
        phone_input.classList.add("form-invalid");
    }
    else if (phoneRegex.test(phone)){
        error_phone.parentElement.style.display = "none";
        phone_input.classList.add("form-valid");
    }
    
    // handle password
    if (password === "" || password === null){
        errors++;
        error_password.innerText = "Password is Required";
        error_password.parentElement.style.display = "inline-flex";
        password_input.previousElementSibling.classList.add("invalid");
        password_input.classList.add("form-invalid");
    }
    else if (password.length < 8){
        errors++;
        error_password.innerText = "Password must be more than 8 characthers";
        error_password.parentElement.style.display = "inline-flex";
        password_input.previousElementSibling.classList.add("invalid");
        password_input.classList.add("form-invalid");
    }
    else if (password.length >= 8){
        error_password.parentElement.style.display = "none";
        password_input.classList.add("form-valid");
    }
    
    // handle password
    if (con_password === "" || con_password === null){
        errors++;
        error_con_password.innerText = "Confirmation Password is Required";
        error_con_password.parentElement.style.display = "inline-flex";
        con_password_input.previousElementSibling.classList.add("invalid");
        con_password_input.classList.add("form-invalid");
    }
    else if (con_password !== password){
        errors++;
        error_con_password.innerText = "Confirmation Password Must be The Same";
        error_con_password.parentElement.style.display = "inline-flex";
        con_password_input.previousElementSibling.classList.add("invalid");
        con_password_input.classList.add("form-invalid");
    }
    else if (con_password === password){
        error_con_password.parentElement.style.display = "none";
        con_password_input.classList.add("form-valid");
    }

    if (errors > 0){
        e.preventDefault();
    }
    else if (errors === 0){
        alert("Account Created!");
    }

})


const userinputs = [fullname_input, phone_input, email_input, password_input, con_password_input]

userinputs.forEach(input => {
    input.addEventListener("input", () => {
        if(input.previousElementSibling.classList.contains("invalid")){
            input.previousElementSibling.classList.remove("invalid");
            input.classList.remove("form-invalid");
            input.nextElementSibling.style.display = "none";
        }
    });
});


