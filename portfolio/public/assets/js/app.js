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

    let head = document.getElementsByTagName('HEAD')[0],
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/dark-theme.css';

    let turnOn = false;
    

    variables.toggleButton.childNodes[3].addEventListener('click', () => {

        if (turnOn == false) {
            head.appendChild(link);
            turnOn = true;
            //e.stopPropagation();
        }
        
        else {
            link.remove();
            turnOn = false;
        }
        
    })



})
