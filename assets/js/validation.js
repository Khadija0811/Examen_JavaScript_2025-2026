$(document).ready(function(){

function gestionListe(inputId,buttonId,listId){

$(buttonId).on("click",function(){

let valeur=$(inputId).val().trim();

if(valeur!==""){

$(listId).append("<li>"+valeur+" <button type='button' class='delete'>Supprimer</button></li>");

$(inputId).val("");

}

});

$(listId).on("click",".delete",function(){

$(this).parent().remove();

});

}

gestionListe("#profilInput","#addProfil","#profilList");
gestionListe("#parcoursInput","#addParcours","#parcoursList");
gestionListe("#experienceInput","#addExperience","#experienceList");
gestionListe("#competenceInput","#addCompetence","#competenceList");
gestionListe("#centreInput","#addCentre","#centreList");
gestionListe("#langueInput","#addLangue","#langueList");
gestionListe("#qualiteInput","#addQualite","#qualiteList");

let templateChoisi="";

$(".templateCard").on("click",function(){

$(".templateCard").removeClass("selected");

$(this).addClass("selected");

templateChoisi=$(this).data("template");

});

$("#cvForm").on("submit",function(e){

e.preventDefault();

if(templateChoisi===""){
alert("Veuillez choisir un modèle !");
return;
}

submitCV(templateChoisi);

});

});