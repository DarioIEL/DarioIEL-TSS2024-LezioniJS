let demo = document.querySelector("#demo");
let btnReg = document.querySelector("#btnReg");

const URLEndpoint = "http://localhost:3000/studenti";

fetch(URLEndpoint)
    .then(data => { return data.json() })
    .then(response => {
        //in questo caso la response è un array di oggetti
        console.log(response);

        response.forEach(studente => {
            demo.innerHTML += `<li> ID: ${studente.id} - ${studente.nome} ${studente.cognome} </li>`;
        });
    });




btnReg.addEventListener("click", function () {

    let nomeStud = document.querySelector("#nomeStud").value;
    let cognomeStud = document.querySelector("#cognomeStud").value;


    if (nomeStud != "" && cognomeStud != "") {
        let nuovoStud = new Studente(nomeStud, cognomeStud);

        fetch(URLEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuovoStud)
        })
            .then(data => {
                return data.json()
            })

    } else {
        event.preventDefault();
        console.log("Non hai inserito niente");
    }
})


class Studente {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
}