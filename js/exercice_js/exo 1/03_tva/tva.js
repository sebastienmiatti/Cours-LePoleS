var horsTaxe= prompt('prix HT : ');
console.log("le prix TTC est de : " + (horsTaxe * 1.2));
var ttc= horsTaxe + (horsTaxe * 0.2);
document.write("<h3>Résultat<br> Le prix TTC est de : " + (horsTaxe * 1.2) + '€.</h3>');
