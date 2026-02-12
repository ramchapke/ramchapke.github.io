/* TYPING EFFECT */
const text = "MBA Finance | Account Executive | Financial Analyst";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

/* COUNTER ANIMATION */
function animateCounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');

    const update = () => {
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
}

/* SCROLL REVEAL */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/* FINANCIAL GRAPH */
const canvas = document.getElementById("graphCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let points = [];

  for (let i = 0; i < 60; i++) {
    points.push({
      x: i * 30,
      y: Math.random() * canvas.height
    });
  }

  function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(220,20,60,0.3)";
    ctx.lineWidth = 2;

    points.forEach((point, index) => {
      point.y += (Math.random() - 0.5) * 4;

      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.stroke();
    requestAnimationFrame(drawGraph);
  }

  drawGraph();
}

/* INIT */
window.onload = function () {
  typeWriter();
  animateCounters();
  revealOnScroll();
};
