let numero1 = 12.21357654;

console.log(numero1.toExponential(2));

let numero2 = "45";

console.log(Number(numero2));
console.log(parseInt(numero2));
console.log(parseFloat(numero2));

console.log(parseInt('1011100101111', 2)); //binario

console.log(parseInt('425616', 6)); //esadecimale

let numero3 = "1 2 3 ";
let numero4 = 123;

console.log(isNaN(numero3));
console.log(isNaN(numero4));


//oggetto globale MATH

let abs = Math.abs(-23);
console.log(abs);

let numero5 = 34;
console.log(Math.pow(numero5, 2));
console.log(Math.sqrt(numero5));

let numero6 = 3.467;

let round1 = Math.round(numero6);
console.log(round1);
console.log(numero6.toPrecision(3));

let ceil = Math.ceil(numero6); //arrotonda intero superiore
console.log(ceil);

let floor = Math.floor(numero6); //arrotonda intero inferiore
console.log(floor);

//Math.random()
let numRandom = Math.random();
console.log(numRandom);

let numIntCasuale = Math.ceil(Math.random() * 22);
console.log(numIntCasuale);


