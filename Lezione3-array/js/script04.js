let studenti = [
    "Artuso Giulia",
    "Castaldo Leonardo",
    "Ghirardi Surya",
    "Grandis Gabriele",
    "Himollari Mario",
    "Leonte Ionela",
    "Makoumba Best",
    "Mokoko Cedric",
    "Neri Stefania",
    "Rizzo Andrea",
    "Rodella Francesca",
    "Savarino Angelo",
    "Alessio Del Monte",
    "Eliana Bove"
];

console.log(studenti[0]);
console.log(studenti[1]);

//recupero l'ul 
let elencoStud = document.getElementById("elencoStud");
// let elencoStud = document.querySelector("#elencoStud")

for(let index = 0; index < studenti.length; index++){
    console.log(studenti[index]);
    elencoStud.innerHTML += "<li>" + studenti[index] + "</li>";
}

//Stampa in console la somma delle ore del giorno
let somma = 0;

for(let i = 0; i <= 24; i++){
    somma += i;
}

console.log(somma);


