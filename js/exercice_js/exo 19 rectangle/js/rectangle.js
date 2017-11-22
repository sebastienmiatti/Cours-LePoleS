/*
1- variables qui stockent un élément du DOM( document object model)
*/

// cible le bouton afficher/ cacher dans le DOM
var bouton = document.getElementById('toggle-rectangle');

// cibler le rectangle dans le DOM
var rectangle = document.querySelector('.rectangle');

/*
2-FONCTIONS
*/

/*
a- Fonction au click sur le bouton
*/
// la methode ou fonction .toggle() va ajouter ou supprimer la class css (c'est un interrupteur)
function surClickBouton(){
    rectangle.classList.toggle('hide'); // correspond à .hide en css qui à la propriété display: none;
}

/*
b- fonction au survol sur le rectangle
*/
function survolRectangle(){
    rectangle.classList.add('important');
}
/*
c- fonction a la sortie du rectangle
*/
function sortieRectangle(){
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');
}

/*
d- fonction au double click
*/
function doubleClickRectangle(){
    rectangle.classList.toggle('good');
}


/*
3-Ecouteurs d'évènements
*/

/* l'écouteur prend 2 paramètres => écouteur(parametre_1, parametre_2)
en 1er => l'évènements
en 2nd => la fonction à exécuter a cet évènements
*/

/* installe un gestionnaire d'évenement au clic sur le bouton ciblé sur ma variable BUTTON*/
bouton.addEventListener('click', surClickBouton);

/* installe un ecouteur au survol sur le rectangle*/
rectangle.addEventListener('mouseover', survolRectangle);

/* installe un ecouteur a la sorti du survol de retangle*/
rectangle.addEventListener('mouseout', sortieRectangle);

/*installe un ecouteur au double click du rectangle */
rectangle.addEventListener('dblclick', doubleClickRectangle);
