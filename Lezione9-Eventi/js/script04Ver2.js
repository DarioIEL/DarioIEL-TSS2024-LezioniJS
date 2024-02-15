let formReg = document.querySelector("#formReg");

let username = document.querySelector("#elUsername");
let email = document.querySelector("#elEmail");
let password = document.querySelector("#elPassword");

let demo = document.querySelector("#demo");


function validate(){
 let inputs = document.querySelectorAll("#formReg input");

 inputs.forEach(input =>{
    if(input.classList.contains("borderRed") || input.classList.length === 0){
        demo.innerHTML = "Controlla bene i dati, in rosso sono segnati quelli errati"
        event.preventDefault();
        event.stopImmediatePropagation();
    }
 })
}

function checkUsername(){
    if(username.value.length < 8){
        username.classList.add("borderRed");
        username.classList.remove("borderGreen");
    }else{
        username.classList.add("borderGreen");
        username.classList.remove("borderRed");
    }
}

function checkEmail(){
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!email.value.match(regexEmail)){
        email.classList.add("borderRed");
        email.classList.remove("borderGreen");
    }else{
        email.classList.add("borderGreen");
        email.classList.remove("borderRed");
    }
}


function checkPassword(){
    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    if(!password.value.match(regexPass)){
        password.classList.add("borderRed");
        password.classList.remove("borderGreen");
    }else{
        password.classList.add("borderGreen");
        password.classList.remove("borderRed");
    }
}

formReg.addEventListener("submit", validate);

username.addEventListener("blur", checkUsername);
email.addEventListener("blur", checkEmail);
password.addEventListener("blur", checkPassword);