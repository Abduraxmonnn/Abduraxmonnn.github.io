// main.js

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');

    // Toggle background overlay on body
    const body = document.querySelector('body');
    body.classList.toggle('menu-open');
}

window.addEventListener('load', function () {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('hide');
});

document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});

// Animate on Reload:
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.image-container, .name-title h2, .name-title h3, .social-icons a');

    animatedElements.forEach(element => {
        element.addEventListener('animationend', () => {
            element.classList.remove('animated'); // Replace 'animated' with the actual animation class prefix you use (e.g., fadeInUp)
        });
    });
});
