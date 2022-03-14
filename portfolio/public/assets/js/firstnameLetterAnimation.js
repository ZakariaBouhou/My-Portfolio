    
    var firstname = document.getElementById("firstname");
        firstname.innerHTML = firstname.textContent.replace(/\S/g, "<h1 class='eachFirstnameLetter'>$&</h1>");

       function animation () { anime.timeline({loop: false})
            .add({
            targets: '.eachFirstnameLetter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
            }).add({
            targets: '.eachFirstnameLetter',
            // Mettre le loop à false permet d'éviter que l'animations e repète. 
            // L'opacité à 0 permet de laisser les éléments affichés apres la fin de l'animation
            // opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
            });
        }

    document.addEventListener('DOMContentLoaded', animation());


