// Display menu after click on burger menu
import * as variables from './variables.js';
import {scrollAfterClickOnFirst2ItemsMenu, animationElementsWithObserver} from './functions.js';

document.addEventListener('DOMContentLoaded', () => {
      
    // --- NavBar Mobile --- \\

    scrollAfterClickOnFirst2ItemsMenu();
    
    animationElementsWithObserver();
    
    variables.link.rel = 'stylesheet';

})
