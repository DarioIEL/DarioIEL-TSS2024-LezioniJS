//Funzioni anonime
// IIFE - funzioni autoinvocanti
(function (num1, num2){
    let somma = Number(num1) + Number(num2);
    console.log(somma);
    return somma
}())

//Arrow
let somma = (num1, num2) => {
    return num1 + num2;
}

console.log(somma(4,5));

let colori = ["giallo", "rosso", "blu"];

colori.forEach(colore =>{
    console.log(colore);
});

let nomi = ["Anna", "Jason", "Franco"];

function stampaPowerRangers(nome){
    return `Il nome del Power Ranger é: ${nome}`; 
}

nomi.forEach(nome =>{
   console.log(stampaPowerRangers(nome));
});

