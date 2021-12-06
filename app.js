function navSide() {
    const bars = document.querySelector("#burger");
    const nav = document.querySelector("#navSide");
    const bodyLeft = document.querySelector("body");

    bars.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
        // burger animation
        bars.classList.toggle("close");

        // body to left
        bodyLeft.classList.toggle("left");
    });
}
navSide();


function darkMode() {
    const bulb = document.querySelector(".darkMode");
    const body = document.querySelector("body");

    bulb.addEventListener("click", function() {
        bulb.classList.toggle("active");
        body.classList.toggle("light");
    });
}
darkMode();
