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

// Main JavaScript file

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading overlay after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('loadingOverlay').classList.add('hide');
        }, 1500);
    });

    // Initialize animations for elements
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
        element.classList.add('animated');
    });
});

// Mobile menu toggle function
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
    document.querySelector('.hamburger-icon').classList.toggle('active');

    // Prevent scrolling when menu is open
    if (mobileMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    if (mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(event.target) &&
        !hamburgerMenu.contains(event.target)) {
        mobileMenu.classList.remove('open');
        document.querySelector('.hamburger-icon').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Add parallax effect to background elements
document.addEventListener('mousemove', function(e) {
    const circles = document.querySelectorAll('.bg-circle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    circles.forEach((circle, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX * speed);
        const y = (mouseY * speed);

        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
});