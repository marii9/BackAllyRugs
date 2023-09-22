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


document.addEventListener("DOMContentLoaded", function() {
    const buyNowButton = document.getElementById("buyNowButton");
    const cartPopup = document.getElementById("cartPopup");
    const closeCartPopupButton = document.getElementById("closeCartPopup");

    buyNowButton.addEventListener("click", function() {
        cartPopup.classList.remove("hidden");

        // You can dynamically change the image source here
        const productImage = document.createElement("img");
        productImage.src = "imgs/IMG_7247 (1).jpg";
        productImage.alt = "Product Image";
        productImage.classList.add("w-32", "h-32", "mb-4", "mx-auto");
        
        const popupContent = document.querySelector("#cartPopup .bg-white");
        popupContent.insertBefore(productImage, popupContent.firstChild);
    });

    closeCartPopupButton.addEventListener("click", function() {
        cartPopup.classList.add("hidden");

        // Remove the added image when closing the popup
        const productImage = document.querySelector("#cartPopup img");
        if (productImage) {
            productImage.remove();
        }
    });
});