// Display menu after click on burger menu

let burgerButton = document.querySelector('.burgerButton'),
toggleButton = document.querySelector('.themeToggleButton'),
homeButton = document.querySelector('#home'),
divContainer = document.createElement('div'),
navBar = document.querySelector('nav'),
mobile = window.matchMedia('(max-width: 767px)'),
desktop = window.matchMedia('(min-width: 768px)'),
//buttonTheme = document.querySelector('.button-Container'),
menu = document.querySelector('.menu');

divContainer.className = 'containerMenu';

burgerButton.addEventListener('click', () => {

    if (burgerButton.children[0].checked) {
        navBar.after(menu);
        menu.classList.add('isChecked');
    }
    
    else {      
        menu.classList.remove('isChecked');
        navBar.append(menu);
    }
    
})

// --- Desktop --- \\

if (desktop.matches) {
    navBar.insertAdjacentElement('beforeend', toggleButton);
    burgerButton.remove();

    divContainer.append(menu, toggleButton);
    divContainer.style.display = 'flex';
    navBar.append(divContainer);
} 

desktop.addEventListener('change', (e) => {
    // Desktop menu
    if (e.matches) {
        //menu.append(toggleButton);
        //navBar.insertAdjacentElement('beforeend', toggleButton);
        burgerButton.remove();
        divContainer.append(menu, toggleButton);
        //homeButton.style.flexGrow = 1;
        navBar.append(divContainer);
        divContainer.style.display = 'flex';

        if(burgerButton.children[0].checked) {
            menu.children[3].style.display = 'none';
            toggleButton.style.marginLeft = '1em';
            //burgerButton.insertAdjacentElement('afterend', menu);
            divContainer.prepend(menu);
            
        }
    } 
})

// --- Mobile --- \\

mobile.addEventListener('change', (e) => {
    
    //Mobile
    if(e.matches) {
        navBar.append(toggleButton, burgerButton);
        divContainer.remove();
        
        if(burgerButton.children[0].checked) {

            menu.children[3].style.display = 'block';
            navBar.insertAdjacentElement('afterend', menu);
        }
    }
})
