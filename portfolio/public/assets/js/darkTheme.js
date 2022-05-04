let menu        = document.querySelector('nav'),
bgImg           = document.querySelector('.bg-img'), 
theme           = document.querySelector('#theme'), 
texteTheme      = document.querySelector('#theme > span'), 
description     = document.querySelector('.description'), 
skills          = document.querySelector('.skills'), 
effacer         = document.querySelector('input[type=button]'), 
envoyer         = document.querySelector('input[type=submit]'), 
projects        = document.querySelector('.projects'), 
contact         = document.querySelector('.contact'), 
legals          = document.querySelector('.legals'), 
liens           = document.querySelectorAll(".itemsProject > p > a");
logosSymfony    = document.querySelectorAll('.iconSkills');


function modeSombre() {

    let premiersElementsAvecLeMemeRGB = [menu, description, legals];
    
    premiersElementsAvecLeMemeRGB.forEach(element => {
        element.style.backgroundColor = 'rgb(21, 24, 27)';
    });
    
    let deuxiemesElementsAvecLeMemeRGB = [skills, projects, contact];
    
    deuxiemesElementsAvecLeMemeRGB.forEach(element => {
        element.style.backgroundColor = 'rgb(15, 32, 48)';
    });

    document.body.style.color = 'white';

    bgImg.style.backgroundImage = "url(../assets/images/landingDark.jpg)";
    
    liens.forEach(lien => {
        lien.style.color = 'rgb(23, 119, 209)';
    });

    document.querySelector(".content-description > p > a").style.color = 'rgb(23, 119, 209)';
    
    effacer.style.backgroundColor = '#581022';
    envoyer.style.backgroundColor = '#12362f';
    
    document.querySelector('.fas').className = 'fas fa-sun';
    texteTheme.textContent = 'Thème clair';

    logosSymfony.forEach(logo => {

        if(logo.currentSrc == 'http://localhost:8080/assets/images/logo/symfony.png') {
            logo.setAttribute('src', 'http://localhost:8080/assets/images/logo/symfony2.png');
        }  
    });
    
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

        logosSymfony.forEach(logo => {

            if(logo.currentSrc == 'http://localhost:8080/assets/images/logo/symfony2.png') {
                logo.setAttribute('src', 'http://localhost:8080/assets/images/logo/symfony.png');
            }  
        });

        texteTheme.textContent = 'Thème sombre';

        document.querySelector('.fas').className = 'fas fa-moon';

        localStorage.setItem('theme', 'clair');

        }

    else {
        modeSombre();
    }

});
        
        
    