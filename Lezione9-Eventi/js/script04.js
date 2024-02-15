// function validate(){
//     let username = document.querySelector("#elUsername").value;
//     let email = document.querySelector("#elEmail").value;
//     let password = document.querySelector("#elPassword").value;
    
//     if(username.length >= 8 && email.length >= 8 && password.length >= 10){
//         console.log("Registrazione avvenuta con successo");
//     }else{
//         event.preventDefault();
//         event.stopImmediatePropagation();

//         document.querySelector("#demo").innerHTML = " Mi spiace, non hai compilato i campi in modo corretto"
//     }

// }

let formReg = document.querySelector("#formReg");
let demo = document.querySelector("#demo");

function validate(){
    demo.innerHTML = "";
    
    let username = document.querySelector("#elUsername").value;
    let email = document.querySelector("#elEmail").value;
    let password = document.querySelector("#elPassword").value;

    if(username.length < 8){
        demo.innerHTML += "<p>Il tuo username non è corretto </p>";
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
    if(!email.match(regexEmail)){
        demo.innerHTML += "<p>La mail non è corretta </p>";
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(!password.match(regexPass)){
        demo.innerHTML += "<p> La password non è corretta </p>";
        event.preventDefault();
        event.stopImmediatePropagation();
    }

}

formReg.addEventListener("submit", validate);