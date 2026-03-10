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
const prenom=$("#prenom").val();
const nom=$("#nom").val();
const titre=$("#titre").val();
const resume=$("#resume").val();
const email=$("#email").val();
const telephone=$("#telephone").val();
const adresse=$("#adresse").val();
const date=$("#date").val();
const nationalité=$("#nationalité").val();
const photoFile=$("#photoInput")[0].files[0];

function cleanList(selector){

return $(selector).map(function(){

return $(this).contents().first().text().trim();

}).get();

}

const profil=cleanList("#profilList li");
const parcours=cleanList("#parcoursList li");
const experiences=cleanList("#experienceList li");
const competences=cleanList("#competenceList li");
const centres=cleanList("#centreList li");
const langues=cleanList("#langueList li");
const qualites=cleanList("#qualiteList li");

function saveCV(photoBase64){

localStorage.setItem("cvData",JSON.stringify({

prenom,
nom,
titre,
resume,
email,
telephone,
adresse,
date,
nationalité,
profil,
parcours,
experiences,
competences,
centres,
langues,
qualites,
template:templateChoisi,
photo:photoBase64

}));

window.location.href="cv.html";

}

if(photoFile){

const reader=new FileReader();

reader.onload=function(e){

saveCV(e.target.result);

}

reader.readAsDataURL(photoFile);

}else{

saveCV(null);

}

});

});

