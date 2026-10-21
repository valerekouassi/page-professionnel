// 1. Sélection des éléments
const modeBtn = document.getElementById("modeBtn");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const voirPlusBtn = document.getElementById("voirPlusBtn");
const description = document.getElementById("description");
const contactForm = document.getElementById("contactForm");
const resultat = document.getElementById("resultat");

// 2. Activer et désactiver le mode sombre
modeBtn.addEventListener("click", function () {

    document.body.classList.toggle("sombre");

    if (document.body.classList.contains("sombre")) {
        modeBtn.textContent = "Mode clair";
    } else {
        modeBtn.textContent = "Mode sombre";
    }

});

// 3. Ouvrir et fermer le menu mobile
menuBtn.addEventListener("click", function () {

    menu.classList.toggle("ouvert");

});

// 4. Afficher ou masquer la description
voirPlusBtn.addEventListener("click", function () {

    description.hidden = !description.hidden;

    if (description.hidden) {
        voirPlusBtn.textContent = "En savoir plus";
    } else {
        voirPlusBtn.textContent = "Voir moins";
    }

});

// 5. Vérifier le formulaire
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (nom === "" || email === "" || message === "") {

        resultat.textContent = "Veuillez remplir tous les champs.";
        resultat.style.color = "red";

    } else {

        resultat.textContent =
            "Merci " + nom + " ! Votre formulaire est valide.";

        resultat.style.color = "green";

        contactForm.reset();

    }

});