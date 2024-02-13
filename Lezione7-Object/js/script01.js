//NOTAZIONE LETTEREALE
let studente = {
    //dichiaro le mie prop
    nome: "Pippo",
    cognome: "Rossi",
    eta: 20,
    esami: ["Calcolatori", "Architettura Software", "Basi Dati"],
    docenti: [
        {
            nome: "Dario",
            cognome: "Mennillo",
            materia: "JS"
        },
        {
            nome: "Mauro",
            cognome: "Bogliaccino",
            materia: "Java"
        },
        {
            nome: "Oscar",
            cognome: "Vecchione",
            materia: "Html, CSS"
        }
    ],

    computer: {
        marca: "Dell",
        modello: "Vostro",
        ram: 8,
        acceso: true
    },

   //dichiaro un metodo 
    presentati: function(){
        let presentazione = "Ciao, mi chiamo: " + this.nome + " " + this.cognome + ". Mi mancano ancora i seguenti esami: ";

        for(let i = 0; i < this.esami.length; i++){
            presentazione += "<li>" + this.esami[i] + "</li>";
        }
        
        return presentazione;
    }

}

//il this all'esterno fa riferimento al Window, cioè al Browser
console.log(this.location);


//richiamo delle prop, leggo il valore
console.log(studente);
console.log(studente.nome);
console.log(studente.cognome);

//Richiamo il nome del primo docente
console.log(studente.docenti[0].nome);


//richiamo il nome del computer
console.log(studente.computer.marca + " " + studente.computer.modello);

// document.getElementById("demo").innerHTML = "Il mio studente si chiama " + studente.nome + " " + studente.cognome;


//richiamo il metodo 
document.getElementById("demo").innerHTML = studente.presentati();