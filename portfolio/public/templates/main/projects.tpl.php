<?php
    /* $requete = $bdd->prepare('SELECT name, pictureDesktop, pictureMobile, link, alt FROM projects');
    $requete->execute(); */
?>

<div class="all-projects" id="projects">
    <h2>Mes réalisations</h2>
    <!-- <div class="projects-wrapper">
        <?php //while ($resultat = $requete->fetch()) { ?>    
            <picture>
                <a href="<?=  $resultat['link'] ?>" target="_blank"><source srcset="<?=  $resultat['pictureMobile'] ?>"
                media="(max-width: 767px)">
                <img src="<?= $resultat['pictureDesktop'] ?>" alt="<?=  $resultat['alt'] ?>"></a>
            </picture>
        <?php //} ?>
    </div> -->
    <img src="../../assets/images/photos/zak.png" alt="photo for desktop">

</div>