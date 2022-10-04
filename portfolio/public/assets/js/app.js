// Display menu after click on burger menu

let burgerButton = document.querySelector('.burger'),
navBar = document.querySelector('nav'),
buttonTheme = document.querySelector('.button-Container'),
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
    menu.append(buttonTheme);
} 
else { 
    //console.log(buttonTheme);
    //buttonTheme.insertAdjacentElement('afterend', document.body);

    /* if(menu.classList.contains('isChecked')) {

        menu.classList.remove('isChecked');
    }

    buttonTheme.style.display = 'flex';
    buttonTheme.style.alignItems = 'center'; */

    console.log('match');
  }


