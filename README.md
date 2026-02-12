<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ram Chapke | Portfolio</title>

<style>
body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #0f0f1b, #1a1a2e);
    color: white;
    overflow-x: hidden;
}

/* Rain Canvas */
canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

/* Layout */
.main-layout {
    display: flex;
    min-height: 100vh;
}

/* LEFT PANEL */
.left-panel {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-card {
    text-align: center;
    padding: 30px;
    border-radius: 20px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 40px rgba(255,0,80,0.4);
    transition: 0.4s ease;
}

.profile-card:hover {
    transform: translateY(-10px);
}

.profile-pic {
    width: 200px;
    border-radius: 50%;
    border: 4px solid crimson;
}

h1 {
    margin: 15px 0 5px;
}

.tagline {
    color: #bbb;
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background: crimson;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    transition: 0.3s;
}

.btn:hover {
    background: white;
    color: crimson;
}

/* RIGHT PANEL */
.right-panel {
    width: 65%;
    padding: 50px;
}

/* CARDS */
.card {
    background: rgba(255,255,255,0.05);
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
    transition: 0.3s;
}

.card:hover {
    box-shadow: 0 0 30px rgba(255,255,255,0.2);
}

.card h2 {
    margin-top: 0;
    color: crimson;
}

/* Buttons */
button {
    padding: 8px 15px;
    border-radius: 20px;
    border: none;
    background: #333;
    color: white;
    margin: 5px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: crimson;
}

/* Info Box */
.info-box {
    display: none;
    margin-top: 10px;
    padding: 12px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {opacity: 0; transform: translateY(10px);}
    to {opacity: 1; transform: translateY(0);}
}

/* Responsive */
@media(max-width: 900px) {
    .main-layout {
        flex-direction: column;
    }
    .left-panel, .right-panel {
        width: 100%;
        text-align: center;
    }
}
</style>
</head>

<body>

<canvas id="rainCanvas"></canvas>

<div class="main-layout">

<!-- LEFT SIDE -->
<div class="left-panel">
    <div class="profile-card">
        <img src="images/final image.png" class="profile-pic">
        <h1>Ram Chapke</h1>
        <p class="tagline">MBA Finance | Account Executive | Financial Analyst</p>
        <a href="https://ramchapke.github.io" target="_blank" class="btn">Visit Live Portfolio</a>
    </div>
</div>

<!-- RIGHT SIDE -->
<div class="right-panel">

<section class="card">
    <h2>Professional Experience</h2>
    <p><strong>Datafortune Software Solutions</strong></p>
    <p>Sahyadri Hospitals Pvt Ltd.</p>
    <p>JNP Associates</p>
</section>

<section class="card">
    <h2>Core Skills</h2>
    <ul>
        <li>Accounting & Taxation</li>
        <li>Financial Modelling</li>
        <li>Budgeting & Planning</li>
        <li>Investment Analysis</li>
    </ul>
</section>

<section class="card">
    <h2>Software & Tools</h2>

    <button onclick="toggleInfo('accounting')">Accounting Tools</button>
    <button onclick="toggleInfo('office')">Productivity Tools</button>
    <button onclick="toggleInfo('tech')">Tech Platforms</button>

    <div id="accounting" class="info-box">
        Tally ERP • Zoho Books • GST Portal • Income Tax Portal • Bank Reconciliation
    </div>

    <div id="office" class="info-box">
        Advanced Excel • Google Sheets • PowerPoint • Email Management
    </div>

    <div id="tech" class="info-box">
        GitHub • GitHub Pages • HTML • CSS • JavaScript
    </div>
</section>

<section class="card">
    <h2>Contact</h2>
    <p>Email: ramchapke01@gmail.com</p>
    <p>Phone: 9021787284</p>
    <p><a href="https://www.linkedin.com/in/ram-chapke-040734178/" target="_blank" style="color:crimson;">LinkedIn Profile</a></p>
</section>

</div>
</div>

<script>
// Toggle Function
function toggleInfo(id) {
    const boxes = document.querySelectorAll('.info-box');
    boxes.forEach(box => {
        box.style.display = box.id === id 
            ? (box.style.display === 'block' ? 'none' : 'block') 
            : 'none';
    });
}

// Rain Effect
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = [];

function createRain() {
    for (let i = 0; i < 120; i++) {
        raindrops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 20 + 10,
            speed: Math.random() * 3 + 2
        });
    }
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(173, 216, 230, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.lineCap = "round";

    raindrops.forEach(drop => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
        drop.y += drop.speed;

        if (drop.y > canvas.height) {
            drop.y = 0;
            drop.x = Math.random() * canv*
