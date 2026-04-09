// rtl-ltr.js

document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const dirToggleBtns = document.querySelectorAll('.dir-toggle');
    
    // Check local storage for saved direction preference
    const savedDirection = localStorage.getItem('site-direction');
    
    // Apply saved direction if it exists, otherwise leave default (usually 'ltr')
    if (savedDirection) {
        htmlElement.setAttribute('dir', savedDirection);
    }

    // Function to toggle direction
    const toggleDirection = () => {
        const currentDir = htmlElement.getAttribute('dir') || 'ltr';
        const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
        
        // Update DOM
        htmlElement.setAttribute('dir', newDir);
        
        // Save preference
        localStorage.setItem('site-direction', newDir);
    };

    // Attach click event to all toggle buttons
    dirToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleDirection);
    });
});
