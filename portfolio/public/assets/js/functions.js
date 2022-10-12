import * as variables from './variables.js';

// --- Mobile --- \\
export function burgerClicked () {

    variables.burgerButton.addEventListener('click', () => {
    
        if (variables.burgerButton.children[0].checked) {

            variables.navBar.after(variables.menu);
            variables.menu.classList.add('isChecked');
        }
        
        else {      
            variables.menu.classList.remove('isChecked');
            variables.navBar.append(variables.menu);
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

export function toHideAllScreen () {
    variables.burgerButton.addEventListener('click', () => {
    
        if (variables.burgerButton.children[0].checked) {

            document.body.style.overflow = 'hidden';
            document.querySelector('main').style.display = 'none';
        }
        
        else {      
            document.body.style.overflow = 'scroll';
            document.querySelector('main').style.display = 'block';
        }

        variables.desktop.addEventListener('change', (e) => {
        
            // Desktop menu
            if (e.matches) {
                document.body.style.overflow = 'scroll';
                document.querySelector('main').style.display = 'block';
            } 
        })
        
    })
}

export function scrollAfterClickOnFirst2ItemsMenu () {
    
    let arrayTransform = Array.from(variables.menu.children),
    first2Items = arrayTransform.slice(0,2);
    
    first2Items.forEach( (item) => {
        item.addEventListener('click', () => {
            
            variables.burgerButton.children[0].checked = false;
            variables.menu.classList.remove('isChecked');
            document.body.style.overflow = 'scroll';
            document.querySelector('main').style.display = 'block';
        })
    })
}

// --- Desktop --- \\
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