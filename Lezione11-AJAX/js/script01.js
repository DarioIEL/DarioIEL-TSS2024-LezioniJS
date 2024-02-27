let listaContatti = document.querySelector("#listaContatti");

//fetch è una API che ci mette a disposizione dei metodi per poter chiamare delle API esterne.
const URL = "https://reqres.in/api/users";

utenti = [];

fetch(URL)
.then(data =>{
    //Qui raccolgo le info che arrivano dal server
    if(data.status == 404){
        location.href = "./404.html";
    }
    console.log(data);

    return data.json();
})
.then(response =>{

    //nella response il json è già stato parserizzato
    console.log(response);

    //voglio vedere gli utenti. Si trovano sotto la prop data dell'oggetto. Questo data non c'entra una mazza con il data di sopra della prima then
    // console.log(response.data);

    utenti = response.data;

    utenti.forEach(utente => {
        listaContatti.innerHTML += creaCardUser(utente);
    });    
    
});

console.log(utenti);

/**
 * 
 * @param {Object} user 
 */
function creaCardUser(user){
    let card = `<li> ${user.first_name} ${user.last_name} <img src ="${user.avatar}"></li>`;
    return card;
}




// let promessa = new Promise(success, fail);
// function success(){
// }
// function fail(){
// }
// promessa.then()