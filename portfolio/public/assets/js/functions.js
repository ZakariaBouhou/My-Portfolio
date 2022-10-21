import * as variables from './variables.js';

// --- Mobile --- \\
export function burgerClicked () {

    variables.burgerButton.addEventListener('click', () => {
    
        if (variables.burgerButton.children[0].checked) { 

            variables.toContact.classList.add('onMenu');
            variables.menu.append(variables.toContact);
            
            variables.navBar.after(variables.menu);
            variables.menu.classList.add('isChecked');  
            
        }
        
        else {      
            variables.toContact.classList.remove('onMenu');
            document.querySelector('.to-contact').append(variables.toContact);
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

                variables.toContact.classList.add('onMenu');
                variables.menu.append(variables.toContact);
                
                variables.menu.children[3].style.display = 'block';
                variables.navBar.insertAdjacentElement('afterend', variables.menu);
            }
        }
    })
}

export function displayHomeWrapper () {
    
    variables.burgerButton.addEventListener('click', () => {
        if (variables.burgerButton.children[0].checked == true) {
            
            variables.homeWrapper.classList.add('hidden');
            variables.homeWrapper.classList.remove('isActive');
            
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

            document.body.style.overflowY = 'hidden';
            document.querySelector('main').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
        }
        
        else {      
            document.body.style.overflowY = 'scroll';
            document.querySelector('main').style.display = 'block';
            document.querySelector('footer').style.display = 'block';
        }
        
        variables.desktop.addEventListener('change', (e) => {
            
            // Desktop menu
            if (e.matches) {
                document.body.style.overflowY = 'scroll';
                document.querySelector('main').style.display = 'block';
                document.querySelector('footer').style.display = 'block';
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
            variables.toContact.classList.remove('onMenu');
            variables.containerContact.append(variables.toContact);
            document.querySelector('footer').style.display = '';
            variables.homeWrapper.classList.remove('hidden');
        })
    })
}

// --- Desktop --- \\
export function navbarDesktop () {

    if (variables.desktop.matches) {
        //variables.menu.style.display = 'flex'
        variables.navBar.insertAdjacentElement('beforeend', variables.toggleButton);
        variables.burgerButton.remove();
        
        variables.divContainer.append(variables.menu, variables.toggleButton);
        variables.divContainer.style.display = 'flex';
        variables.navBar.append(variables.divContainer);
    } 
    
    variables.desktop.addEventListener('change', (e) => {
        
        // Desktop menu
        if (e.matches) {
            //variables.menu.style.display = 'flex'
            variables.burgerButton.remove();
            variables.divContainer.append(variables.menu, variables.toggleButton);
            variables.navBar.append(variables.divContainer);
            variables.divContainer.style.display = 'flex';
    
            if(variables.burgerButton.children[0].checked) {

                //variables.menu.children[3].style.display = 'none';
                variables.toggleButton.style.marginLeft = '1em';
                variables.divContainer.prepend(variables.menu);
                variables.toContact.classList.remove('onMenu');
                document.querySelector('.to-contact').append(variables.toContact);
                
            }
        } 
    })
}

// --- Twice --- \\
export function cloneSendButton () {
    let arrayTransform = Array.from(variables.menu.children),
        contact = document.querySelector('.left-side'),
        sendButton = arrayTransform[3].firstChild.cloneNode(true);
        sendButton.href = 'mailto:zak.bouhou@outlook.fr';
        contact.append(sendButton);
}

export function animationElementsWithObserver () {

let animatedElements = document.querySelectorAll('.all-projects, .abilities, .to-contact, footer'),
observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim-on');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('anim-on');
        }
    });
});


animatedElements.forEach(animatedElement => {
    observer.observe(animatedElement);
});
}

export function darkTheme () {

    variables.head.appendChild(variables.link);
    variables.pictureDarkTheme.childNodes[3].src = 'assets/images/photos/photo-darktheme.png';
    variables.pictureDarkTheme.childNodes[1].srcset = 'assets/images/photos/photo-darktheme-mobile.png';
    variables.logoGithub.childNodes[3].firstChild.style.background = 'white';
          
}
    
export function lightTheme () {

    variables.link.remove();
    variables.pictureDarkTheme.childNodes[3].src = 'assets/images/photos/photo-desktop1.png';
    variables.pictureDarkTheme.childNodes[1].srcset = 'assets/images/photos/photoSized2.png';
    variables.logoGithub.childNodes[3].firstChild.style.background = '';
    
}  
    
export function toHideNavicon () {
    if(localStorage.getItem('theme')) {
        if(localStorage.getItem('theme') == 'dark') { 
            
            variables.burgerButton.addEventListener('click', () => {

                if(variables.burgerButton.children[0].checked) {
                    //console.log('test');
                    document.querySelector('.navicon').setAttribute('style', 'background: transparent !important');
                }

                else {
                    document.querySelector('.navicon').setAttribute('style', 'background: white !important');
                }
            })
        }

    }
    if(localStorage.getItem('theme')) {
        if(localStorage.getItem('theme') == 'light') {    

            variables.burgerButton.addEventListener('click', () => {
                if(variables.burgerButton.children[0].checked) {
                    //console.log('test2');
                    document.querySelector('.navicon').setAttribute('style', 'background: transparent !important')
                }

                else {
                    document.querySelector('.navicon').setAttribute('style', 'background: black !important')
                }
            })
        }

    }

}