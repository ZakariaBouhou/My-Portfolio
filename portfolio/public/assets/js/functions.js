import * as variables from './variables.js';

export function burgerClicked () {

    variables.burgerButton.addEventListener('click', () => {
    
        if (variables.burgerButton.children[0].checked) {
            //console.log(variables.menu.children);

            /* let childs = Array.from(variables.menu.children);
            setTimeout(() => {
                childs[0].style.position = 'absolute';
                childs[0].style.top = '13%';
            }, 0);
            setTimeout(() => {
                childs[1].style.position = 'absolute';
                childs[1].style.top = '17%';
            }, 1000);
            setTimeout(() => {
                childs[2].style.position = 'absolute';
                childs[2].style.top = '20%';
            }, 2000);
            setTimeout(() => {
                console.log(childs[3]);
                childs[3].style.position = 'absolute';
                childs[3].style.top = '23%';
            }, 3000); */
            //console.log(variables.menu.children[0]);
            variables.navBar.after(variables.menu);
            variables.menu.classList.add('isChecked');
        }
        
        else {      
            variables.menu.classList.remove('isChecked');
            variables.navBar.append(variables.menu);
        }
        
    })

}

export function navbarDesktop () {

    if (variables.desktop.matches) {
        variables.navBar.insertAdjacentElement('beforeend', variables.toggleButton);
        variables.burgerButton.remove();
    
        variables.divContainer.append(variables.menu, variables.toggleButton);
        variables.divContainer.style.display = 'flex';
        variables.navBar.append(variables.divContainer);
    } 
    
    variables.desktop.addEventListener('change', (e) => {
        
        // Desktop menu
        if (e.matches) {
            variables.burgerButton.remove();
            variables.divContainer.append(variables.menu, variables.toggleButton);
            variables.navBar.append(variables.divContainer);
            variables.divContainer.style.display = 'flex';
    
            if(variables.burgerButton.children[0].checked) {

                variables.menu.children[3].style.display = 'none';
                variables.toggleButton.style.marginLeft = '1em';
                variables.divContainer.prepend(variables.menu);
                
            }
        } 
    })
}

export function navbarMobile () {

    variables.mobile.addEventListener('change', (e) => {
        
        //Mobile
        if(e.matches) {
            variables.navBar.append(variables.toggleButton, variables.burgerButton);
            variables.divContainer.remove();
            
            if(variables.burgerButton.children[0].checked) {
    
                variables.menu.children[3].style.display = 'block';
                variables.navBar.insertAdjacentElement('afterend', variables.menu);
            }
        }
    })
}

// Mobile
export function displayHomeWrapper () {

    variables.burgerButton.addEventListener('click', () => {
        if (variables.burgerButton.children[0].checked == true) {
            //variables.burgerButton.children[0].checked = true;
            
            variables.homeWrapper.classList.add('hidden');
            variables.homeWrapper.classList.remove('isActive');
            //variables.burgerButton.children[0].checked = false;
            //variables.homeWrapper.classList.remove('hidden');
            
        }
        
        else {
            variables.homeWrapper.classList.remove('hidden');
            variables.homeWrapper.classList.add('isActive');

        }
    })
}