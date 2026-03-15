# Projet JavaScript 2025-2026

## 📌 Présentation
Ce projet est un site web statique permettant de gérer une connexion simple et la création d’un CV via des formulaires. Il utilise HTML, CSS et JavaScript modulaires avec localStorage pour simuler l’authentification et stocker les données utilisateur.

Le site comporte les pages suivantes :
- `index.html` : page d’accueil
- `login.html` : page de connexion
- `formulaire.html` : saisie des informations du CV
- `cv.html` : affichage final du CV

---

## 🏗️ Architecture du projet

### Structure des dossiers
Examen_JavaScript_2025-2026/
│
├── index.html # page d'accueil
├── login.html # page de connexion
├── formulaire.html # formulaire du CV
├── cv.html # page CV
├── assets/
│ ├── css/
│ │ ├── style.css # styles généraux
│ │ └── accueil.css # styles page d'accueil
│ └── js/
│ ├── login.js # logique connexion
│ ├── localStorage.js# gestion état connecté
│ ├── validation.js # validations de formulaire
│ └── template.js # templates dynamiques
└── README.md


### Flow utilisateur
1. **index.html** → page d’accueil  
2. **login.html** → page de connexion  
3. **formulaire.html** → saisie des informations du CV  
4. **cv.html** → affichage final du CV  
5. Déconnexion → retour automatique à `index.html`

---

## ⚙️ Choix techniques

### Organisation des fichiers
- Séparation claire **HTML / CSS / JS** pour faciliter la lecture et la maintenance.
- JS modulaire : chaque fonctionnalité importante a son propre fichier.
- CSS séparé pour styles globaux et spécifiques à certaines pages.

### Stockage et authentification
- Utilisation de `localStorage` pour simuler l’état connecté et mémoriser les informations du CV.
- Avantage : simple à mettre en place pour un projet d’examen sans serveur.
- Limite : non sécurisé pour un projet réel.

### Validation des données
- Validation côté client via `validation.js` pour garantir la forme des données avant traitement.
- Messages d’erreur clairs pour guider l’utilisateur.

---

## 👥 Répartition des tâches
- Khadija Gueye : Création des pages `index.html`, `accueil.html`, `cv.html`, gestion des templates dynamiques (`template.js`), déploiement sur Netlify et gestion de la maquette Figma, rédaction du README.  
- Magui : Gestion des formulaires et validation côté client (`validation.js`), logique de connexion (`login.js`), gestion de l’état connecté (`localStorage.js`) et styles CSS (`style.css` et `accueil.css`).  

---

## 🧩 Difficultés rencontrées
- Gestion du flow **login → formulaire → CV** sans serveur.  
- Validation des formulaires et messages d’erreur clairs.  
- Gestion du **localStorage** pour simuler la connexion.  
- Navigation sécurisée pour empêcher l’accès aux pages privées sans login.

---

## 🚀 Comment lancer le projet
1. Ouvrir le projet dans un navigateur ou via **Live Server**.  
2. Accéder à `index.html` pour commencer par la page d’accueil.  
3. Cliquer sur “Se connecter” pour aller vers `login.html`.  
4. Remplir le formulaire pour créer le CV (`formulaire.html`).  
5. Vérifier le CV final sur `cv.html`.  
6. Déconnexion supprime l’état connecté et redirige vers `index.html`.

---

## 🔗 Liens utiles
- Dépôt GitHub : [https://github.com/Khadija0811/Examen_JavaScript_2025-2026](https://github.com/Khadija0811/Examen_JavaScript_2025-2026)  
- Site déployé : [https://examenjavascriptt.netlify.app/](https://examenjavascriptt.netlify.app/)  
- Maquette Figma : [https://www.figma.com/make/ajs9ygk7Cfd2F0gSmNyrNU/CV-Generator-App?t=BYN22cdVICjCcIAo-1&authuser=0]  
- Présentation YouTube (non répertoriée) : [(https://youtu.be/xzi38BZKWXk?si=lwKjn1v0pzDNq2_O)]  

---

*Ce README est autonome et contient toutes les informations nécessaires pour comprendre, tester et évaluer le projet.*
