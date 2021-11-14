function navSide() {
    const bars = document.querySelector("#burger");
    const nav = document.querySelector("#navSide");
    const bodyLeft = document.querySelector("body");

    bars.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
        // burger animation
        bars.classList.toggle("close");

        // body to left
        bodyLeft.classList.toggle("active");
    });
}
navSide();
