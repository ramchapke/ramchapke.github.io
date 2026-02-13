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

/* =========================
   BODY
========================= */
body {
    margin: 0;
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    cursor: none;
    animation: cinematicReveal 1.8s ease forwards;
    opacity: 0;
}

@keyframes cinematicReveal {
    0% { opacity: 0; transform: scale(1.05); }
    100% { opacity: 1; transform: scale(1); }
}

/* Cinematic Edge Shadow */
body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle, transparent 60%, rgba(0,0,0,0.85) 100%);
    z-index: 2;
}

/* =========================
   CONTAINER
========================= */
.container {
    max-width: 900px;
    margin: auto;
    padding: 20px;
    position: relative;
    z-index: 3;
}

/* =========================
   PROFILE
========================= */
.profile-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 40px 0;
    animation: floatProfile 6s ease-in-out infinite;
}

@keyframes floatProfile {
    0%,100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
}

.profile-pic {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 15px; /* square style */
    border: 4px solid white;
    z-index: 2;
    transition: transform 0.4s ease;
}

.profile-pic:hover {
    transform: scale(1.05);
}

/* Glow Border */
.profile-wrapper::before {
    content: "";
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 20px;
    background: linear-gradient(45deg, #ff3c78, #00f7ff);
    animation: rotateGlow 6s linear infinite;
    filter: blur(30px);
    z-index: 1;
}

@keyframes rotateGlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* =========================
   GRID LIST
========================= */
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

/* =========================
   COMPANY LOGO
========================= */
.company img {
    width: 150px;
    margin: 10px 0;
}

/* =========================
   BUTTONS
========================= */
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

/* =========================
   RAIN CANVAS
========================= */
#rainCanvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
}

/* =========================
   CUSTOM CURSOR
========================= */
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

</style>
<<link rel="stylesheet" href="style.css">
>
<script src="script.js"></script>

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

/* Smooth Cursor */
const cursor = document.querySelector(".cursor");
let mouseX=0, mouseY=0, currentX=0, currentY=0;

document.addEventListener("mousemove", e=>{
    mouseX=e.clientX;
    mouseY=e.clientY;
});

function animateCursor(){
    currentX += (mouseX-currentX)*0.05;
    currentY += (mouseY-currentY)*0.05;
    cursor.style.left=currentX+"px";
    cursor.style.top=currentY+"px";
    requestAnimationFrame(animateCursor);
}
animateCursor();

/* Rain Effect */
const canvas=document.getElementById("rainCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let raindrops=[];
for(let i=0;i<120;i++){
    raindrops.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        length:Math.random()*15+5,
        speed:Math.random()*3+2
    });
}

function drawRain(){
