document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".swiper-container", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 3000
        }
    });
});
