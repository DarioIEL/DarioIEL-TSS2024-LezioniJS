//Queste due variabili esistono già nello script.js
// let cont1 = document.querySelector("#cont1");
// let rowCont1 = document.querySelector("#cont1 .row");

let ruoloUser = "";
let nomeUser = "";

function controllaUser(){
    // Legge nella local storage per vedere come è  fatto l'utente connesso
    let user = JSON.parse(localStorage.getItem("userConnesso"));
   
    if(user){
        ruoloUser = user[0].role;
        nomeUser = user[0].nome;
    }
}

document.addEventListener("DOMContentLoaded", controllaUser);

let btnProdcuts = document.querySelector("#btnProds");

function caricaProdotti(){
    let endpoint = "/products";

    fetch(URL+endpoint)
    .then(data =>{ return data.json() })
    .then(response =>{
       rowCont1.innerHTML = "";
       response.forEach(prodotto => {
            rowCont1.appendChild(creaCardProdotto(prodotto)); 
       });
    })
}

btnProdcuts.addEventListener("click", caricaProdotti);

function creaCardProdotto(prodotto){
    let card = document.createElement("div");
    card.setAttribute("class", "card col-4 p-3 mb-2");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    
    cardBody.innerHTML = `<h3 class="card-title">${prodotto.name}</h3>
    <p class="card-text">${prodotto.price}</p>
    <img class="img img-fluid" src=${prodotto.avatar}>`;
    
    let btnCompra = document.createElement("button")
    btnCompra.setAttribute("class", "btn btn-success");
    btnCompra.textContent = "Buy";
    
    /**
     * Per poter utilizzare una funzione con un parametro devo obbligartoriamente utilizzare una funzione anonima
     */
    btnCompra.addEventListener("click", function(){ 
        acquista(prodotto) 
    });

    
    card.appendChild(cardBody);
    card.appendChild(btnCompra);
    

    if(ruoloUser == "admin"){
        let btnDelProd = document.createElement("button");
        btnDelProd.textContent = "Elimina prodotto";
        btnDelProd.setAttribute("class", "btn btn-danger");

        card.appendChild(btnDelProd);
    }

    return card; //ATT: adesso la card è un HTMLObject
}

function acquista(prodotto){
    console.log(prodotto);
    let endpoint = "/carrello";
    fetch(URL + endpoint, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(prodotto)
    })
    .then(data => {return data.json()})
}