class Messaggio {
    constructor(username, contenuto) {
        this.username = username;
        this.contenuto = contenuto;
    }
}

let username = document.querySelector("#username");
let messaggio = document.querySelector("#messaggio");
let btnInvia = document.querySelector("#btnInvia");
let demo = document.querySelector("#demo");
let charRes = document.querySelector("#caratteriRestanti");
let feed = document.querySelector("#feed");

let messaggi = [];
 
function creaNuovoMessaggio(){
    if(username.value.length < 5){
        feed.innerHTML = "Il tuo Username è troppo breve !!";
    }else if(messaggio.value.length < 5){
        feed.innerHTML = "Il messaggio è troppo breve";
    }else{

        let nuovoMessaggio = new Messaggio(username.value, messaggio.value);
        
        messaggi.push(nuovoMessaggio);
        
        stampaMessaggi();
    }
}


function stampaMessaggi(){
    demo.innerHTML = "";

    for(let i = 0; i < messaggi.length; i++){
        demo.innerHTML += `<div class="boxMsg">
        <p> ${ messaggi[i].username } :  ${messaggi[i].contenuto} </p>
        </div>` ;
    }
}

btnInvia.addEventListener("click", creaNuovoMessaggio);

function controllaCaratteri(){
    let carRestanti = 100 - messaggio.value.length;

    //charRes è lo span dello HTML
    charRes.textContent = carRestanti;

    if(carRestanti <= 0){
        let contenutoMsg = document.querySelector("#messaggio").value.substring(0,100);
        messaggio.value = contenutoMsg;
        document.querySelector("#caratteriRestanti").textContent = 0;
        // messaggio.setAttribute("disabled", true);
    }
}

// messaggio è la mia textarea
messaggio.addEventListener("input", controllaCaratteri);