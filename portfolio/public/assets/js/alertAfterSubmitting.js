// On récupère le bouton scrollHome et on crée un élément p
let bgImg = document.getElementById("home");
let newPara = document.createElement("p");


// On crée une fonction qui va cacher le message d'alerte
function hiddenAlert() {
    bgImg.insertAdjacentElement('afterbegin', newPara).style.display = 'none';
}

// AJAX
// On récupère l'id du formulaire en lui attachant l'evenement Submit
document.getElementById("theForm").addEventListener("submit", function(e) {
    
    // On annule le comportement par défaut, à savoir ici le rechargement de la page apres soumission du form
    e.preventDefault();
    
    // On crée un objet FormData dans lequel on va lui ajouter les valeurs de chaque input du formulaire
    var data = new FormData();

    data.append("name", document.getElementById("name").value);
    data.append("email", document.getElementById("email").value);
    data.append("object", document.getElementById("object").value);
    data.append("message", document.getElementById("message").value);

    // On crée un objet XMLHttpRequest qui va nous permettre d'utiliser l'AJAX via une requete
    var xhr = new XMLHttpRequest();

    // Instancie une nouvelle requete. On va préciser la méthode et l'url cible
    xhr.open("POST", "../../mail.php");

    // Définit la fonction à appeler à la fin de l'AJAX. Cette fonction va scroller en haut de la page, afficher le message d'alert et le faire disparaitre apres 10 sec.
    xhr.onload = function () {

        bgImg.scrollIntoView("smooth");
        newPara.setAttribute("id", "alert");
        
        newPara.textContent = "Votre message a bien été envoyé !";
        
        bgImg.insertAdjacentElement('afterbegin', newPara);
        setTimeout(hiddenAlert, 10000);
    }

    // On envoie la requete au serveur
    xhr.send(data);

    return false;
    
});




