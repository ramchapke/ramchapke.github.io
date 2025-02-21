document.addEventListener("scroll", function () {
    let star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    let size = Math.random() * 4 + 2; // Random star size
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    star.style.top = window.scrollY + Math.random() * 50 + "px"; // Appears near scroll position

    setTimeout(() => {
        star.remove();
    }, 2000);
});
