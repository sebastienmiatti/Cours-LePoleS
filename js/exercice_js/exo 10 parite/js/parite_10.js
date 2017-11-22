// alert('choco')


//     for (var i = 1; i <= 10; i++)
//     {
//         if (i % 2 === 0)
//         {
//         document.write(i + " est pair");
//     }
//
// else{
//          document.write(i + "est impair");
//     }
// }


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// var chiffre = parseInt(prompt('quel est votre chiffre ?'));
// var i = (chiffre + 10);
// while (chiffre <= i)
// {
//     if(chiffre % 2 === 0)
//     {
//         document.write("<h4>" + chiffre + "est pair</h4>");
//     }
// else
// {
// document.write("<h4>" + chiffre + "est impair</h4>");
// }
//     chiffre++;
//     }

/* Avec FOR */



var nbUser = parseInt(prompt('quel est votre chiffre ?'));
var nbUserMax = (nbUser + 10);
for (var i = nbUser; i <= nbUserMax; i++)
{
    if (i % 2 === 0)
    {
    document.write(i + " est pair ");
}

else{
     document.write(i + " est impair ");
 }
 }
