// Display menu after click on burger menu
import * as variables from './variables.js';
import {burgerClicked, navbarDesktop, navbarMobile, displayHomeWrapper, toHideAllScreen, scrollAfterClickOnFirst2ItemsMenu, cloneSendButton, animationElementsWithObserver} from './functions.js';

document.addEventListener('DOMContentLoaded', () => {

    variables.divContainer.className = 'containerMenu';
    
    // --- when burger is clicked --- \\
    burgerClicked();
    
    // --- Navbar Desktop --- \\
    
    navbarDesktop();
    
    // --- NavBar Mobile --- \\
    
    navbarMobile();

    // --- NavBar HomeWrapper --- \\
    displayHomeWrapper();

    // --- Mobile : To Hide all screen --- \\
    toHideAllScreen();

    scrollAfterClickOnFirst2ItemsMenu();
    
    cloneSendButton();
    
    animationElementsWithObserver();
    
    console.log(localStorage);
    
    
    let head = document.getElementsByTagName('HEAD')[0];
    let turnOn = false,
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/dark-theme.css';
    link.id = 'dark';
    
    if(localStorage.getItem('theme')) {
    
        if(localStorage.getItem('theme') == 'dark') {        
            head.appendChild(link);
            variables.pictureDarkTheme.childNodes[3].src = 'assets/images/photos/photo-darktheme.png';
            console.log(variables.pictureDarkTheme.childNodes[1].srcset = 'assets/images/photos/photo-darktheme.png');
            variables.logoGithub.childNodes[3].firstChild.style.background = 'white';
            turnOn = true;
        }

        else {
            link.remove();
            variables.pictureDarkTheme.childNodes[3].src = 'assets/images/photos/photo-desktop1.png';
            console.log(variables.pictureDarkTheme.childNodes[1].srcset = 'assets/images/photos/photoSized2.png');
            variables.logoGithub.childNodes[3].firstChild.style.background = '';
            turnOn = false;
            localStorage.setItem('theme', 'light');
        }
        
    } 
    variables.toggleButton.childNodes[3].addEventListener('click', () => {
        
        if (turnOn == false) {
            head.appendChild(link);
            variables.pictureDarkTheme.childNodes[3].src = 'assets/images/photos/photo-darktheme.png';
            console.log(variables.pictureDarkTheme.childNodes[1].srcset = 'assets/images/photos/photo-darktheme.png');
            variables.logoGithub.childNodes[3].firstChild.style.background = 'white';
            turnOn = true;
            
            localStorage.setItem('theme', 'dark');
            //console.log(localStorage);
        }
        
        else {
            link.remove();
            variables.pictureDarkTheme.childNodes[3].src = 'assets/images/photos/photo-desktop1.png';
            console.log(variables.pictureDarkTheme.childNodes[1].srcset = 'assets/images/photos/photoSized2.png');
            variables.logoGithub.childNodes[3].firstChild.style.background = '';
            turnOn = false;
            localStorage.setItem('theme', 'light');
            //console.log(localStorage);
        }
        
    })
    
    

})
