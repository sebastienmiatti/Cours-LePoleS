/*
On injecte du style CSS directement depuis le JS
*/
function changer_style(){
    var paragraphe = document.getElementById('parag1');
    paragraphe.style.color = "white";
    paragraphe.style.backgroundColor = "pink";
    paragraphe.style.border = "6px dotted silver";
    paragraphe.style.padding = "30px";
    paragraphe.style.width = "60%";
    paragraphe.style.margin = "0 auto";
}
