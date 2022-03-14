const animatedElements = document.querySelectorAll('.skillName, .iconSkills, .itemsProject');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('anim');
        }
    });
});


animatedElements.forEach(animatedElement => {
    observer.observe(animatedElement);
});







