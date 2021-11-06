const navSlide = () => {
    const bars = document.querySelector('.mobile_version_bars_icon');
    const nav = document.querySelector('.mobile_version_navbar');

    bars.addEventListener('click', () => {
        nav.classList.toggle('navbar-active');
        bars.classList.toggle('diagnol');
    });
}

navSlide();

// for scroll
window.addEventListener("scroll", function() {
    const toTop = document.querySelector(".toTop__btn");
    toTop.classList.toggle("active", scrollY > 450);
});
