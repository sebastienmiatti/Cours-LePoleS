// alert('turn that for what')
var heure = parseInt(prompt('Quel heure est-il? (heure)'));
var minutes = parseInt(prompt('Quel heure est-il? (minutes)'));
var secondes = parseInt(prompt('Quel heure est-il? (secondes)'));

//on teste les cas d'erreur.
if ((heure >= 0) && (heure <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <=59))
{
    secondes++;

    //on incremente les secondes.
    if (secondes === 60 )
    {
        secondes = 0; minutes++;

        // on met des secondes à 0 et passe à la minute suivante
        if (minutes === 60 )
        {
             minutes = 0;  heure++;

            // on met les minutes à 0 et passe a l'heure suivante
            if (heure === 24 )
            {
                heure = 0;

            // l'heure suivante est minuit
            }
        }
    }
    //affichage de l'heure
    document.write("<h3>Dans une seconde il sera" + heure + "h " + minutes + "m " + secondes + "s</h3>.");
}
//Heure incorrecte
else{ document.write('tu es a côté de la plaque')};
