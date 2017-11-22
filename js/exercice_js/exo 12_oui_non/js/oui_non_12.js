// // alert('choco')
// var rep = prompt('oui ou non ?');
//
// while ((rep === 'oui')(rep === 'non'))
// {
//     document.write(' t nul ');
// }else
// {
//     (prompt('alors tu te decide'));
// }


var dismoi = "";
var i = 0;
while ((dismoi !== 'oui') && (dismoi !== 'non'))
{
    dismoi = prompt('Alors on joue au Ni oui Ni non ?');
    document.write(dismoi + ' pour la ' + i + 'fois, dis moi oui ou non! <br>');
    i++;
}
document.write("<h1 style='background-color:cyan;text-align:center;'>fini ;-) !</h1>");
