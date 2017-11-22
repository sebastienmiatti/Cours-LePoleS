// demande à l'utilisateur le nombre d'étages du sapin
var taille = prompt("choisis le nombre d'étages du sapin");


    //on met les étages du sapin
    for (var etage = 1; etage <= taille; etage++){
        //1- pour chaque étage mon compteur est égal à étage + 1
        for(var i = 0; i < etage + 3; i++){
            //2- pour chaques ligne j'ai => ((etage + ligne)*2)-1 étoiles
            for(var nb_etoile = 1; nb_etoile <=((etage + i)*2)-1; nb_etoile++){
                document.getElementById("sapin").innerHTML += '*';
            } // fin nombre d'étoiles par lignes
            document.getElementById("sapin").innerHTML += '<br>';
        } // fin lignes
    } // fin étages

    // on affiche le pied qui dépend du nombre d'étages du sapin
    for(var pied = 1; pied <= taille; pied++){
        document.getElementById('sapin').innerHTML += '|';
        document.getElementById('sapin').innerHTML += '<br>'};
