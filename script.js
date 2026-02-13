/* Toggle Info Boxes */
function toggleInfo(id) {
    let box = document.getElementById(id);

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}

/* =========================
   STAR CREATION
========================= */
function createStar(x, y) {
    let star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    let size = Math.random() * 5 + 2;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = x + "px";
    star.style.top = y + "px";

    setTimeout(() => {
        star.remove();
    }, 800);
}

/* Star on Mouse Move */
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

