//On a besoin de creer les elements qui vont nous servir à construire notre dialogue
//Il nous faut, l'image du personne, son nom et des dialogues defilants.

//On commence par creer les elements du premiers personnage
function init(infos){

   //recuperation du context pour l'implementation des elements
  if( infos == data.perso_0 ){
    var contexte = document.getElementById('character_01')
  }else{
    var contexte = document.getElementById('character_02')
  }
  // Création des nouveaux éléments de paragraphe
    var portrait  = document.createElement("img");
    var nom   = document.createElement("h3");
    var bouton = document.createElement("button");
    var parole = document.createElement("div");
  //implementation des elements à integrer :
    //Gestion de l'image
    portrait.src= infos.picture;

    //Affichage du nom
    nom.innerHTML = infos.name;

    //Reglage du bouton
    bouton.innerHTML = 'Retrouvailles';
    bouton.onclick = dialogue;

    //Ajout des classes sur paroles
    parole.className = 'center';

    //console.log([bouton])

  //generation des elements dans le DOM
    contexte.appendChild(nom);
    contexte.appendChild(portrait);
    contexte.appendChild(parole)

    //Creation du bouton
      //--> Avant d'incerer le bouton dans le DOM on test si il n'existe pas déjà
    if( document.getElementsByTagName('button').length == 0 ){
      document.getElementsByTagName('body')[0].appendChild(bouton);
    }
}

// initialisation des personnages
init(data.perso_0);
init(data.perso_1);

var index = 0;

function dialogue(){

  // Le modulo par deux --> la valeur est pair ou impair 0 || 1
  if ( index%2 == 0 ) {
    var contexte = document.getElementById('character_02');
    var paroles = data.perso_1.texte;
  }else{
    var contexte = document.getElementById('character_01');
    var paroles = data.perso_0.texte;
  }
  if(index%3 == 0 && index ! == 0){
    var jerry = document.getElementById('character_01')
   jerry =  jerry.getElementsByTagName ('img')[0]
    console.log(jerry);

    var image2= data.perso_0.picture[1]
    // image2 = imag
    jerry.src = image2
  }
  else if (index %7 == 0 ){
    var jerry = document.getElementById('character_01')
   jerry =  jerry.getElementsByTagName ('img')[0]
    console.log(jerry);

  } {

  }
  var dom = contexte.getElementsByClassName('center'); //--> Renvoie un tableau
  dom[0].innerHTML = paroles[ index%3 ];
  index++;
}
