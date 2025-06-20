<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        <script>
function toggleInfo(id) {
    const boxes = document.querySelectorAll('.info-box');
    boxes.forEach(box => box.style.display = 'none'); // hide all
    document.getElementById(id).style.display = 'block'; // show clicked
}
</script>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
            background-color: black;
            color: white;
        }
        h1 { color: white; }
        .container { max-width: 600px; margin: auto; }
        .profile-pic {
    display: block;
    margin: 20px auto;
    max-width: 100%;
    height: auto;
}
        .company {
            text-align: center;
            margin: 20px 0;
        }
        .company img {
            display: block;
            margin: auto;
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
            background: rgba(255, 255, 255, 0.1);
            padding: 10px 15px;
            border-radius: 8px;
        }
        #rainCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    </style>
</head>
<body>
    <canvas id="rainCanvas"></canvas>
    <div class="container">
        <img src="images/final image.png" alt="My Profile Picture" class="profile-pic">
         <div class="frame">
        <p>Welcome to my portfolio!</p>
        <p class="glow-text"><em>“In the symphony of financial excellence, the best accountants are the conductors of prosperity.”</em></p>
           <p><strong>Passionate and detail-oriented finance professional with an MBA in Finance, specializing in accounting, taxation, and financial analysis.</strong>  
    <strong>With hands-on experience in managing financial statements, budgeting, and compliance, I bring expertise in optimizing financial processes and driving business growth.  
    Committed to accuracy and strategic financial planning, I thrive in dynamic environments that require analytical thinking and problem-solving.<strong>
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
            <li>Programming (Learning)</li>
            <li>Working on new Technology</li>
            <li>Researching interesting topics</li>
            <li>Social Activities</li>
        </ul>
        <h2 data-aos="fade-down">Contact</h2>
        <p>Email: ramchapke01@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ram-chapke-040734178/" target="_blank">Ram Chapke</a></p>
        <p>Contact: 9021787284</p>
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
        <h2 data-aos="zoom-in">More about the finance</h2>
<div>
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Finance Info Toggle</title>
  <style>
    body {
      background-color: #0e0e0e;
      color: #fff;
      font-family: 'Segoe UI', sans-serif;
      padding: 20px;
      text-align: center;
    }

    h2 {
      color: #f04890;
      margin-bottom: 30px;
    }

    .button-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
    }

    button {
      background: linear-gradient(145deg, #ff416c, #ff4b2b);
      color: #fff;
      padding: 12px 24px;
      border: none;
      border-radius: 40px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 0 10px #ff4b2b80;
    }

    button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px #ff4b2bcc;
    }

    .info-box {
      display: none;
      background: #1a1a1a;
      border-left: 5px solid #ff416c;
      border-radius: 10px;
      margin-top: 20px;
      padding: 20px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      animation: fadeIn 0.4s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 600px) {
      .button-container {
        flex-direction: column;
        gap: 10px;
      }
    }
  </style>
</head>
<body>

  <h2>Finance & Tax Topics</h2>

  <div class="button-container">
    <button onclick="toggleInfo('tds')">💰 TDS</button>
    <button onclick="toggleInfo('gst')">🧾 GST</button>
    <button onclick="toggleInfo('reconciliation')">🏦 Bank Reconciliation</button>
  </div>

  <div id="tds" class="info-box">
    <h3>TDS (Tax Deducted at Source)</h3>
    <p>TDS is the tax deducted by a payer before making certain payments such as salary, interest, rent, or commission.</p>
  </div>

  <div id="gst" class="info-box">
    <h3>GST (Goods and Services Tax)</h3>
    <p>GST is a comprehensive indirect tax on the manufacture, sale, and consumption of goods and services in India.</p>
  </div>

  <div id="reconciliation" class="info-box">
    <h3>Bank Reconciliation</h3>
    <p>It is the process of matching the balances in accounting records to the corresponding bank statement balances.</p>
  </div>

  <script>
    function toggleInfo(id) {
      const boxes = document.querySelectorAll('.info-box');
      boxes.forEach(box => {
        box.style.display = box.id === id ? 
          (box.style.display === 'block' ? 'none' : 'block') : 'none';
      });
    }
  </script>

</body>
</html>

           <p>Thank you for visiting my portfolio!</p>
        <script src="script.js"></script>
 </script>
