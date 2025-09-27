const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener("submit" ,(event)=>{
    event.preventDefault();
    let isValid = true;

    function validation(input,condition,message){
        const error = input.nextElementSibling;
        if(condition){
            error.textContent = message;
            error.style.display = "visible";
            input.style.borderColor = "red";
            isValid = false;
        }
        else{
            error.style.visibility = "hidden";
            error.style.borderColor = "green";
        }
    }
})


