function saluta(){
    console.log("Ciao Dario");
}

// Evento in JS
let btn = document.querySelector("#btn");
btn.onclick = saluta;


//Event listener
let btn2 = document.querySelector("#btn2");
//la funzione va richiamata senza le parentesi tonde
btn2.addEventListener("click", saluta);


//Domanda da colloquio: come posso simulare in JS il modificatore private ? Con le closure