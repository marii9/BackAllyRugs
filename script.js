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
    const dimensionsSelect = document.getElementById("rugDimensions");

    buyNowButton.addEventListener("click", function() {
        cartPopup.classList.remove("hidden");

        // You can dynamically change the image source here
        const productImage = document.createElement("img");
        productImage.src = "imgs/IMG_7247 (1).jpg";
        productImage.alt = "Product Image";
        productImage.classList.add("w-32", "h-32", "mb-4", "mx-auto");

        const popupContent = document.querySelector("#cartPopup .bg-white");
        popupContent.insertBefore(productImage, popupContent.firstChild);

        // Handle the selected size here
        const selectedSize = dimensionsSelect.value;
        console.log("Selected Size:", selectedSize);
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

document.addEventListener("DOMContentLoaded", function() {
    const stripe = Stripe('pk_test_51NzW6tH0kE1rWiJfdnGZQvOCMOnLgTatvfbtKC28yMDV1pqhN3Hiq9qFID3WFUKIYfYZNklF7K6vRCZ8K9a4hbNF00v9UYYz7G'); 

    const buyNowButton = document.getElementById("buyNowButton");
    const checkoutButton = document.getElementById("checkoutButton");

    buyNowButton.addEventListener("click", function() {
        
    });

    checkoutButton.addEventListener("click", function() {
        stripe.redirectToCheckout({
            lineItems: [{price: 'price_1NzWQ3H0kE1rWiJfIBvvprU3', quantity: 1}],
            mode: 'payment',
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/cancel',
        })
        .then((result) => {
            if (result.error) {
                console.error(result.error);
            }
        });
    });
});






