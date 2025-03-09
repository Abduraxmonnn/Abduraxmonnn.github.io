document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed")

    // Theme toggle functionality
    function initThemeToggle() {
        const themeToggle = document.getElementById("themeToggle")
        const mobileThemeToggle = document.getElementById("mobileThemeToggle")
        const body = document.body

        // Check for saved theme preference
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark") {
            body.classList.add("dark-theme")
        }

        // Toggle theme function
        function toggleTheme(e) {
            if (e) e.preventDefault()
            body.classList.toggle("dark-theme")
            localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light")
        }

        // Add event listeners to both theme toggles
        if (themeToggle) {
            themeToggle.addEventListener("click", toggleTheme)
        }

        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener("click", toggleTheme)
        }
    }

    // Initialize theme toggle
    initThemeToggle()
})

// Toggle to Close Menu
function toggleCloseMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.querySelector('.hamburger-icon').classList.remove('active');
}
