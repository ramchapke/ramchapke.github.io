<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ram Chapke | Premium Portfolio</title>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #0f0f1b;
  color: white;
  overflow-x: hidden;
}

/* NAVBAR */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  z-index: 1000;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

nav a:hover {
  color: crimson;
}

/* FINANCIAL GRAPH BACKGROUND */
#graphCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
}

/* Layout */
section {
  padding: 120px 10%;
  min-height: 100vh;
}

/* Profile Section */
.profile {
  text-align: center;
}

/* 3D Glowing Image */
.profile-pic {
  width: 220px;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(45deg, crimson, red, darkred);
  animation: rotateGlow 4s linear infinite;
}

@keyframes rotateGlow {
  0% { box-shadow: 0 0 20px crimson; }
  50% { box-shadow: 0 0 40px red; }
  100% { box-shadow: 0 0 20px crimson; }
}

.typing {
  font-size: 22px;
  color: #ccc;
  margin-top: 15px;
}

/* Resume Button */
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background: crimson;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s;
}

.btn:hover {
  background: white;
  color: crimson;
}

/* Cards */
.card {
  background: rgba(255,255,255,0.05);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  margin-bottom: 40px;
}

/* Counter */
.counter {
  font-size: 40px;
  font-weight: bold;
  color: crimson;
}

/* Responsive */
@media(max-width: 768px){
  section { padding: 100px 5%; }
}
</style>
</head>

<body>

<nav>
  <a href="#home">Home</a>
  <a href="#experience">Experience</a>
  <a href="#achievements">Achievements</a>
  <a href="#contact">Contact</a>
</nav>

<canvas id="graphCanvas"></canvas>

<!-- HOME -->
<section id="home" class="profile">
  <img src="images/final image.png" class="profile-pic">
  <h1>Ram Chapke</h1>
  <div class="typing" id="typing"></div>
  <a href="resume.pdf" download class="btn">Download Resume</a>
</section>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="card">
    <h2>Professional Experience</h2>
    <p><strong>Datafortune Software Solutions</strong></p>
    <p>Sahyadri Hospitals Pvt Ltd.</p>
    <p>JNP Associates</p>
  </div>
</section>

<!-- ACHIEVEMENTS -->
<section id="achievements">
  <div class="card">
    <h2>Achievements</h2>
    <p>Years of Experience</p>
    <div class="counter" data-target="3">0</div>
    <p>Projects Handled</p>
    <div class="counter" data-target="50">0</div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="card">
    <h2>Contact</h2>
    <p>Email: ramchapke01@gmail.com</p>
    <p>Phone: 9021787284</p>
    <p><a href="https://www.linkedin.com/in/ram-chapke-040734178/" target="_blank" style="color:crimson;">LinkedIn</a></p>
  </div>
</section>

<script>
/* Typing Effect */
const text = "MBA Finance | Account Executive | Financial Analyst";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

/* Counter Animation */
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

/* Financial Graph Animation */
const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];

for(let i=0; i<50; i++){
  points.push({
    x: i * 40,
    y: Math.random() * canvas.height
  });
}

function drawGraph(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = "rgba(220,20,60,0.3)";
  ctx.lineWidth = 2;

  points.forEach((point, index)=>{
    point.y += (Math.random() - 0.5) * 5;
    if(index === 0){
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });

  ctx.stroke();
  requestAnimationFrame(drawGraph);
}

drawGraph();

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
</script>

</body>
</html>
