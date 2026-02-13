// Toggle Info Boxes
function toggleInfo(id) {
    const box = document.getElementById(id);
    box.style.display = box.style.display === "block" ? "none" : "block";
}

// Rain Effect
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rainDrops = [];

for (let i = 0; i < 150; i++) {
    rainDrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20,
        speed: Math.random() * 5 + 2
    });
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.lineWidth = 1;

    for (let i = 0; i < rainDrops.length; i++) {
        let drop = rainDrops[i];
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;

        if (drop.y > canvas.height) {
            drop.y = 0;
            drop.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(drawRain);
}

drawRain();

// Resize Canvas
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
