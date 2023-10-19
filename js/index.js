const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('accordion-active');
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});