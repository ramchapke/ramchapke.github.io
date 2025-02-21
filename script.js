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
document.addEventListener("mousemove", function (e) {
    let star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;

    let size = Math.random() * 5 + 3; // Random star size
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    setTimeout(() => {
        star.remove();
    }, 1000); // Removes the star after 1 second
});
