let estrazione = document.getElementById("estrazione");

function estrai(){
    
    let numDaEstrarre = document.getElementById("numDaEstrarre").value;
    
    let numeriEstratti = [];
    let giri = 0;

    if(numDaEstrarre <= 90){
        // while(numeriEstratti.length < numDaEstrarre){
        //     let numero = Math.ceil(Math.random() * 90);
        //     giri++;
        //     if(!numeriEstratti.includes(numero)){
        //         numeriEstratti.push(numero);
        //     }
        // }

        for(let i = 0; i < numDaEstrarre; i++){
            let numero = Math.ceil(Math.random() * 90);
            
            if(numeriEstratti.includes(numero)){
                i--;
            }else{
                numeriEstratti.push(numero);
            }
            giri++
        }
        
        console.log(numeriEstratti);
        console.log(giri);
    }else{
        alert("amico, hai messo più numeri di quanti ce ne siano nel gioco del lotto")
    }

    numeriEstratti.forEach(numero=>{
        estrazione.innerHTML += "<li>" + numero + "</li>";
    })

}