<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ram Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    <link rel="stylesheet" href="style.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script src="script.js" defer></script>
</head>

<body>

    <!-- Cinematic Cursor -->
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>

    <!-- Rain Canvas -->
    <canvas id="rainCanvas"></canvas>

    <div class="container">

        <img src="images/final image.png" class="profile-pic">

        <div class="frame">
            <p>Welcome to my portfolio!</p>
            <p><em>“In the symphony of financial excellence, the best accountants are the conductors of prosperity.”</em></p>
        </div>

        <h2>Software & Tools Known</h2>

        <div class="button-container">
            <button onclick="toggleInfo('accounting')">Accounting</button>
            <button onclick="toggleInfo('office')">Productivity</button>
            <button onclick="toggleInfo('tech')">Tech</button>
        </div>

        <div id="accounting" class="info-box">
            <ul>
                <li>Tally ERP</li>
                <li>Zoho Books</li>
                <li>GST Portal</li>
            </ul>
        </div>

        <div id="office" class="info-box">
            <ul>
                <li>MS Excel</li>
                <li>Google Sheets</li>
            </ul>
        </div>

        <div id="tech" class="info-box">
            <ul>
                <li>GitHub Pages</li>
                <li>HTML, CSS, JS</li>
            </ul>
        </div>

    </div>

    <script>
        AOS.init();
    </script>

</body>
</html>
