let automobile = {
    marca: "Audi",
    modello: "RS6",
    cilindrata: 3000,
    colore: "nero opaco",
    stripLed: true,
    trasmissione: "automatica",

    marciaAttuale: 0,
    velocita: 0,
    numGiri: 0,
    accesa: false,

    descrivi(){
        let descrizione = `${ this.marca } ${this.modello} - colorazione ${this.colore} - Cambio  ${this.trasmissione} - Cilindrata ${this.cilindrata}`;

        return descrizione;
    },

    calcolaVelocita(numGiri, marciaAttuale){
        this.numGiri = numGiri;
        this.marciaAttuale = marciaAttuale;

        let velocita = (this.numGiri * this.marciaAttuale) / 100;

        return velocita;
    },

    accendi(){
        if(this.accesa){
            console.log("L'auto è già accesa");
        }else{
            this.accesa = true;
            console.log("Auto ON");
        }
    },

    spegni(){
        if(this.accesa){
            this.accesa = false;
            console.log("Auto OFF");
        }else{
            console.log("L'auto è già spenta");
        }
    },


    guidaAuto(){
        if(this.accesa){
            this.velocita = this.calcolaVelocita(3500, 5)      
            return `L'auto è accesa ${this.accesa} e viaggia a ${this.velocita} km/h`;
        }else{
            return "L'auto è ancora spenta, come fai a guidare ?";
        }
    }
}

automobile.accendi();
console.log(automobile.guidaAuto());
// console.log(automobile.calcolaVelocita(4000, 6));
automobile.spegni();
console.log(automobile.guidaAuto());