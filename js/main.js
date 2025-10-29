// main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Theme Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for a saved theme, or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        // Apply saved theme
        body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else if (prefersDark) {
        // Apply system preference if no theme is saved
        body.classList.add('dark-mode');
    }

    // Update the icon based on the current mode on load
    updateThemeIcon(body.classList.contains('dark-mode'));


    themeToggle.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body
        const isDarkMode = body.classList.toggle('dark-mode');
        
        // Save the user's preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // Update the icon
        updateThemeIcon(isDarkMode);
    });

    /**
     * Helper function to change the sun/moon icon
     * @param {boolean} isDark - True if dark mode is active
     */
    function updateThemeIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        if (isDark) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }


    // --- 2. Mobile Menu Logic ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        // Toggle the 'is-active' class to show/hide the menu
        mobileMenu.classList.toggle('is-active');

        // Optional: Change the hamburger icon to an 'X'
        const icon = menuToggle.querySelector('i');
        if (mobileMenu.classList.contains('is-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // --- 3. Simple Quiz Placeholder (To show a modal/form) ---
    // Note: The actual quiz form implementation is complex and not included here.
    // This just provides a basic modal trigger for the button.
    const quizButton = document.querySelector('.quiz-button');

    if (quizButton) {
        quizButton.addEventListener('click', () => {
            alert('Opening Soap Quiz! (Form functionality to be added)');
            // In a real application, you would show the hidden #soap-quiz-content here.
        });
    }

    // --- 4. Newsletter Placeholder ---
    const newsletterButton = document.querySelector('.newsletter-button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', () => {
            alert('Opening Newsletter Sign-up Form! (Form functionality to be added)');
        });
    }
});