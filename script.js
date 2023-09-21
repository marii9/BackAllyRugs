function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
});

const sections = document.querySelectorAll('.fade-in-section');

sections.forEach((section) => {
    observer.observe(section);
});

// Function to reset the fade-in effect when scrolled back to the top
function resetFadeInEffect() {
    sections.forEach((section) => {
        if (!section.classList.contains('show')) {
            observer.observe(section);
        }
    });
}

// Event listener to trigger reset when user scrolls
window.addEventListener('scroll', resetFadeInEffect);


