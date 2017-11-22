// alert ("salut baby")
    //Structure de base IF

    if (true) { // par defaut la condition verifie si c'est vrai
            /*~~~~~~~~
            code
        ~~~~~~~*/
    }

    var nb1 = 10;
    if(nb1 <50)
    {
        console.log("nb1, est bien inférieur à 50");
    }

if(true)
{
    /* ~~ Code si vrai ~~ */
} else {
    /* ~~ Code si faux ~~ */
}

if (nb1 > 50)
{
console.log("nb1, est bien supérieur à 50");
} else {
    console.log("nb1, n'est pas supéreur à 50 ");
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Exercice:
On utilise le if pour verifier l'age de l'internaute => s'il est majeur je lui souhaite la bienvenu.
=> s'il est mineur [1]lui signale et [2] l renvoi vers un autre site.
*/

//--1-- je déclare la majorité légale
var MajoriteFR = 18;

//--2-- demander l'age en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("indiquer votre age"));

//--3-- Je verifie si mon internaute est majeur

if(age > MajoriteFR){
alert("Bienvenu vous êtes majeur");
}
else {
    alert("Vous etes pas majeur, Va voir ta mère, AMIGO !!");
    //redirection
    document.location.href = "http://www.darty.com"
}
