    //Syntaxe de base


// commentaire sur une ligne

    /*
    Ici, je fais un commentaire sur
    plusieurs lignes
    */


    // -- 1 : Déclarer une variable en JS

    //var Prenom; var nom;


    //-- 2 : Affecter une valeur à une variable

    //Prenom = "Sébastien";

    //var Prenom = "Sébastien";


    //-- 3 : Une instruction se termine TJR avec un ';' il est donc possible d'écrire plusieurs instructions sur une meme ligne.

    //inst_1;
    //inst_1; inst_3;


    //-- 4 : Afficher une boite de dialogue ( 2 façons)

    // alert("super, tu es arrivé sur mon site!");
    // windows.alert("super, tu es arrivé sur mon site!")


    //-- 5 : Afficher dans la console (ici, la valeur de ma variable Prenom)
    //console.log(Prenom);

    //-- 6 : afficher dans la page web
    //document.write("A la pause on aura des haribo pik !");

    //-- 7 : Demander a l'utilisateur une valeur (2 façons)
    // window.prompt("question: on est quel jour?","jour de la semaine"); prompt("question: on est quel jour?","jour de la semaine");

    //-- : et pour manipuler cette valeur , je n'oublie pas de la stocker
    //var jour = prompt("question: on est quel jour?", "jour de la semaine");
    //console.log(jour);

    //-- 8 : Attention /!\ le Js est sensible à la casse ('case sensitive')
    // mavariable =/= maVariable =/= ma_Variable
    //                 camel case / snake case

    //-- 9 : une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphnumeriques, et ne peut pas être un mot réservé (var, for... des éléments natifs du langage JS)

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

    //-- 10 : une variable peut être déclarée de façon explicite :
    //var fruit = "fraise";

      //ou implicite :
     //fruit = "fraise";
      //haribo = "tagada";

      /*-----------------------~~~~~~~~~~~~~~~~ LES TYPES DE VARIABLES ~~~~~~~~~~~~~~-------------------------------
      --------------------------------------------------------------------------------------------------------------------------*/

      //-- 1. Chaine de caractères (string)
      var vacances = "2017";
      var destination = "Australie";

      //-- 2. Un nombre entier (integer ou int)
      var annee = 2017;

      //-- 3. Un nombre decimal (float)
      var nombre_a_virgule = -5.32;

      //-- 4. un booléen (boolean = vrai/faux = true/false)
      var unBooleen = false; //-- true

      //-- 5. LES CONSTANTES
      /* La déclaration conts. permet de créer une constante accesible uniquement en lecture. Contrairement à une variable sa valeur ne
      peut plus e^tre modifiée par réaffectation plus bas dans le code.
      une constante ne peut pas être déclarée à nouveau dans le même scrpit.*/

      //-- par convention les constantes sont en majuscules
      const PAYS = "france";

      //-- 6. typeof permet de connaitre le type de ma variable
      console.log(vacances);
      console.log(typeof vacances);
      console.log(annee);
      console.log(typeof annee);

      // En JS les Variables et les constantes sont auto-typées
      //-- on peut convertir une variable de type NUMBER en STRING et aussi STRING en NUMBER avec les fonctions natives de JS
      //-- la fonction parseInt() renvoie un entier à partir d'une chaine de caractères.
      var unChiffre = "12";
      console.log(unChiffre);
      console.log(typeof unChiffre);

      //STRING -> NUMBER
      unChiffre = parseInt(unChiffre);
      console.log(unChiffre);
      console.log(typeof unChiffre);

      //je re-affecte une valeur
      unChiffre = "12.22";
      console.log(unChiffre);
      console.log(typeof unChiffre);

      // STRING -> float
      unChiffre = parseFloat(unChiffre);
      console.log(unChiffre);
      console.log(typeof unChiffre);

      // NUMBER -> STRING
      nar nb_en_lettres = 258;
      console.log(nb_en_lettres);
      console.log(typeof nb_en_lettres);

      var nb_en_lettres = nb_en_lettres.toString();
