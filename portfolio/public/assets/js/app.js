// Display menu after click on burger menu
import * as variables from './variables.js';
import {burgerClicked, navbarDesktop, navbarMobile, displayHomeWrapper} from './functions.js';

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
})
