function validerEmail(email){
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}

function validerMotDePasse(password){
return password.length >= 6;
}

document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

let valide = true;

if(!validerEmail(email)){
document.getElementById("emailError").textContent="Email invalide";
valide=false;
}

if(!validerMotDePasse(password)){
document.getElementById("passError").textContent="Minimum 6 caractères";
valide=false;
}

if(valide){

localStorage.setItem("userEmail", email);

window.location.href="index.html";

}

});