let btnAdd = document.querySelector("#btnAdd");
let elLista = document.querySelector("#elLista"); //<ul></ul>
let item = document.querySelector("#item");

let btnRemAll = document.querySelector("#btnRemAll");


function add(){
    let todo = item.value;

    let li = document.createElement("li"); //<li></li>

    li.textContent = todo;  //<li>todo <button> X </button></li>
    li.setAttribute("class", "txtBlue");

    li.onclick = function(){
        li.classList.toggle("txtBarrato");
    }

    let btnRem = document.createElement("button");
    btnRem.textContent = " X ";
    li.appendChild(btnRem);

    btnRem.onclick = function(){
        elLista.removeChild(li);
    }


    //parentNode.appendChild(child)
    elLista.appendChild(li);

}

btnAdd.onclick = add;

function remAll(){
    elLista.innerHTML = "";
   
    // let lis = document.querySelectorAll("#elLista li");
    // lis.forEach(li =>{
    //     elLista.removeChild(li);
    // })
}

btnRemAll.onclick = remAll;