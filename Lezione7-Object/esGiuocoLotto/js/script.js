let numeriEstratti = [];

let giri = 0;

for(let i = 0; i < 6; i++){

    let max = 60;
    let min = 25;

    let numero = Math.ceil(Math.random() * (max - min )) + min;

    if(numeriEstratti.includes(numero)){
         i--;
    }else{
        numeriEstratti.push(numero);
    }

    giri++;
}

console.log(numeriEstratti);
console.log(giri);


////Con WHILE estraggo 6 numeri casuali da un set di 90 numeri. I numeri non si devono ripetere
let sequenzaNum = [];

while(sequenzaNum.length <= 6){
    let numeroEstratto = Math.ceil(Math.random() * 90);

    if(!sequenzaNum.includes(numeroEstratto)){
        sequenzaNum.push(numeroEstratto);
    }

}


//////////////////senza if
let setPerEstrazione = [];

for(let i = 0; i < 90; i++){
    setPerEstrazione.push(i+1);
}

console.log(setPerEstrazione);
let numeriEstratti2  = [];

for(let i = 0; i < 6; i++){
    let indiceCasuale = Math.floor(Math.random() * setPerEstrazione.length);
    numeriEstratti2.push(setPerEstrazione[indiceCasuale]);
    setPerEstrazione.splice(indiceCasuale, 1);
}

console.log(numeriEstratti2);
console.log(setPerEstrazione);