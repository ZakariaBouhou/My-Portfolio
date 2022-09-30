//Display menu after click on burger menu

let burgerButton = document.querySelector('.burger'),
navBar = document.querySelector('nav'),
menu = document.querySelector('.menu');

burgerButton.addEventListener('click', () => {

    console.log(burgerButton.children[0]);

    if (burgerButton.children[0].checked) {
        navBar.after(menu);
        menu.classList.add('isChecked');
    }
    
    else {      
        menu.classList.remove('isChecked');
        navBar.append(menu);
    }

})


