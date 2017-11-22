// alert('Salut')

/*
LES BOULES
*/

//-- La Boucle FOR
// for(3 argmuents){/*
//     code
//     */}

/* 1.. initialise un compteur à partir de combien de je compte( par defaut le compteur est la variable 'i')
   2.. la condition à verifier qui doit être VRAI / TRUE
   3.. le 'pas' d'incrémentation (combien j'ajoute a chaques tour,  généralement 1 donc i++)
*/

// for (var i = 0; i <= 10; i++)
// {
//     document.write("<p>Instruction exécutée : " + i + "</p>");
// }
//
//
// // La boucle WHILE (tant que)
//
// // Très utilisée quand on ne connait pas le nombre de tour de boucles a l'avance.
//
// var j = 1;
// while(j<=10)
// {
// document.write("<hr><p>Instruction exécuté : " + j + " </p>")
// /* 50 lignes de code*/
// //   j++;
// }
//
// /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// */
//
// exercice
// var monCompte = 1000;
// var temps = 0;
// while(monCompte < 2000){monCompte +=50; temps++;}
// document.write("<h3> Sous sur mon compte : " + monCompte + "</h3>");
// document.write("<h3> jusqu'à 2000€, il me faut : " + temps + " mois </h3>");
// document.write("<h3> jusqu'à 2000€, il me faut : " + (temps/12) + " années </h3>")


var temps = 0;
for ( var monCompte = 1000; monCompte <= 2000; monCompte +=50)
{
document.write("<h3> le mois suivant j'ai : " + monCompte + "</h3>"); temps++;
}
document.write("<h3> Il aura fallu " + temps + " mois.</h3>")





// for (var j = 1000; j <= 2000; j += 50)
// {
//     document.write("<p>Instruction parfaitement exécuté : "+ j +" </p>");
// }
