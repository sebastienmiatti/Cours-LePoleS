// alert('rouge')

var i = parseFloat(prompt('Entrez votre note'));
        if(i < 10){
        alert("vous êtes recalé avec " + i + " de moyenne, bye bye");
}
            else if ((i >= 10) && (i < 12)) {
                alert("Vous etes recu avec pile " + i);
    }
                else if ((i >= 12) && (i<=20)) {
                    alert('vous avez votre diplome avec ' + i + ', vous obtenez la mention.' );
                }
        else {
                alert('Mauvaise Saisie, tire toi de là');
            }
