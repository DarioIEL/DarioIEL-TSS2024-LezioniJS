function caricaCarrello(){
    //fetch per recuperare gli oggetti nel carrello
    const urlCarrello = "https://66a0fb7f7053166bcabd9541.mockapi.io/tssrecap/v1/carrello";
    
    listaProd.innerHTML = "";

    fetch(urlCarrello)
    .then(data =>{ return data.json()})
    .then(response => {
        if(response.length > 0){
            response.forEach(item => {
                listaProd.appendChild(creaItem(item))
            });

        }else{
            console.log("Mi spiace, il tuo carrello è vuoto");
            listaProd.innerHTML = "<h3> Mi spiace, non ci sono prodotti nel carrello </h3>"
        }
    })
}

let listaProd = document.querySelector("#listaProd");

function creaItem(item){

    let liItem = document.createElement("li");
    liItem.textContent = item.name + " " + item.price;
    liItem.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");

    let btnDel = document.createElement("button");
    btnDel.setAttribute("class", "btn btn-danger")
    btnDel.innerHTML = "<i class='bi bi-trash3'></i>";

    btnDel.addEventListener("click", function(){
        eliminaItem(item.id)
    });

    liItem.appendChild(btnDel);

    return liItem;
}

function eliminaItem(idItem){
    const urlCarrelloDel = "https://66a0fb7f7053166bcabd9541.mockapi.io/tssrecap/v1/carrello/" + idItem ;

    fetch(urlCarrelloDel,{
        method: "DELETE"
    }).then(res =>{
        console.log(res);
        if(res.ok){
            return res.json();
        }
    }).then(task=>{
        console.log(task);
        // location.reload();
        caricaCarrello();
    })

}

document.addEventListener("DOMContentLoaded", caricaCarrello);