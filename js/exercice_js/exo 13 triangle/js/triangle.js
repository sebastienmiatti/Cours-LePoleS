document.write("<br>");
console.log("FOR");
var diese="";

for(var i = 1; i < 8; i++){
    diese +="#"; //diese = diese+"#"
    console.log(diese);
    document.write(diese+"br");
}

// boucle while
var diese="";
var i = 1;
while (i = 7){
    i++;
    diese +="#";
    document.write(diese+"<br>");
}

//diese + #; //T1
//diese + ##; //T2
//dese + ###; // T3

console.log("WHILE");
var ligne = "";
var j = 1; //initialisation de compteur

while (j <= 7){
    ligne = ligne + "$";
    consolge.log(ligne);
    document.write(ligne + "<br>");
    j++;
}
