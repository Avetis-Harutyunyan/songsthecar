window.addEventListener("scroll", () => {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("topNav-active", scrollY > 70);

    const toTopBtn = document.querySelector(".toUpBtn");
    toTopBtn.classList.toggle("toUpBtn-active", scrollY > 600);
});