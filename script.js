/* Smooth Cursor */
const cursor = document.querySelector(".cursor");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;
    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";
    requestAnimationFrame(animateCursor);
}
animateCursor();

/* Rain Effect */
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = [];

for (let i = 0; i < 120; i++) {
    raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 15 + 5,
        speed: Math.random() * 3 + 2
    });
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(173, 216, 230, 0.6)";
    ctx.lineWidth = 2;

    raindrops.forEach(drop => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
        drop.y += drop.speed;

        if (drop.y > canvas.height) {
            drop.y = 0;
            drop.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawRain);
}
drawRain();

/* Toggle Info */
function toggleInfo(id) {
    const boxes = document.querySelectorAll('.info-box');

    boxes.forEach(box => {
        box.style.display =
            box.id === id
            ? (box.style.display === 'block' ? 'none' : 'block')
            : 'none';
    });
}
