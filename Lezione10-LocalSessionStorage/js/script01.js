//Notazione letterale JS
let studente = {
    nome: "Anna",
    cognome: "Rossi",
    matricola: 1,
    email: "anna.rossi@mail.com",
    presenza: true
}

console.log(typeof studente); //object
console.log(studente.nome);

let studenteJSON = "{ 'nome': 'Anna', 'cognome':'Rossi', 'matricola':1, 'email':'anna.rossi@mail.com', 'presenza':true }";

console.log(typeof studenteJSON); //string
console.log(studenteJSON.nome); //undefined

////////////////////////////////////////////////////////////////////////////////////////
class Docente {
    constructor(nome, cognome, materia) {
        this.nome = nome;
        this.cognome = cognome;
        this.materia = materia;
    }
}


let docente = new Docente("Dario", "Mennillo", "JS");

console.log(typeof docente, "Questo è il docente", docente);

///traduco l'oggetto in un JSON

let docenteJSON = JSON.stringify(docente);

console.log("Questo è il docente JSON", docenteJSON);


/////////////////////////////////////////////////
let respoCorsoJSON = '{"nome":"Egle","cognome": "Risola", "corso": ["TSS", "TPPW", "SR24"]}';

//traduco la string in oggetto

let respoCorso = JSON.parse(respoCorsoJSON);

console.log(respoCorso);
