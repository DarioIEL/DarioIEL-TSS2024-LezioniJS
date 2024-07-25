/**
 * La Login è integralmente gestita con json-server.
 * Quando sono connesso come admin nella home ho anche il pulsante per eliminare il singolo prodotto
 */

const urlUsers = "http://localhost:3000/users";

let mioForm = document.querySelector("#mioForm");

mioForm.addEventListener("submit", function(){
    let email = document.querySelector("#floatingInput").value;
    let password = document.querySelector("#floatingPassword").value;
    

    fetch(urlUsers)
    .then(data =>{ return data.json() })
    .then(response => {
        response = response.filter((user) => user.email == email && user.password == password);

        if(response.length > 0){
            localStorage.setItem("userConnesso", JSON.stringify(response));
            location.href = "../index.html";
        }else{
            
            document.querySelector("#feed").innerHTML = "<h3>Email o password errati !! </h3>";
        }

        return response;
    })

})