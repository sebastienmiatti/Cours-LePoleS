(function(){
    /*
    1-VARIABLES
    */
    // cible le bouton
    var bouton = document.querySelector(".c-hamburger");
    // cible le panneau glissant
    var panneau = document.querySelector("#menu-panel");

    /*
    2-FONCTION
    */
    // au click sur le bouton 2 actions :
    //  animation du menu (les barres => la croix)
    // glissement du panneau vers la droite
    bouton.addEventListener("click", function(e){
        e.preventDefault();
        this.classList.toggle("is-active");

    //on ajoute la class .show à ma div#menu-panal
    //en Css on applique un transform: translateX(0)
    // on utilise l'écriture ternaire '? :' <=> 'if else'
    (this.classList.contains("is-active") === true) ?
        panneau.classList.toggle("show"):
        panneau.classList.remove("show");

});

})();
