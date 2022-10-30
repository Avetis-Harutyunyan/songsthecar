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
    const body = document.body;

    let localTheme = localStorage.getItem("light");

    if(localTheme === "enabled") {
        body.classList.add("light");
    } else {
        body.classList.remove("light");
    }

    toLightBtn.addEventListener("click", () => {
        if(!body.classList.contains("light")) {
            body.classList.add("light");
            localStorage.setItem("light", "enabled");
        } else {
            body.classList.remove("light");
            localStorage.setItem("light", "disabled");
        }

        localTheme = localStorage.getItem("light");

        if(localTheme === "enabled") {
            body.classList.add("light");
        } else {
            body.classList.remove("light");
        }
    });
}
lightMode();


function menuSelect() {
    const navList = document.querySelector(".nav_list");
    const navLink = document.querySelectorAll(".nav_link");

    navLink.forEach((item) => {
        item.addEventListener("click", () => {
            navList.querySelector(".active").classList.remove("active");

            item.classList.add("active");
        });
    });
}
menuSelect();
