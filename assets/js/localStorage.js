function cleanList(selector){

return $(selector).map(function(){

return $(this).contents().first().text().trim();

}).get();

}

function submitCV(templateChoisi){

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

}


