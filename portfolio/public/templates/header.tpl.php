<?php 
    require __DIR__ . '../../mail.php';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Zakaria BOUHOU</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="icon" href="assets/zbfavicon.ico" />
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <div class="container">
        <header>
            <nav>
                <a id="home" href="#home">Zakaria Bouhou</a>
                <div class="button-Container">
                    <div class="themeToggleButton">
                        <input type="checkbox" class="checkbox" id="checkbox">
                        <label for="checkbox" class="label">
                            <i class="fas fa-moon"></i>
                            <i class='fas fa-sun'></i>
                            <div class='ball'></div>
                        </label>
                    </div>
                    <div class="burger">
                        <input class="menu-btn" type="checkbox" id="menu-btn"/>
                        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    </div>
                </div>
                <ul class="menu">
                    <li class="projects"><a href="#projects">Projets</a></li>
                    <li class="skills"><a href="#skills">Compétences</a></li>
                    <li class="contact"><a href="#contact">Contact</a></li>
                    <li><a class="button-send" href="#"></a></li>
                </ul>
            </nav>
        </header>