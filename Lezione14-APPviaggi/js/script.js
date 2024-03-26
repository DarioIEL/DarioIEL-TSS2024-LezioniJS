//Creare delle card per ogni singolo viaggio. La card avrà un pulsante che salva in Local Storage parte del viaggio (tratta, costo, tipologia). Quando entri nella pagina carrello questa legge la LS e recupera quello salvato.


function scaricaViaggi() {
    const ENDPOINTviaggi = "http://localhost:3000/viaggi";

    fetch(ENDPOINTviaggi)
        .then(data => { return data.json() })
        .then(response => {
            // viaggi è un array di oggetti
            let viaggi = response;

            viaggi.forEach(viaggio => {
                elListaCardViaggi.appendChild(creaCardViaggio(viaggio));
            });
        })
}

window.addEventListener("DOMContentLoaded", scaricaViaggi);

let elListaCardViaggi = document.querySelector("#elListaCardViaggi");

function creaCardViaggio(viaggio) {
    // let card = `<div class="card">
    // <img class="card-img-top" src=${viaggio.locandina} alt="Title" />
    // <div class="card-body">
    //     <h4 class="card-title">${viaggio.tratta}</h4>
    //     <p class="card-text">Costo: ${viaggio.costo}</p>
    // </div>
    // </div>`;

    let card = document.createElement("div");
    card.setAttribute("class", "card col-3 m-2 p-2");

    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", viaggio.locandina);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.innerHTML =
        `<h4 class="card-title">${viaggio.tratta}</h4>
        <p class="card-text">Costo: ${viaggio.costo}</p>`;

    let btnAcquista = document.createElement("button");
    btnAcquista.setAttribute("class", "btn btn-primary col-6")
    btnAcquista.innerHTML = "Acquista";

    btnAcquista.addEventListener("click", function () {
        console.log(viaggio);
    });


    card.appendChild(img);
    card.appendChild(cardBody)
    card.appendChild(btnAcquista);

    return card;
}