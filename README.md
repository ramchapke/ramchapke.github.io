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
        .container { max-width: 600px; margin: auto; }
        .profile-pic {
            display: block;
            margin: 20px auto;
            max-width: 100%;
            height: auto;
        }
        .section {
            display: none;
            margin-top: 20px;
        }
        .button {
            background: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            margin: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <canvas id="rainCanvas"></canvas>
    <div class="container">
        <img src="images/final image.png" alt="My Profile Picture" class="profile-pic">
        <p>Welcome to my portfolio!</p>
        
        <button class="button" onclick="toggleSection('experience')">Professional Experience</button>
        <div id="experience" class="section">
            <h2>Professional Experience</h2>
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
        </div>
        
        <button class="button" onclick="toggleSection('skills')">Skills</button>
        <div id="skills" class="section">
            <h2>Skills</h2>
            <ul>
                <li>Accounting</li>
                <li>Financial Modelling</li>
                <li>Budgeting</li>
                <li>Financial Planning</li>
                <li>Investment Banking</li>
            </ul>
        </div>
        
        <button class="button" onclick="toggleSection('hobbies')">Hobbies</button>
        <div id="hobbies" class="section">
            <h2>Hobbies</h2>
            <ul>
                <li>Travelling</li>
                <li>Programming (Learning)</li>
                <li>Working on new Technology</li>
                <li>Researching interesting topics</li>
                <li>Social Activities</li>
            </ul>
        </div>
        
        <button class="button" onclick="toggleSection('contact')">Contact</button>
        <div id="contact" class="section">
            <h2>Contact</h2>
            <p>Email: ramchapke01@gmail.com</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ram-chapke-040734178/" target="_blank">Ram Chapke</a></p>
            <p>Contact: 9021787284</p>
        </div>
    </div>
    
    <script>
        function toggleSection(id) {
            var section = document.getElementById(id);
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
    </script>
    
    <script>
        AOS.init();
    </script>
</body>
</html>
