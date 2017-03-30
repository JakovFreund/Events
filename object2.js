/**
 * Created by Ucenik on 30.3.2017..
 */
var ja = {Ime:"Jurica", Prezime:"Stanko", Adresa:"Trg", rodenje:"1999", razred:4, skGodina:3};

document.getElementById("mojGumb").addEventListener("click", refresh);

function refresh(){
    for(var i in ja){
        if(i=="Ime" || i=="Prezime")
        {
            ja.Ime=document.getElementById("ime").value;
            ja.Prezime=document.getElementById("prezime").value;
            console.log(ja[i]);
        }
    }
}


/*
-----------------------
*/

document.getElementById("mojGumb2").addEventListener("click", god);

var bob = new Object();
var susan = new Object();

var setAge =function(newAge){
    this.age = newAge;
};

bob.setAge=setAge;
bob.setAge(40);

susan.setAge=setAge;
susan.setAge(50);

susan.ime="Susan";
bob.ime="Bob";


function god(){
    bob.setAge(document.getElementById("bob1").value);
    susan.setAge(document.getElementById("susan1").value);
    console.log(bob.age);
    console.log(susan.age);
}

function older(a,b){
    if (a.age>b.age){
        console.log(a.ime)
    }
    else{
        if(a.age<b.age){
            console.log(b.ime)
        }
        else{
            console.log("jednaki")
        }

    }
}

older(bob,susan);