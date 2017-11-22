// // alert('mamy')
//
//
//
// var nombre1 = parseInt(prompt("quel est votre 1er nombre?"));
// var nombre2 = parseInt(prompt("quel est votre 2nd nombre?"));
//
//       if(nombre1 < nombre2) {
//       document.write(nombre1 + " < " +  nombre2);}
//
//       else if( nombre1 > nombre2 ) {
//       document.write(nombre1  + " > " +  nombre2);}
//
//       else {
//                 document.write(nombre1  + " = " +  nombre2);}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var nombre1 = parseInt(prompt("quel est votre 1er nombre?"));
var nombre2 = parseInt(prompt("quel est votre 2nd nombre?"));
if ( (!isNaN(nombre1)) && (!isNaN(nombre2)) ) {
      if(nombre1 < nombre2) {
      document.write(nombre1 + " < " +  nombre2);}

      else if( nombre1 > nombre2 ) {
      document.write(nombre1  + " > " +  nombre2);}

      else {
                document.write(nombre1  + " = " +  nombre2);
            }

          } else {
                alert("vous n'avez pas saisi de numéro");
          }
