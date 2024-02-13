let studente = {
    nome: "Anna",
    cognome: "Bianchi",
    matricola: 25,
    materie: [
        {
            nomeMateria: "JS",
            docente: "Dario Mennillo",
            ore: 170
        },
        {
            nomeMateria: "Java",
            docente: "Mauro Bogliaccino",
            ore: 180
        },
        {
            nomeMateria: "HTML",
            docente: "Oscar Vecchione",
            ore: 190
        },
    ],

    presentati(){
        let presentazione = `${this.nome} ${this.cognome}, matricola: ${this.matricola}. Materie: `;

        this.materie.forEach(materia =>{
            presentazione += `<br>${materia.nomeMateria} - ${materia.docente} - ${materia.ore} ore`; 
        })

        return presentazione;
    }
}


let demo = document.getElementById("demo")
function presentaStudente(){
    demo.innerHTML = studente.presentati();
}