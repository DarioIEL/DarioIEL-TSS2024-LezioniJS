let libri = ["Il signore degli anelli", "Guida galattica per autostoppisti", "La città invincibile", "Il visconte dimezzato", "Harry Potter 1", "I fiori Blu"];

let prezzi = [10,20,15.47,11.22, 5, 6];

//recupero0 il pezzo di HTML nel quale scriverò 
let elencoLibri = document.getElementById("elencoLibri");

// elencoLibri.innerHTML += "<li>" + libri[0] + " - " + prezzi[0] + "€</li>";
// elencoLibri.innerHTML += "<li>" + libri[1] + " - " + prezzi[1] + "€</li>";
// elencoLibri.innerHTML += "<li>" + libri[2] + " - " + prezzi[2] + "€</li>";
// elencoLibri.innerHTML += "<li>" + libri[3] + " - " + prezzi[3] + "€</li>";

for(let i = 0; i < libri.length; i++){
    elencoLibri.innerHTML += "<li>" + libri[i] + " - " + prezzi[i] + "€</li>";
}
 

let totale = 0;

for(let i = 0 ; i < prezzi.length; i++){
    totale += prezzi[i]
}

console.log(totale);

let totaleLibri = document.getElementById("totaleLibri");

totaleLibri.innerHTML = "Totale: " + totale + " € "

