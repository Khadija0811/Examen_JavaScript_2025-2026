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
function validerEmail(email){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById("email").addEventListener("blur",function(){
    let email=this.value;
    let erreur=document.getElementById("emailError");

    if(!validerEmail(email)){
        erreur.textContent="Adresse email invalide";
        erreur.style.display="inline";
    }else{
        erreur.textContent="";
        erreur.style.display="none";
    }
});

function validerTelephone(numero){
    const regex=/^(70|75|76|77|78)[0-9]{7}$/;
    return regex.test(numero);
}

document.getElementById("telephone").addEventListener("blur",function(){
    let tel=this.value;
    let erreur=document.getElementById("telError");

    if(!validerTelephone(tel)){
        erreur.textContent="Numéro sénégalais invalide";
        erreur.style.display="inline";
    }else{
        erreur.textContent="";
        erreur.style.display="none";
    }
});


function verifierChamps(){

    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;

    if(nom==="" || prenom===""){
        alert("Veuillez remplir tous les champs obligatoires");
        return false;
    }

    return true;
}