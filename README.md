<Hello Friends>
<html lang="en">
<head>
<<!-- AOS Library for Scroll Animations -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>>
<<link rel="stylesheet" href="style.css">
>
<script src="script.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ram Chapke - Portfolio</title>
    <style>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 50px; }
        h1 { color: #333; }
        .container { max-width: 600px; margin: auto; }
        a { text-decoration: none; color: blue; }
    </style>
    <style>
        body {
    background-color: black;
    color: white;  /* Ensures text is visible */
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}
    <style>
</style>
</head>
<body>
 <canvas id="rainCanvas"></canvas>
    <div class="container">
<img src="images/Profile-removebg.png" alt="My Profile Picture" width="400">
    <p>Welcome to my portfolio!</p>
<body>
    <canvas id="rainCanvas"></canvas>

    <script>
        const canvas = document.getElementById("rainCanvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let raindrops = [];

        function createRaindrops() {
            for (let i = 0; i < 100; i++) {
                raindrops.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    length: Math.random() * 15 + 5,
                    speed: Math.random() * 3 + 2
                });
            }
        }

        function drawRain() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "rgba(173, 216, 230, 0.6)";
            ctx.lineWidth = 2;
            ctx.lineCap = "round";

            raindrops.forEach((drop) => {
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

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        createRaindrops();
        drawRain();
    </script>
    <div class="container">
        <h1></h1>
        <p></p>
        <p><strong>Passionate and detail-oriented finance professional with an MBA in Finance, specializing in accounting, taxation, and financial analysis. With hands-on experience in managing financial statements, budgeting, and compliance, I bring expertise in optimizing financial processes and driving business growth. Committed to accuracy and strategic financial planning, I thrive in dynamic environments that require analytical thinking and problem-solving..</p>
            <p class="glow-text"><em>Aspiring to become a financial strategist and help businesses achieve financial success.</em></p>
        <section>
    <h2 data-aos="fade-up">Professional Experience</h2>
    
    <div class="company">
        <h3>Datafortune Software Solution</h3>
        <img src="images/datafortune.png" alt="Datafortune Logo" width="150">
    </div>

     <div class="company">
        <h3>Sahyadri Hospitals Pvt Ltd.</h3>
        <img src="images/Sahyadri Logo.png" alt="Sahyadri Logo" width="150">
    </div>

    <div class="company">
        <h3>JNP Associates</h3>
        <img src="images/logo-JNP.png" alt="JNP Associates Logo" width="150">
    </div>
</section>
        <h2 data-aos="fade-left">Skills</h2>
        <ul>
            <p class="center-text">Accounting
            <p class="center-text">Financial Modelling
            <p class="center-text">Budgeting
            <p class="center-text">Financial Planning
            <p class="center-text">Investment Banking
        </ul>
        <h2 data-aos="fade-right">Hobbies</h2>
        <ul>
        <p>Travelling</p>
        <p>Programming (Learning)</p>
        <p>Work on new Technology</p>
        <p>Reserch on interesting topics</p>
        <p>Social Activity</p>
        </ul>
        <h2 data-aos="fade-down">Contact</h2>
        <p>Email: ramchapke01@gmail.com</p>
        <p>linkedin: https://www.linkedin.com/in/ram-chapke-040734178/</p>
        <p>Contact: 9021787284</p>
     <script>
        const canvas = document.getElementById("rainCanvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let raindrops = [];

        function createRaindrops() {
            for (let i = 0; i < 100; i++) {
                raindrops.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    length: Math.random() * 15 + 5,
                    speed: Math.random() * 3 + 2
                });
            }
        }

        function drawRain() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "rgba(173, 216, 230, 0.6)";
            ctx.lineWidth = 2;
            ctx.lineCap = "round";

            raindrops.forEach((drop) => {
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

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        createRaindrops();
        drawRain();
    </script>
    <script>
    AOS.init();
</script>
<div class="thank-you">
    <h2>✨ Thank You for Visiting! ✨</h2>
    <p>Hope you liked my portfolio. Let's connect and create something amazing together! 🚀</p>
</div>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            document.querySelector(".thank-you").classList.add("show-thank-you");
        }, 1000);
    });
</script>
