// alert("CHOCOLAT")

//-- 1. ADDITION
//-- INFO je peux déclarer plusieurs variables à la suite var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;


//-- Addition de nb1 + nb2 avec l'opérateur '+'
resultat = nb1 + nb2;

//-- Affichage dans la console
console.log(resultat);


//-- 2. SOUSTRACTION
//-- soustraction de nb1 - nb2 avec l'opérateur '-'
resultat2 = nb1 - nb2;
console.log(resultat2);

//-- 3.MULTIPLICATION
// Multiplication de nb1 * nb2 avec l'opérateur '*'
resultat3 = nb1 * nb2;
console.log(resultat3);

//-- 4. LA DIVISION
// Multiplication de nb1 / nb2 avec l'opérateur '/'
resultat4 = nb1 / nb2;
console.log(resultat4);

//--5. MODULO
//-- Le modulo retourne le reste d'une division
//-- modulo de nb1 % nb2 avec l'opérateur "%"
resultat5 = nb1 % nb2;
console.log(resultat5);

//-- Et maintenant je ré-affecte une valeur à nb1
nb1 = 11;
resultat6 = nb1 % nb2;
console.log("le reste de la division de "+ nb1 + " par " + nb2 +" est égal à : " + resultat6);


/*
LES ECRITURES SIMPLIFIEES
*/

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 10; //nb1 lui meme + quelque chose.
console.log(nb1);

// le raccourci est le meme avec les autres opérateurs +,-,*,/,%;
