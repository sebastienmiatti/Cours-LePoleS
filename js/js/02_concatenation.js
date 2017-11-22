// alert(" Réveil toi! bordel")


/* ~~~~~~~~~~~~~~
 LA CONCATéNATION
 ~~~~~~~~~~~~~~~~ */

 var annee = 2017
 var futur = 3
 var calcul = annee + futur;
 console.log(calcul);
document.write(calcul + "<br>");

var mois = "7";
var calcul2 = annee + mois;
console.log(calcul2);
document.write(calcul2 + "<br>")

var DebutPhrase = "Aujourd'hui ";
var NbStagiaires = 12;
var SuitePhrase = " stagiaires";
var FinPhrase = "sont présents. ";

//-- Nous souhaitons afficher la phrase en un seul morceau avec la concaténation => à vos claviers !
var calcul3 = DebutPhrase + NbStagiaires + SuitePhrase + " " + FinPhrase;
console.log(calcul3);
document.write(calcul3 + "<br>")
