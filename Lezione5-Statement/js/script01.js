//Operatori di confronto. Ogni volta che utilizzo un operatore di confronto produco un booleano

let num1 = 10;
let num2 = 8;

let cond1 = (num1 == num2); //false
let cond2 = (num1 > num2); //true
let cond3 = (num1 < num2); //false
let cond4 = (num1 != num2); //true

let num3 = 20;
let num4 = "20";

let cond5 = (num3 === num4); //false
let cond6 = (num3 == num4); //true

//if statement
/**
 * if(condizione){
 *  ..fai qualcosa se true
 * }else{
 *  ..fai qualcosa se false
 * }
 */

let etaUser = 16;

if(etaUser >= 18){
    console.log("Benvenuto, puoi entrare");
}else{
    console.log("Mi spiace, non sei maggiorenne");
}


let nomeUser = "Mario";

if(nomeUser == "Dario"){
    console.log("Ciao " + nomeUser + " bentornato");
}else{
    console.log("Ciao, non conosco il tuo nome " + nomeUser);
}


//AND e OR logico

let punteggio = 20;
let skill = 5;

//HARD MODE
//per potere superare un livello devo avere skill e punteggio sopra la soglia

if(punteggio >= 15 && skill >= 6){
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Mi spiace, hai qualche punteggio sotto la soglia");
}

//EASY MODE
//per poter superare un libello basta che una delle due sia sopra la soglia
//Quindi perdo proprio quando nessuna delle due supera la soglia
if(punteggio >= 15 || skill >= 6){
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Mi spiace, tutti i tuoi punteggi sono sotto la soglia");
}
