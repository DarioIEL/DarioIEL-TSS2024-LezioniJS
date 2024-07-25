let cont1 = document.querySelector("#cont1");
let btnUsers = document.querySelector("#btnUsers");
let rowCont1 = document.querySelector("#cont1 .row");

const URL = "https://66a0fb7f7053166bcabd9541.mockapi.io/tssrecap/v1";

function leggiUsers(){

    let endpoint = "/users";
    fetch(URL+endpoint)
    .then(data => {
        return data.json();
    })
    .then(response =>{
        rowCont1.innerHTML = "";
       console.log(response); 
       response.forEach(user => {
            rowCont1.innerHTML += creaCard(user);
       });
    })
}

function creaCard(user){
    let card = `
                    <div class="card col-4">
                        <div class="card-body">
                            <h3 class="card-title">${user.name}</h3>
                            <p class="card-text">${user.description}</p>
                            <img class="img img-responsive" src=${user.avatar}>
                        </div>
                    </div>
                `;
    return card;
}


btnUsers.addEventListener("click", leggiUsers);

