/*
l'opérateur ET : && ou and
*/

// Si je cumule 2 conditions :
// => prenom === prenomLogin
// => monAge === ageLogin
    // pour que les 2 correspondent pour être validés il faut les associer
    if((prenomLogin === prenom) && (ageLogin === monAge))
    {/*code*/}
    // je ne rentre dans mon code que si les deux conditions sont vraies

    if((a) && (b)) {...}
  => si A est FAUX et B est VRAI => FAUX
     si A est FAUX et B est VRAI => FAUX
     si A et B sont FAUX => FAUX
     si A et B sont VRAI => VRAI


/*
l'opérateur OU : || ou OR (| pipe => alt gr + 6)
*/
    if((C) || (D)) {...}
   => si C est FAUX et D est VRAI => VRAI
     si C est FAUX et D est VRAI => VRAI
     si C et D sont FAUX => FAUX
     si C et D sont VRAI => VRAI

/*
l'opérateur "!" signifie : le contraire de
*/
    var utilisateurLog = true;
    if(!utilisateurLog){...}

        //si l'utilisateur n'est pas loggé.
        // ce qui revien a écrire
        if(utilisateurLog == false)
// si l'utilisateur n'est pas loggé.
