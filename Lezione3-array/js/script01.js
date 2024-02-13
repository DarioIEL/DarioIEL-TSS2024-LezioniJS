//ARRAY def. Contenitore di elementi simili tra loro

let colori = ["Giallo", "Verde", "Blu", "Rosso", "Rosa", "Azzurro"];

//0-based
//Voglio recuperare un colore
let primoColore = colori[0];
console.log(primoColore);

let secondoColore = colori[1];
console.log(secondoColore);

let sestoColore = colori[5];
console.log(sestoColore);

//Voglio conoscere la dimensione, la lunghezza dell'Array
let lunghezza = colori.length;
console.log("Il mio array contiene " + lunghezza + " elementi");

let coloreInesistente = colori[10];
console.log(coloreInesistente);

let ultimoColore = colori[colori.length - 1];
console.log("L'ultimo Colore è : " + ultimoColore);

////////////////////LA Frutta fa bene 
let frutta = ["mela", "pesca", "banana", "kiwi", "arance"];

//push() aggiunge un elemento alla fine
frutta.push("ciliegia");
frutta.push("mandarino");

console.log(frutta);

//pop() elimina l'ultimo elemento
frutta.pop();

//sort() ordina l'array
frutta.sort();

//reverse() ribalta l'ordine 
frutta.reverse();

console.log(frutta);

///Unire due array
let verdura = ["broccoli", "cavolfiori", "cime di rape", "lattuga"];

let fruttaEVerdura = frutta.concat(...verdura);

console.log(fruttaEVerdura);


//Unire gli elementi di un array
let mioNome = ["D", "A","R","I","O"];

console.log(mioNome.join(""));

//Le stringhe sono da considerarsi array di caratteri
let mioCognome = "Mennillo";

//il metodo split() elimina il separatore e divide l'array
let cognomeArr = mioCognome.split("");

console.log(cognomeArr);

let frase = "ciao mi chiamo Dario";
let fraseArr = frase.split(" ");
console.log(fraseArr);

let frase2 = "i topi non avevano nipoti";
let fraseArr2 = frase2.split("").reverse().join("");
console.log(fraseArr2);

//Voglio invertire l'ordine delle lettere del mio nome 
let nomeUser = "Dario";
console.log(nomeUser.split("").reverse().join(""));

//Array Misti, NON serve a descrivere entità complesse

let docente = ["Dario", "Mennillo", "Javascript", 12, true];
console.log(docente);
// docente.reverse();

let nomeDocente = docente[0];
let cognomeDocente = docente[1];

console.log(nomeDocente, cognomeDocente);


//PER Poter leggere un array elemento per elemento uso il  CICLO FOR
frutta.forEach(pippo => {
    console.log(pippo);
});

let listaFrutta = document.getElementById("listaFrutta");

console.log("Leggo l'array con un for classico");
for(let i = 0; i < frutta.length; i++){
    console.log(frutta[i]);
    listaFrutta.innerHTML += "<li>" + frutta[i] + "</li>";
}

let sommaOre = 0;
//Qual è la somma delle ore del giorno ? 
for(let i = 1; i <= 24; i++){
    sommaOre += i;
}

console.log(sommaOre);


// SPOILER
// let docenteOBJ = {
//     nome: "Dario",
//     cognome: "Mennillo",
//     eta: 34
// }

