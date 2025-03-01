// main.js
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
document.addEventListener('DOMContentLoaded', function () {
    // Hide loading overlay after page loads
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.getElementById('loadingOverlay').classList.add('hide');
        }, 1500);
    });

    // Initialize animations for elements
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
        element.classList.add('animated');
    });
});

// Mobile menu toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (mobileMenu && hamburgerIcon) {
        mobileMenu.classList.toggle('open');
        hamburgerIcon.classList.toggle('active');

        // Prevent scrolling when menu is open
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : 'auto';
    }
}

// Close mobile menu
function closeMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (mobileMenu && hamburgerIcon) {
        mobileMenu.classList.remove('open');
        hamburgerIcon.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenuButton = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburgerMenu) {
        console.log('Hamburger menu found');
        hamburgerMenu.addEventListener('click', toggleMenu);
    } else {
        console.log('Hamburger menu not found');
    }

    if (closeMenuButton) {
        console.log('Close menu button found');
        closeMenuButton.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            console.log('Close button clicked');
            closeMenu();
        });
    } else {
        console.log('Close menu button not found');
    }

    // Close menu when clicking outside
    if (mobileMenu) {
        document.addEventListener('click', function (event) {
            if (mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(event.target) &&
                !hamburgerMenu.contains(event.target)) {
                closeMenu();
            }
        });
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
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
document.addEventListener('mousemove', function (e) {
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