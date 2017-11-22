// // alert("il y a du monde")
//
//
// //---L' OPéRATEUR DE COMPARAISON == simplifié ' égal à'
//
// // il permet de vérifier que les VALEURS de 2 Variables sont identique.
//
// // var nb1 = 123;
// // var nb2 = "123";
// // console.log(nb1 == nb2); //retourne TRUE
// //
// // // l'opérateur de comparaison === signifie strictement 'égal à'
// // // il permet de vérifier la valeur et le type
// // console.log(nb1 === nb2); //retourne FALSE
// //
// // //--l'opérateur != signifie ' different de ... en VALEUR'
// // console.log(nb1 != nb2); //retourne FALSE
// //
// // //-- l'opérateur !== signifie 'strictement différent de ... en VALEUR et en TYPE'
// // console.log(nb1 !== nb2); //retourne TRUE


// var prenom, monAge;
// prenom = "sebastien";
// monAge = 999;
//
// //1-- DEMANDER son prenom a l'utilisateur avec un prompt
//
// var prenomLogin = prompt("Quel est votre prénom?");
//
// //2-- je vérifie si le prenom sois (prenomLogin) correspond à celui en base de donnée (prenom)
//
// if (prenomLogin === prenom)
// {
//
//     //2a. Si tout est ok, je continue la vérification avec l'âge
//     //2a1. Demande à mon utilisateur son âge via un prompt
//
//     var ageLogin = parseInt(prompt("votre âge ?"));
//
//     //2a2. Demande a mon utilisateur son age via un PROMPT
//     if (ageLogin === monAge)
//     {
//         alert("Bienvenu " + prenomLogin);
//     }
//     else
//     {
//         alert("Erreur d'âge");
//     }}
//     else
//     {
//     alert("Attention, prénom non reconnu");
//     }




    var prenom, monAge, mdp;
    prenom = "sebastien";
    monAge = 30;
    mdp = "bibi";

    var prenomLogin = prompt("Quel est votre prénom");

    if (prenomLogin === prenom)

        {
        var ageLogin = parseInt(prompt("votre âge ?"));
        if (ageLogin === monAge)
        {
            var mdpLogin = prompt("Le mot de passe :")
            if(mdpLogin === mdp){
                alert("Bienvenu " + prenomLogin);
                } else {alert('pb de mot de passe')};

        }
            else
        {
            alert("Erreur d'âge");
        }}
        else
        {
        alert("Attention, prénom non reconnu");
        }
