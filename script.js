let form = document.getElementById("cvForm");

form.addEventListener("submit", function(e){
    e.preventDefault();
    genererCV();
});

function genererCV(){
    let resutat = document.getElementById("cvResultat");
}


$(document).ready(function(){

    function gestionListe(inputId, buttonId, listId){

        $(buttonId).on("click", function(){

            let valeur = $(inputId).val().trim();

            if(valeur !== ""){

                $(listId).append(
                    "<li>" + valeur + 
                    " <button type='button' class='delete'>Supprimer</button></li>"
                );

                $(inputId).val("");
            }
        });

        $(listId).on("click", ".delete", function(){
            $(this).parent().remove();
        });
    }

    // Appels pour chaque section
    gestionListe("#parcoursInput", "#addParcours", "#parcoursList");
    gestionListe("#experienceInput", "#addExperience" ,"#experienceList");
    gestionListe("#competenceInput", "#addCompetence", "#competenceList");
    gestionListe("#centreInput", "#addCentre", "#centreList");
    gestionListe("#profilInput", "#addProfil", "#profilList");

});

   $("#cvForm").on("submit", function(e){
        e.preventDefault();

        const nom = $("#nom").val();
        const email = $("#email").val();
        const telephone = $("#telephone").val();
        const adresse = $("#adresse").val();
        const date = $("#date").val();
        const nationalité = $("#nationalité").val();

        function cleanList(selector){
            return $(selector).map(function(){
                return $(this).contents().first().text().trim();
            }).get();
        }

        const profil = cleanList("#profilList li");
        const parcours = cleanList("#parcoursList li");
        const experiences = cleanList("#experienceList li");
        const competences = cleanList("#competenceList li");
        const centres = cleanList("#centreList li");

        localStorage.setItem("cvData", JSON.stringify({
            nom,
            email,
            telephone,
            adresse,
            date,
            nationalité,
            profil,
            parcours,
            experiences,
            competences,
            centres
        }));

        window.location.href = "cv.html";
});