// menu nav
function navSide() {
    const bars = document.getElementById("burger"),
          nav = document.getElementById("navside"),
          closeBtn = document.getElementById("close__btn");

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
    const toLightBtn = document.getElementById("icon_btn"),
          body = document.querySelector("body");

    toLightBtn.addEventListener("click", () => {
        body.classList.toggle("light");
    });
}
lightMode();


function menuSelect() {
    const navList = document.querySelector(".nav_list"),
          navLink = document.querySelectorAll(".nav_link");

    navLink.forEach((item) => {
        item.addEventListener("click", () => {
            navList.querySelector(".active").classList.remove("active");

            item.classList.add("active");
        });
    });
}
menuSelect();
