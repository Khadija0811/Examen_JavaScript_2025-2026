const data = JSON.parse(localStorage.getItem("cvData"));

if(!data){
document.getElementById("cvContainer").innerHTML="<p>Aucune donnée trouvée.</p>";
throw new Error("Pas de données CV");
}

const templates={

moderne:`

<div class="cv modern">

<div class="left">

<img src="" alt="Photo">

<h1 class="nom"></h1>

<h2 class="titre"></h2>

<div class="infos"></div>

<h2>Résumé</h2>
<p class="resume"></p>

<h2>Langues</h2>
<ul class="langues"></ul>

</div>

<div class="right">

<h2>Compétences</h2>
<ul class="competences"></ul>

<h2>Expériences</h2>
<ul class="experiences"></ul>

<h2>Formations</h2>
<ul class="formations"></ul>

<h2>Centres d'intérêt</h2>
<ul class="centres"></ul>

<h2>Qualités</h2>
<ul class="qualites"></ul>

</div>

</div>
`,

minimal:`

<div class="cv minimal">

<div class="header">

<img src="" alt="Photo">

<div>
<h1 class="nom"></h1>

<h2 class="titre"></h2>
<div class="infos"></div>
</div>

</div>

<div class="content">

<div class="left">

<h2>Résumé</h2>
<p class="resume"></p>

<h2>Langues</h2>
<ul class="langues"></ul>

<h2>Qualités</h2>
<ul class="qualites"></ul>

<h2>Centres d'intérêt</h2>
<ul class="centres"></ul>

</div>

<div class="right">

<h2>Compétences</h2>
<ul class="competences"></ul>

<h2>Expérience Professionnelle</h2>
<ul class="experiences"></ul>

<h2>Formation</h2>
<ul class="formations"></ul>

</div>

</div>

</div>
`,

elegant:`

<div class="cv elegant">

<div class="header">

<img src="" alt="Photo">

<div>
<h1 class="nom"></h1>
<h2 class="titre"></h2>
<div class="infos"></div>
</div>

</div>

<div class="main">

<div class="left">
<h2>Résumé</h2>
<p class="resume"></p>
<h2>Compétences</h2>
<ul class="competences"></ul>
<h2>Expérience</h2>
<ul class="experiences"></ul>
</div>

<div class="right">
<h2>Formation</h2>
<ul class="formations"></ul>

<h2>Langues</h2>
<ul class="langues"></ul>

<h2>Qualités</h2>
<ul class="qualites"></ul>

<h2>Centres d'intérêt</h2>
<ul class="centres"></ul>

</div>

</div>

</div>
`

};

const container=document.getElementById("cvContainer");

container.innerHTML=templates[data.template] || templates.moderne;

const cv=container.querySelector(".cv");

const img=cv.querySelector("img");

if(data.photo && img){
img.src=data.photo;
}else if(img){
img.style.display="none";
}

const nom=cv.querySelector(".nom");
if(nom) nom.textContent = data.prenom + " " + data.nom;

const titre=cv.querySelector(".titre");
if(titre) titre.textContent = data.titre || "";

const resume=cv.querySelector(".resume");
if(resume) resume.textContent = data.resume || "";

const infos=cv.querySelector(".infos");

if(infos){
infos.innerHTML=`
<p class="info-item">📧 ${data.email || ""}</p>
<p class="info-item">📞 ${data.telephone || ""}</p>
<p class="info-item">📍 ${data.adresse || ""}</p>
<p class="info-item">🎂 ${data.date || ""}</p>
<p class="info-item">🌍 ${data.nationalité || ""}</p>
`;
}

function remplirListe(classe,dataArray){

const ul=cv.querySelector("."+classe);

if(!ul || !dataArray) return;

ul.innerHTML=dataArray.map(item=>`<li>${item}</li>`).join("");

}

remplirListe("profil",data.profil);
remplirListe("experiences",data.experiences);
remplirListe("formations",data.parcours);
remplirListe("competences",data.competences);
remplirListe("centres",data.centres);
remplirListe("langues",data.langues);
remplirListe("qualites",data.qualites);

document.getElementById("exportPDF").addEventListener("click",function(){

const opt={
margin:0,
filename:`cv-${data.template}.pdf`,
image:{type:'jpeg',quality:1},
html2canvas:{scale:1},
jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
};

html2pdf().set(opt).from(cv).save();

});