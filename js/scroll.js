window.addEventListener("scroll", function() {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("topNav", window.scrollY > 90);

    const toTop = document.querySelector(".toTop");
    toTop.classList.toggle("active", window.scrollY > 250);
});
