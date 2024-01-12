import * as variables from './variables.js';

export function scrollAfterClickOnFirst2ItemsMenu () {
    
    let arrayTransform = Array.from(variables.menu.children),
    first2Items = arrayTransform.slice(0,2);
    
    first2Items.forEach( (item) => {
        item.addEventListener('click', () => {
            
            variables.menu.classList.remove('isChecked');
            document.body.style.overflow = 'scroll';
            document.querySelector('main').style.display = 'block';
            variables.toContact.classList.remove('onMenu');
            variables.containerContact.append(variables.toContact);
            document.querySelector('footer').style.display = '';
            variables.homeWrapper.classList.remove('hidden');
            if(variables.mobile.matches) {

                variables.navBar.append(variables.menu);
            }
        })
    })
}


// --- Mobile & Desktop --- \\

export function animationElementsWithObserver () {

    let animatedElements = document.querySelectorAll('.all-projects, .abilities, .to-contact, footer'),
    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-on');
                observer.unobserve(entry.target);
            } 
        });
    });


    animatedElements.forEach(animatedElement => {
        observer.observe(animatedElement);
    });

}
