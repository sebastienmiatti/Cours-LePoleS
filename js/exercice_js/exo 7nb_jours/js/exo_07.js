var mois = parseInt(prompt("Quel mois choississez-vous ", " saisissez un chiffre entre 1 et 12"));
    if (mois === 2)
    {
        alert('vous etes dans ce mois ou il fait froid! oui ce mois de février');
    }
        else if ((mois === 4) || (mois === 6) || (mois === 12))
        {
            alert('le mois numero ' + mois + ' Vous etes dans un mois de 30');
        }
            else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12))
            {
                alert('le mois numero ' + mois + ' Vous etes dans un mois de 31 jours');
            }
    else
    {
        alert('vous etes totalement perdu');
    }
