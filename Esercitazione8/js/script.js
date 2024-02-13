class Libro {
    /**
     * @param {String} titolo 
     * @param {String} copertina 
     * @param {String} autore 
     * @param {String} trama 
     * @param {String[]} personaggi 
     * @param {Number} prezzo 
     */
    constructor(titolo, copertina, autore, trama, personaggi, prezzo) {
        this.titolo = titolo;
        this.copertina = copertina;
        this.autore = autore;
        this.trama = trama;
        this.personaggi = personaggi;
        this.prezzo = prezzo;
    }
}

//Questo è un Array di oggetti di tipo Libro
let libri = [
    new Libro("Harry Potter", "https://m.media-amazon.com/images/I/718kKmxQBWL._AC_UF1000,1000_QL80_.jpg", "J.K.Rowling", "Un maghetto che fa le magie", ["Harry Potter", "Ron Weasley", "Hermione Granger"], 21),
    new Libro("La canzone di Achille", "https://www.lafeltrinelli.it/images/9788845405945_0_536_0_75.jpg", "Madeline Miller", "Il romanzo ripercorre la storia di Achille e Patroclo", ["Achille", "Patroclo", "Chirone", "Odisseo"], 15.5),
    new Libro("Rumore Bianco", "https://www.flaneri.com/wp-content/uploads/2015/10/Rumorebianco_DeLillo_flaneri.com_.jpg", "Don De Lillo", "Ambientato in un bucolico college del Midwest degli Stati Uniti, Rumore bianco racconta un anno di vita di Jack Gladney", ["Jack Gladney", "Babette Gladney", "Danise Pardee"], 17)
];

//Recupero i pezzi di HTML
let elTitolo = document.querySelector("#elTitolo");
let elTrama = document.querySelector("#elTrama");
let elCopertina = document.querySelector("#elCopertina");
let elAutore = document.querySelector("#elAutore");
let elPrezzo = document.querySelector("#elPrezzo");
let elPersonaggi = document.querySelector("#elPersonaggi");

let btnAvanti = document.querySelector("#btnAvanti");
let btnIndietro = document.querySelector("#btnIndietro");

let contatore = 0;

function mostraLibro(indice){
    elTitolo.textContent = libri[indice].titolo;
    elTrama.textContent = "Trama: " + libri[indice].trama;
    elAutore.textContent = libri[indice].autore;
    elPrezzo.textContent = libri[indice].prezzo + " €";

    elCopertina.setAttribute("src", libri[indice].copertina);

    elPersonaggi.innerHTML = ""; //Questo cancella la lista

    for(let i = 0; i < libri[indice].personaggi.length; i++){
        // elPersonaggi.innerHTML += "<li>"+libri[indice].personaggi[i]+"</li>";
        let li = document.createElement("li");
        li.textContent = libri[indice].personaggi[i]
        elPersonaggi.appendChild(li);
    }
}

//Questo serve a mostrare il primo libro all'apertura della pagina
mostraLibro(contatore);

function vaiAvanti(){
    contatore++;

    if(contatore > libri.length - 1){
        contatore = 0;
    }

    mostraLibro(contatore);
}

btnAvanti.onclick = vaiAvanti;

function vaiIndietro(){
    contatore--;
    if(contatore < 0){
        contatore = libri.length - 1;
    }
    mostraLibro(contatore);
}

btnIndietro.onclick = vaiIndietro;

/////////////////////////////////////////////////costruzione Anteprima


let titoloInp = document.querySelector("#titoloInp");
let titoloAnte = document.querySelector("#titoloAnte");

titoloInp.addEventListener("blur", function(){
    titoloAnte.innerHTML = titoloInp.value;
});


let imgInp = document.querySelector("#imgInp");
let imgAnte = document.querySelector("#imgAnte");
imgInp.addEventListener("blur", function(){
    imgAnte.setAttribute("src", imgInp.value);
});

let autoreInp = document.querySelector("#autoreInp");
let autoreAnte = document.querySelector("#autoreAnte");

autoreInp.addEventListener("blur", function(){
    autoreAnte.innerHTML = autoreInp.value;
})

let tramaInp = document.querySelector("#tramaInp");
let tramaAnte = document.querySelector("#tramaAnte");

tramaInp.addEventListener("blur", function(){
    tramaAnte.innerHTML = tramaInp.value;
})

let personaggiInp = document.querySelector("#personaggiInp");
let personaggiAnte = document.querySelector("#personaggiAnte");
let listaPersonaggi = [];

personaggiInp.addEventListener("blur", function(){

    listaPersonaggi.push(personaggiInp.value);

    personaggiAnte.innerHTML = "";
    listaPersonaggi.forEach(personaggio =>{
        personaggiAnte.innerHTML += "<li>" + personaggio + "</li>";
    })
})
