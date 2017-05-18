function fun(){
    a=document.getElementById("a2").value;
    array1=a.split(" ",10);
    var b;
    if (! isNaN(Math.max.apply(Math,array1))){
        b = Math.max.apply(Math, array1);
    }
    else{
        b= "Greška";
    }
    document.getElementById("p1").innerHTML = b;
}

function f1(){
    a=document.getElementById("a3").value;
    b=document.getElementById("a4").value;
    if(a.length<10){
        alert("Dude your textual field is smaller than 10!")
    }
    if(18<b&&b<99){
        alert("dude thanks!")
    }
}

function f2(){
    a=Math.round(Math.random()*1000);
    document.getElementById("divcina").style.backgroundColor="purple";
    if(a<800){
        document.getElementById("divcina").style.backgroundColor="red"
    }
    if(a<600){
        document.getElementById("divcina").style.backgroundColor="yellow"
    }
    if(a<400){
        document.getElementById("divcina").style.backgroundColor="green"
    }
    if(a<200){
        document.getElementById("divcina").style.backgroundColor="blue"
    }
}