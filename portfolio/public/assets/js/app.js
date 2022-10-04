// Display menu after click on burger menu

let burgerButton = document.querySelector('.burgerButton'),
toggleButton = document.querySelector('.themeToggleButton'),
homeButton = document.querySelector('#home'),
navBar = document.querySelector('nav'),
//buttonTheme = document.querySelector('.button-Container'),
menu = document.querySelector('.menu');

burgerButton.addEventListener('click', () => {

    //console.log(burgerButton.children[0]);

    if (burgerButton.children[0].checked) {
        navBar.after(menu);
        menu.classList.add('isChecked');
    }
    
    else {      
        menu.classList.remove('isChecked');
        navBar.append(menu);
    }
    
})

// Desktop menu
if (window.matchMedia("(min-width: 768px)").matches) {
    //menu.append(toggleButton);
    navBar.insertAdjacentElement('beforeend', toggleButton);
    homeButton.style.flexGrow = 1;
} 


