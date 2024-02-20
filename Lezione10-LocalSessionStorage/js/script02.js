// let utenteConnesso = {
//     nome: "Pippo",
//     congome: "Bianchi",
//     connesso: true,
//     tipo: "admin"
// }

class Utente {
    constructor(nome, cognome, tipo) {
        this.nome = nome;
        this.cognome = cognome;
        this.tipo = tipo;

    }

}

let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

let elNome = document.querySelector("#elNome");
let elCognome = document.querySelector("#elCognome");
let elTipo = document.querySelector("#elTipo");

let btnLogout = document.querySelector("#btnLogout");

function registraUser(){
    
    let utente = new Utente(elNome.value, elCognome.value, elTipo.value);

    let utenteConnessoJSON = JSON.stringify(utente);

    localStorage.setItem("userConnesso", utenteConnessoJSON);

    location.reload(); //questo permette di ricaricare la pagina
}

btn.addEventListener("click", registraUser);

//Adesso al caricamento della pagina leggo il localStorage e stampo le info dell'utente connesso
window.addEventListener("DOMContentLoaded", function(){

    if(this.localStorage.length != 0 && this.localStorage.key(0) == "userConnesso"){

        let userConnesso = JSON.parse( this.localStorage.getItem("userConnesso") ); //ricevo un JSON formato string che parserizzo trasformandolo in object
        
        console.log(userConnesso);        
        demo.innerHTML = `<p> ${userConnesso.nome} ${userConnesso.cognome} -  tipo: ${userConnesso.tipo} </p>`;

    }else{
        demo.innerHTML = "<p> Mi spiace non c'è nessun utente connesso </p>"
    }
});


function logoutUser(){
    // localStorage.clear(); //cancella tutta la localstorage
    localStorage.removeItem("userConnesso");
    location.reload();
}

btnLogout.addEventListener("click", logoutUser);



////// e se avessi un array di oggetti ? 

let studenti = [
    {
        nome: "Pippo",
        cognome: "Rossi",
        matricola: 1
    },
    {
        nome: "Anna",
        cognome: "Verdi",
        matricola: 2
    },
    {
        nome: "Paola",
        cognome: "Gialli",
        matricola: 3
    },
]

let studentiJSON = JSON.stringify(studenti);

sessionStorage.setItem("studenti", studentiJSON);


/// manovra totalmente inutile
// let studentiJSON = [];

// studenti.forEach(studente =>{
//     studentiJSON.push(JSON.stringify(studente));
// })

// localStorage.setItem("studenti", JSON.stringify(studentiJSON));