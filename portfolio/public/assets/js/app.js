// Display menu after click on burger menu
import * as variables from './variables.js';
import {burgerClicked, navbarDesktop, navbarMobile, displayHomeWrapper, toHideAllScreen, scrollAfterClickOnFirst2ItemsMenu, cloneSendButton, animationElementsWithObserver, toHideNavicon, darkTheme, lightTheme} from './functions.js';

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
    
    variables.link.rel = 'stylesheet';
    variables.link.href = 'assets/css/dark-theme.css';
    variables.link.id = 'dark';

    let turnOn = false;
    
    if(localStorage.getItem('theme')) {
    
        if(localStorage.getItem('theme') == 'dark') {    
            darkTheme();
            turnOn = true;
        }
        
        else {
            lightTheme();
            localStorage.setItem('theme', 'light');
        }
        
    } 
    variables.toggleButton.childNodes[3].addEventListener('click', () => {
        
        if (turnOn == false) {           
            darkTheme();
            turnOn = true;      
            localStorage.setItem('theme', 'dark');
            //document.querySelector('.navicon').setAttribute('style', 'background: transparent !important')

        }
        
        else {
            lightTheme();
            turnOn = false;
            localStorage.setItem('theme', 'light');
            //document.querySelector('.navicon').setAttribute('style', 'background: black !important')
        }
        
    })

    toHideNavicon();

    // Fix padding after scroll on elements in mobile
    let arrayTransform = Array.from(variables.menu.children),
    first2Items = arrayTransform.slice(0,2);

    if (variables.mobile.matches) {

        first2Items.forEach( (item) => {
            item.addEventListener('click', () => {
                
                variables.menu.style.display = 'none';
                variables.menu.style.flexDirection = 'column';
            })
        })
            
    }
        
    else {

        variables.menu.style.display = '';
        variables.menu.style.flexDirection = '';
        
    }
    
    
    variables.desktop.addEventListener('change', () => {
                       
        variables.menu.style.display = '';
        variables.menu.style.flexDirection = '';

    })

})
