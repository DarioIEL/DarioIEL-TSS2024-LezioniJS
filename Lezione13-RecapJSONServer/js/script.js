class Studente {
    constructor(id, nome, cognome, corso) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso
    }
}

// function stampaStudente(studente) {
//     let nuovoStudente = new Studente(studente.id, studente.nome, studente.cognome, studente.corso );

//     let rigaStudente = `<li> ${nuovoStudente.nome} ${nuovoStudente.cognome} - corso: ${nuovoStudente.corso} </li>`;

//     return rigaStudente;
// }

function stampaStudente(studente) {
    let rigaStudente = `<li> ${studente.nome} ${studente.cognome} - corso: ${studente.corso} </li>`;
    return rigaStudente;
}

let demo = document.querySelector("#demo");

//Questa funzione recupera tutti gli studenti
function scaricaStudenti() {
    const urlEndPoint = "http://localhost:3000/studenti";

    //Quando voglio fare una GET non passo più nulla alla fetch, passo solo l'endpoint
    fetch(urlEndPoint)
        .then(data => { return data.json() })

        //il parametro response è l'oggetto che si trova dietro l'endpoint che stiamo chiamando
        .then(response => {
            //response è un array di oggetti di "tipo Studente"
            console.log(response);

            let studenti = response;

            //studente è il singolo oggetto nell'array studenti
            studenti.forEach(studenteVero => {
                demo.innerHTML += stampaStudente(studenteVero)
            });
        })
}

window.addEventListener("DOMContentLoaded", scaricaStudenti);


//voglio registrare uno studente nel db devo fare una POST sull'endopoint .../studenti
function salvaStudente() {
    // let nuovoStudente = {
    //     id: "4",
    //     nome: "Maria",
    //     cognome: "Gestione",
    //     corso: "TSS"
    // }

    let nuovoStudente = new Studente("4", "Maria", "Gestione", "TSS");

    const urlEndPoint = "http://localhost:3000/studenti";

    fetch(urlEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuovoStudente)
    })

        .then(data => {
            return data.json()
        })
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", salvaStudente);