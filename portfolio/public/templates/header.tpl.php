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
                <ul class="logo">
                    <a href="#home">Accueil</a>
                </ul>
                <input class="menu-btn" type="checkbox" id="menu-btn"/>
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                    <li><a href="#describe">A propos</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#projects">Réalisations</a></li>
                    <li><a href="assets/cv/cvdev.pdf">Mon CV</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>