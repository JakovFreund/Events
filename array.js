var imena = ["Jakov","Jurica","Sven","Ante","Dario","Javascript","Marko"];
var stri = "";
for (var i=0;i<imena.length;i++){
        stri=stri+imena[i]+" ";
}
for (i=0;i<imena.length;i++) {
    if (imena[i] == "Javascript") {
        stri = "Javascript " + imena.length;
    }
}
document.getElementById("im").innerHTML=stri;




