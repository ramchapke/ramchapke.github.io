<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ram Chapke Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- AOS Animation -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

    <style>
        body {
            margin: 0;
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            cursor: none;
        }

        .container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
        }

        .profile-pic {
            width: 200px;
            border-radius: 50%;
            margin: 20px 0;
        }

        .grid-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            list-style: none;
            padding: 0;
        }

        .grid-list li {
            background: rgba(255,255,255,0.1);
            padding: 10px 15px;
            border-radius: 8px;
        }

        .company img {
            width: 150px;
            margin: 10px 0;
        }

        #rainCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        /* Cursor */
        .cursor {
            position: fixed;
            width: 12px;
            height: 12px;
            background: #ff3c78;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 15px #ff3c78, 0 0 30px #ff3c78;
        }

        /* Buttons */
        .button-container button {
            padding: 10px 15px;
            margin: 10px;
            border: none;
            border-radius: 6px;
            background: #ff3c78;
            color: white;
            cursor: pointer;
        }

        .info-box {
            display: none;
            margin-top: 15px;
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 8px;
        }
    </style>
</head>

<body>

<canvas id="rainCanvas"></canvas>

<div class="container">

    <div class="profile-wrapper">
    <img src="images/final image.png" class="profile-pic">
</div>

    <h1>Ram Chapke</h1>
    <p><em>“In the symphony of financial excellence, the best accountants are the conductors of prosperity.”</em></p>

    <h2 data-aos="fade-up">Professional Experience</h2>

    <div class="company">
        <h3>Datafortune Software Solution</h3>
        <img src="images/datafortune.png">
    </div>

    <div class="company">
        <h3>Sahyadri Hospitals Pvt Ltd.</h3>
        <img src="images/Sahyadri Logo.png">
    </div>

    <div class="company">
        <h3>JNP Associates</h3>
        <img src="images/logo-JNP.png">
    </div>

    <h2 data-aos="fade-left">Skills</h2>
    <ul class="grid-list">
        <li>Accounting</li>
        <li>Financial Modelling</li>
        <li>Budgeting</li>
        <li>Financial Planning</li>
        <li>Investment Banking</li>
    </ul>

    <h2 data-aos="fade-right">Hobbies</h2>
    <ul class="grid-list">
        <li>Travelling</li>
        <li>Programming</li>
        <li>Research</li>
        <li>Technology</li>
    </ul>

    <h2>Software & Tools Known</h2>

    <div class="button-container">
        <button onclick="toggleInfo('accounting')">📊 Accounting</button>
        <button onclick="toggleInfo('office')">🧠 Productivity</button>
        <button onclick="toggleInfo('tech')">💻 Tech</button>
    </div>

    <div id="accounting" class="info-box">
        <ul>
            <li>Tally Prime</li>
            <li>Zoho Books</li>
            <li>GST Portal</li>
        </ul>
    </div>

    <div id="office" class="info-box">
        <ul>
            <li>Advanced Excel</li>
            <li>Google Sheets</li>
            <li>MS Office</li>
        </ul>
    </div>

    <div id="tech" class="info-box">
        <ul>
            <li>GitHub</li>
            <li>HTML, CSS, JavaScript</li>
        </ul>
    </div>

</div>

<div class="cursor"></div>

<script>
/* Cursor */
const cursor = document.querySelector(".cursor");

let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
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

for (let i = 0; i < 100; i++) {
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

/* Toggle Buttons */
function toggleInfo(id) {
    const boxes = document.querySelectorAll('.info-box');
    boxes.forEach(box => {
        box.style.display = box.id === id ?
            (box.style.display === 'block' ? 'none' : 'block') : 'none';
    });
}

/* AOS Init */
AOS.init();
</script>

</body>
</html>
