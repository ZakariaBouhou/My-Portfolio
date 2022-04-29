let menu    = document.querySelector('nav'),
bgImg       = document.querySelector('.bg-img'), 
theme       = document.querySelector('#theme'), 
texteTheme  = document.querySelector('#theme > span'), 
description = document.querySelector('.description'), 
skills      = document.querySelector('.skills'), 
effacer     = document.querySelector('input[type=button]'), 
envoyer     = document.querySelector('input[type=submit]'), 
projects    = document.querySelector('.projects'), 
contact     = document.querySelector('.contact'), 
legals      = document.querySelector('.legals'), 
liens       = document.querySelectorAll(".itemsProject > p > a");

function modeSombre() {

    document.body.style.color = 'white';

    menu.style.backgroundColor = 'rgb(21, 24, 27)';

    bgImg.style.backgroundImage = "url(../assets/images/landingDark.jpg)";
    
    description.style.backgroundColor = 'rgb(21, 24, 27)';
    
    liens.forEach(lien => {
        lien.style.color = 'rgb(23, 119, 209)';
    });

    document.querySelector(".content-description > p > a").style.color = 'rgb(23, 119, 209)';
    
    skills.style.backgroundColor = 'rgb(15, 32, 48)';
    
    projects.style.backgroundColor = 'rgb(15, 32, 48)';
    
    effacer.style.backgroundColor = '#581022';
    envoyer.style.backgroundColor = '#12362f';
    
    contact.style.backgroundColor = 'rgb(15, 32, 48)';
    
    legals.style.backgroundColor = 'rgb(21, 24, 27)';
    
    document.querySelector('.fas').className = 'fas fa-sun';
    texteTheme.textContent = 'Thème clair';
    
    localStorage.setItem('theme', 'sombre');
}

if(localStorage.getItem('theme')) {
    
    if(localStorage.getItem('theme') == 'sombre') {        
        modeSombre();
    }
    
} 

theme.addEventListener('click', () => {
    
    if(document.body.style.color == 'white') { 

        let elements = [
            menu, document.body, bgImg, description, skills, projects, effacer, envoyer, contact, legals
        ];

        elements.forEach(element => {
            element.removeAttribute('style');
        });

        liens.forEach(lien => {
            lien.removeAttribute('style');
        });

        texteTheme.textContent = 'Thème sombre';

        document.querySelector('.fas').className = 'fas fa-moon';

        localStorage.setItem('theme', 'clair');

        }

    else {
        modeSombre();
    }

});
        
        
    