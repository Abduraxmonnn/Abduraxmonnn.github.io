document.addEventListener("DOMContentLoaded", () => {
    // Hide loading overlay after page loads
    const loadingOverlay = document.getElementById("loadingOverlay")
    setTimeout(() => {
        loadingOverlay.classList.add("hide")
    }, 1000)

    // Initialize custom cursor
    initCustomCursor()

    // Load blog posts from JSON
    loadBlogPosts()
})

// Custom cursor functionality
function initCustomCursor() {
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"

        setTimeout(() => {
            cursorFollower.style.left = e.clientX + "px"
            cursorFollower.style.top = e.clientY + "px"
        }, 100)
    })

    // Add hover effect for links and clickable elements
    const links = document.querySelectorAll("a, .blog-post")
    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-hover")
            cursorFollower.classList.add("cursor-hover")
        })

        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-hover")
            cursorFollower.classList.remove("cursor-hover")
        })
    })
}

// Group posts by year and month
function groupPostsByDate(posts) {
    posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Ensure sorting before grouping

    return posts.reduce((groups, post) => {
        const date = new Date(post.date);
        const year = date.getFullYear();
        const month = date.toLocaleString("default", {month: "long"});

        if (!groups[year]) {
            groups[year] = {};
        }
        if (!groups[year][month]) {
            groups[year][month] = [];
        }

        groups[year][month].push(post);
        return groups;
    }, {});
}

// Load blog posts from JSON file
function loadBlogPosts() {
    const blogPostsContainer = document.getElementById("blog-posts")

    // Create year indicator
    const yearIndicator = document.createElement("div")
    yearIndicator.className = "year-indicator"
    document.querySelector(".blog-main").prepend(yearIndicator)

    fetch("data/blog.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json()
        })
        .then((data) => {
            // Clear loading indicator
            blogPostsContainer.innerHTML = ""

            if (data.posts && data.posts.length > 0) {
                // Sort posts by date (newest first)
                data.posts.sort((a, b) => new Date(b.date) - new Date(a.date))

                // Group posts by year and month
                const groupedPosts = groupPostsByDate(data.posts)

                // Create sections for each year and month
                Object.entries(groupedPosts)
                    .sort((a, b) => b[0] - a[0])
                    .forEach(([year, months]) => {
                        Object.entries(months)
                            .sort((a, b) => new Date(`1 ${b[0]} ${year}`) - new Date(`1 ${a[0]} ${year}`)) // Sort months descending
                            .forEach(([month, posts]) => {
                                const monthSection = document.createElement("div")
                                monthSection.className = "month-section"
                                monthSection.dataset.year = year

                                const monthHeading = document.createElement("h2")
                                monthHeading.className = "month-heading"
                                monthHeading.textContent = month
                                monthSection.appendChild(monthHeading)

                                posts.forEach((post) => {
                                    const postElement = createPostElement(post)
                                    monthSection.appendChild(postElement)
                                })

                                blogPostsContainer.appendChild(monthSection)
                            })
                    })

                // Initialize scroll handling
                handleScroll()
                window.addEventListener("scroll", handleScroll)
            } else {
                // No posts found
                const noPostsElement = document.createElement("div")
                noPostsElement.className = "no-posts"
                noPostsElement.textContent = "No blog posts found."
                blogPostsContainer.appendChild(noPostsElement)
            }
        })
        .catch((error) => {
            console.error("Error loading blog posts:", error)
            blogPostsContainer.innerHTML = `
                <div class="no-posts">
                    <p>Failed to load blog posts. Please try again later.</p>
                </div>
            `
        })
}

// Handle scroll events to update year indicator
function handleScroll() {
    const yearIndicator = document.querySelector(".year-indicator")
    const monthSections = document.querySelectorAll(".month-section")
    const scrollPosition = window.scrollY + 200 // Offset for better visibility

    let currentYear = null

    monthSections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (scrollPosition >= sectionTop) {
            currentYear = section.dataset.year
        }
    })

    if (currentYear) {
        yearIndicator.textContent = currentYear
    }
}

// Create a blog post element
function createPostElement(post) {
    const postElement = document.createElement("article")
    postElement.className = "blog-post"

    // Format date
    const postDate = new Date(post.date)
    const formattedDate =
        postDate.getDate() + " " + postDate.toLocaleString("default", {month: "long"}) + ", " + postDate.getFullYear()

    postElement.innerHTML = `
        <div class="blog-post-date">${formattedDate}</div>
        <h3 class="blog-post-title">${post.title}</h3>
    `

    // Make the entire post clickable and open in a new tab
    postElement.addEventListener("click", () => {
        window.open(post.url, "_blank")
    })

    return postElement
}

// Custom cursor
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-dot-outline');

    document.addEventListener('mousemove', function (e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Add hover effect for links
    const links = document.querySelectorAll('a, button, .btn');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorOutline.classList.add('cursor-hover');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorOutline.classList.remove('cursor-hover');
        });
    });
});

// Mobile menu toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
    document.querySelector('.hamburger-icon').classList.toggle('active');
}
