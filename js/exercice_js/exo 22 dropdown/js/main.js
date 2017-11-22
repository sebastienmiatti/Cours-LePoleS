/*
1- VARIABLES
On sélectionne les éléments du DOM (page html) pour les stocker dans des variables afin de le manipuler ensuite dans notre code
*/


    var monBouton = document.getElementById('myButton');
    var liste = document.getElementById('dropdown-list');


/*
3-FONCTIONS
*/
function afficher(){
    if (liste.style.display == 'block') { /* ajout ou retrait de css*/
        liste.style.display = 'none';
    } else {
        liste.style.display = 'block';
    }
};


/*
2- EVENEMENT
*/
    monBouton.addEventListener('click', afficher);
