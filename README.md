<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ram Chapke Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- AOS Animation -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    
    <!-- External CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

<!-- Rain Background -->
<canvas id="rainCanvas"></canvas>

<div class="container">

    <!-- Profile -->
    <div class="profile-wrapper">
        <img src="images/final image.png" class="profile-pic" alt="Profile">
    </div>

    <h1>Ram Chapke</h1>
    <p><em>“In the symphony of financial excellence, the best accountants are the conductors of prosperity.”</em></p>

    <h2 data-aos="fade-up">Professional Experience</h2>

    <div class="company">
        <h3>Datafortune Software Solution</h3>
        <img src="images/datafortune.png" alt="">
    </div>

    <div class="company">
        <h3>Sahyadri Hospitals Pvt Ltd.</h3>
        <img src="images/Sahyadri Logo.png" alt="">
    </div>

    <div class="company">
        <h3>JNP Associates</h3>
        <img src="images/logo-JNP.png" alt="">
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

<!-- Cursor -->
<div class="cursor"></div>

<!-- Scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="script.js"></script>

</body>
</html>
