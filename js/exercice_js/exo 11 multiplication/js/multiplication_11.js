
// var choix = parseInt(prompt('choisis un nombre'));
// for (var i= 1; i <= 10; i++ )
// {
//     var res = choix * i;
//     document.write(choix + " * " + i + " = " + res + "<br>");
// }



var choix = parseInt(prompt('choisis un nombre'));
if ((choix >= 2) && (choix <= 9)){
    for (var i= 1; i <= 10; i++ )
{
    var res = choix * i;
    document.write(choix + " * " + i + " = " + res + "<br>");
}
} else
{
 document.write(' mauvaise valeurs rentre chez toi');
}
