function navSide() {
    const bars = document.querySelector("#burger");
    const nav = document.querySelector("#navSide");

    bars.addEventListener("click", function() {
        nav.classList.toggle("nav-active");
        // burger animation
        bars.classList.toggle("close");
    });
}
navSide();