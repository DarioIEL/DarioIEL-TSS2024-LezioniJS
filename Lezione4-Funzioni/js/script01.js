//dichiaro una funzione
function salutaUtente(){
    //corpo della funzione
    let nomeUtente = "Dario";
    let cognomeUtente = "Mennillo";
    // console.log("Ciao " + nomeUtente + " " +  cognomeUtente);

    //Alt + 96 = ` backtick  
    console.log(`Ciao ${nomeUtente} ${cognomeUtente}`);
}

//Richiamo la funzione
salutaUtente();


let nome = "Pippo"; //questa qui fuori è una var GLOBALE, cioè visibile dappertutto
console.log(nome);


function salutaSegret(){
    console.log(`Ciao ${nome}`);
}

salutaSegret();


function salutaDocente(){
    let nome = "Mauro"; //Questa è una Variabile LOCALE, queta varibile è visibile solo dentro la funzione
    let cognome = "Bogliaccino";

    console.log(`Ciao docente ${nome} ${cognome}`);
}


// console.log(nome); //la variabile nome fuori dalla funzione non esiste

salutaDocente();

function salutaRespo(){
    let nome = "Egle";
    let cognome = "Risola";

    console.log(`Ciao responsabile ${nome} ${cognome}`);
}

salutaRespo();


//UNA funzione può richiamre altre funzioni 

function salutaTutti(){
    console.log("Saluto tutti in un colpo solo");
    salutaDocente();
    salutaRespo();
    salutaSegret();
    salutaUtente();
}

//salutaTutti la voglio richiamare dall HTML