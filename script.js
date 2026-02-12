/* STAR EFFECT ON SCROLL */
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


/* STAR EFFECT ON MOUSE MOVE */
document.addEventListener("mousemove", function (e) {
    let star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";

    let size = Math.random() * 5 + 3; // Random star size
    star.style.width = size + "px";
    star.style.height = size + "px";

    setTimeout(() => {
        star.remove();
    }, 1000); // Removes star after 1 second
});


/* GLOWING FRAME EFFECT */
document.addEventListener("DOMContentLoaded", function () {
    const frame = document.querySelector(".frame");

    if (frame) {
        setInterval(() => {
            frame.style.boxShadow =
                "0 0 20px rgba(255, 255, 255, " + (Math.random() * 0.5 + 0.3) + ")";
        }, 1000);
    }
});
