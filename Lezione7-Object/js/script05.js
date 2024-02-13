/**
 * 
 * @param {String} nome 
 * @param {String} cognome 
 * @param {Number} eta 
 * @param {String} codFisc 
 * @param {String[]} materie
 */
class Persona {
    constructor(nome, cognome, eta, codFisc, materie) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.codFisc = codFisc;
        this.materie = materie;
        this.toString = function () {
            return `${this.nome} ${this.cognome} - età: ${this.eta} - codice fiscale: ${this.codFisc} - materie: ${this.materie}`;
        };
    }
}

// function Persona(nome, cognome, eta, codFisc, materie) {
//         this.nome = nome;
//         this.cognome = cognome;
//         this.eta = eta;
//         this.codFisc = codFisc;
//         this.materie = materie;

//         this.toString = function () {
//             return `${this.nome} ${this.cognome} - età: ${this.eta} - codice fiscale: ${this.codFisc} - materie: ${this.materie}`;
//         };
// }


let persona1 = new Persona("Dario", "Mennillo", 34, "skjadha897kjbas", ["js", "ts", "react"]);
console.log(persona1.toString());


let personeRegistrate = [
    new Persona("Pippo", "Rossi", 32, "asdfg89hvy75cv", ["Js", "Ts", "Html"]),
    new Persona("Anna", "Biuanchi", 22, "qwerty645ytrhg", ["Java", "Spring", "DB"]),
    new Persona("Laura", "Verdi", 88, "nbvjhsa89kjbajkln", ["Cobol"])
]


personeRegistrate.forEach(persona =>{
    console.log(persona.toString());
})
