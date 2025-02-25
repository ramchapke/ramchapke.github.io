<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
            background-color: black;
            color: white;
        }
        h1 { color: white; }
        .container { max-width: 600px; margin: auto; }
        .profile-container {
            position: relative;
            display: inline-block;
        }
        .profile-pic {
            display: block;
            margin: 20px auto;
            max-width: 100%;
            height: auto;
            border-radius: 50%;
            position: relative;
            z-index: 2;
        }
        .flower {
            position: absolute;
            width: 80px;
            height: 80px;
            background: radial-gradient(circle, red, orange, yellow);
            border-radius: 50%;
            filter: blur(5px);
            animation: float 4s infinite ease-in-out alternate;
        }
        .flower:nth-child(1) { top: -30px; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
        .flower:nth-child(2) { top: 50%; left: -30px; transform: translateY(-50%); animation-delay: 1s; }
        .flower:nth-child(3) { top: 50%; right: -30px; transform: translateY(-50%); animation-delay: 2s; }
        .flower:nth-child(4) { bottom: -30px; left: 50%; transform: translateX(-50%); animation-delay: 3s; }
        
        @keyframes float {
            0% { transform: scale(1) translateY(0); opacity: 0.7; }
            100% { transform: scale(1.2) translateY(-10px); opacity: 1; }
        }
    </style>
</head>
<body>
    <canvas id="rainCanvas"></canvas>
    <div class="container">
        <div class="profile-container">
            <img src="images/final image.png" alt="My Profile Picture" class="profile-pic">
            <div class="flower"></div>
            <div class="flower"></div>
            <div class="flower"></div>
            <div class="flower"></div>
        </div>
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
    </div>
</body>
</html>
