// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simuler l'envoi du formulaire
    document.getElementById('messageSent').style.display = 'block';

    // Effacer les champs après envoi
    document.getElementById('contactForm').reset();
});
