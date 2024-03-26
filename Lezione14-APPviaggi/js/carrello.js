class BigliettoAcquistato {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

let nome = document.querySelector("#nome");
let email = document.querySelector("#email");

let btnPaga = document.querySelector("#btnPaga");

function paga() {

    let bigliettoAcq = new BigliettoAcquistato(nome.value, email.value);

    fetch("http://localhost:3000/bigliettiAcquistati", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bigliettoAcq)
    }).then(data => { return data.json() })
}

btnPaga.addEventListener("click", paga);