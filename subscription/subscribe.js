// getting values from the user
const fullname_input = document.getElementById("username");
const email_input = document.getElementById("email");
const phone_input = document.getElementById("phone");
const password_input = document.getElementById("password");
const con_password_input = document.getElementById("confirm-pass");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// error message values
const error_name = document.getElementById("fullname-error");


form.addEventListener("submit", (e) => {
    let errors = [];

    errors = getFormErrors(fullname_input.value, email_input.value, phone_input.value, password_input.value, con_password_input.value)

    if (errors.length > 0){
        e.preventDefault();
    }
})

function getFormErrors(fullname, email, phone, password, con_password){
    // error messages
    let errors = []
    
    
    // handle name
    if (fullname === "" || fullname === null){
        error_name.innerText = "Fullname is Required";
        fullname_input.previousElementSibling.classList.add("invalid")
        fullname_input.classList.add("form-invalid")
    }
    
    // handle email
    if (email === "" || email === null){
        errors.push("Email is Required");
        email_input.previousElementSibling.classList.add("invalid")
        email_input.classList.add("form-invalid")
    }
    
    // handle phone number
    if (phone === "" || phone === null){
        errors.push("Phone Number is Required");
        phone_input.previousElementSibling.classList.add("invalid")
        phone_input.classList.add("form-invalid")
    }
    
    // handle password
    if (password === "" || password === null){
        errors.push("Password is Required");
        password_input.previousElementSibling.classList.add("invalid")
        password_input.classList.add("form-invalid")
    }
    
    // handle password
    if (con_password === "" || con_password === null){
        errors.push("Confirmation Password is Required");
        con_password_input.previousElementSibling.classList.add("invalid")
        con_password_input.classList.add("form-invalid")
    }


    return errors;

};


