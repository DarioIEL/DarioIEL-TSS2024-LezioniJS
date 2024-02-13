let elDesc = document.querySelector("#elDescrizione");
let elScad = document.querySelector("#elScadenza");
let btnAdd = document.querySelector("#btnAdd");
let card = document.querySelector("#card");

class Item {
    constructor(descrizione, scadenza) {
        this.descrizione = descrizione;
        this.scadenza = scadenza;
    }
}

let listaItems = [];

function aggiungiItem(){
    console.log(event);
    let nuovoItem = new Item(elDesc.value, elScad.value);

    listaItems.push(nuovoItem);

    //sort by scadenza
    listaItems.sort((a, b)=>{
        return a.scadenza - b.scadenza;
    })


    card.innerHTML = "";
    listaItems.forEach(item => {
        card.innerHTML += `<li> ${item.descrizione} - scade tra: ${item.scadenza} giorni </li>`;
    });
}

btnAdd.addEventListener("click", aggiungiItem);

elScad.addEventListener("keypress", function(event){
    console.log(event);
    if(event.key == "Enter"){
        btnAdd.click();
    }
})





// //Closure

// function stampaItems(){
//     let mioParam = 10;
//     function logicaParametro(){
//         return (mioParam * 2);
//     }
//     return logicaParametro();
// }

// stampaItems();