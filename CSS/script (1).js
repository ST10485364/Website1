// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector("#lightbox .close");

if (lightbox && lightboxImg && captionText && closeBtn) {
    function closeLightbox() {
        lightbox.style.display = "none";
    }

    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            captionText.textContent = this.alt;
        });
    });

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeLightbox();
    });
}


// Search functionality
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

if (searchInput && productList) {
    const products = productList.getElementsByTagName('li');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < products.length; i++) {
            const item = products[i].textContent.toLowerCase();
            item.includes(filter)
                ? products[i].classList.remove('hide')
                : products[i].classList.add('hide');
        }
    });
}







