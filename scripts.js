// Add fade-in effect on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fadeIn');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop <= windowHeight - 150) {
            element.classList.add('visible');
        }
    });
});

// Initial fade-in animation trigger
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach(element => {
        element.classList.add('visible');
    });
});
