// menu nav
function navSide() {
    const bars = document.getElementById("burger");
    const nav = document.getElementById("navside");
    const closeBtn = document.getElementById("close__btn");

    bars.addEventListener("click", () => {
        nav.classList.add("nav-active");
    });

    closeBtn.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    });

    document.addEventListener("mouseup", (e) => {
        if (e.target !== closeBtn && e.target !== nav) {
            nav.classList.remove("nav-active");
        }
    });
}
navSide();

// dark & light
function lightMode() {
    const toLightBtn = document.getElementById("icon_btn");
    const body = document.querySelector("body");

    toLightBtn.addEventListener("click", () => {
        body.classList.toggle("light");
    });
}

lightMode();