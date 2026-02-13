<!DOCTYPE html>
<html>
<head>
    <title>My Cinematic Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<canvas id="rainCanvas"></canvas>

<div class="container">
    <div class="profile-wrapper">
        <img src="https://via.placeholder.com/300x400" class="profile-pic">
    </div>

    <h1>Your Name</h1>
    <p>Web Developer | Designer | Creative Coder</p>

    <button onclick="toggleInfo('experience')">Experience</button>
    <button onclick="toggleInfo('skills')">Skills</button>
    <button onclick="toggleInfo('hobbies')">Hobbies</button>

    <div id="experience" class="info-box">
        <h3>Experience</h3>
        <p>2+ Years in Web Development</p>
    </div>

    <div id="skills" class="info-box">
        <h3>Skills</h3>
        <p>HTML, CSS, JavaScript</p>
    </div>

    <div id="hobbies" class="info-box">
        <h3>Hobbies</h3>
        <p>Coding, Gaming, Music</p>
    </div>
</div>

<div class="cursor"></div>

<script src="script.js"></script>
</body>
</html>
