//import * as variables from './variables.js';

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
