var jourDeLaSemaine = prompt('Quel jours sommes-nous ?');
if( jourDeLaSemaine === "lundi")
{
    alert("Bienvenu, nous sommes bien " + jourDeLaSemaine + " demain on sera mardi");
}
else if (jourDeLaSemaine === "mardi")
{
    alert("Bienvenu, nous sommes bien " + jourDeLaSemaine +" demain on sera mercredi");
}
else if (jourDeLaSemaine === "mercredi")
{
    alert("Bienvenu, nous sommes bien " + jourDeLaSemaine +" demain on sera jeudi");
}
else if (jourDeLaSemaine === "jeudi")
{
    alert("Bienvenu, nous sommes bien " + jourDeLaSemaine +" demain on sera vendredi");
}
else if (jourDeLaSemaine === "vendredi")
{
    alert("Bienvenu, nous sommes bien " + jourDeLaSemaine +" demain on sera samedi");
}
else if (jourDeLaSemaine === "samedi")
{
    alert("Bienvenu, nous sommes bien " + jourDeLaSemaine +" demain on sera dimanche");
}
else if (jourDeLaSemaine === "dimanche")
{
    alert("Bienvenu, nous sommes bien " + jourDeLaSemaine +" demain on sera lundi");
}
else
{
    alert("Merci, de recommencer la saisie, Jour inconnu");
}
