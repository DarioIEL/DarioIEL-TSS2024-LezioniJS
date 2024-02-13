let user = {
    username: "Stellina49",
    password: "12345",
    citta: "Torino",
    status: "offline",
    accesso: false,

    doLogin: function(){

        this.status = "online";
        this.accesso = true;

        console.log("Ho eseguito il login. Il tuo status attuale è : " + this.status);
    },
    
    doLogout(){
        this.status = "offline";
        this.accesso = false;
        
        console.log("Ho eseguito il logout. Il tuo status attuale è : " + this.status);
    }
}


user.doLogin();
console.log(user.status);
console.log(user.accesso);

user.doLogout();
console.log(user.status);
console.log(user.accesso);