/**
 * Costruisci 2 array
 * 1 per i prodotti
 * 1 per i prezzi
 * 
 * crea una funzione che unisce prezzi con prodotti
 * 
 * crea una funzione che calcola il totale dei prezzi
 * 
 * crea la funzione stampaScontrino() che richiama le altre due funzioni e stampa tutto nella pagina.
 * 
 * Se il totale supera i 10€ stampiano "Hai appena superato i 10€ per ottenere lo sconto"
 */

let listaScontrino = document.getElementById("listaScontrino");
let totaleScontrino = document.getElementById("totaleScontrino");
let totaleArticoli = document.getElementById("totaleArticoli");


let prodotti = ["Acqua", "Pane", "Pizza", "Insalata", "Nutella"];
let prezzi = [1.50, 3.20, 0.80, 0.9, 2.50];

function unisciPrezziProdotti(prezzo, prodotto){
    let prezzoProdotto = prodotto + " - " + prezzo;
    return prezzoProdotto;
}

let totale = 0;
function calcolaTotale(prezzo){
    totale += prezzo;   
}


function stampaScontrino(){
    for(let i = 0; i < prodotti.length; i++){
      let voceScont = unisciPrezziProdotti(prezzi[i], prodotti[i]);
      console.log(voceScont);
      listaScontrino.innerHTML += "<li>" + voceScont + " € </li>";
      calcolaTotale(prezzi[i]);
    }
    
    if(totale >= 10){
        totaleScontrino.innerHTML = "Totale: " + totale.toPrecision(4) + " €. Bravo, puoi ottenere lo sconto ";
    }else{
        totaleScontrino.innerHTML = "Totale: " + totale.toPrecision(4) + " € ";
    }
   
    //versione Ottimizzata
    // totaleScontrino.innerHTML = "Totale: " + totale.toPrecision(4) + " € ";
    // if(totale >= 10){
    //     totaleScontrino.innerHTML += ". Bravo puoi ottenere lo sconto";
    // }
}