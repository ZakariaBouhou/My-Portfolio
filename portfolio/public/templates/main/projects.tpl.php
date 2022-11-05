<?php
    $requete = $bdd->prepare('SELECT name, pictureDesktop, pictureMobile, link, alt FROM projects');
    $requete->execute();
?>

<div class="all-projects" id="projects">
    <h2>Projets</h2>
    <p>
        Forum, site de petites annonces, clones, projet en groupe...<br>
        Ici, mes principales réalisations<br>
    </p>
    <div class="projects-wrapper">
        <?php while ($resultat = $requete->fetch()) { ?>    
            <picture>
                <a href="<?=  $resultat['link'] ?>" target="_blank"><source srcset="<?=  $resultat['pictureMobile'] ?>"
                media="(max-width: 767px)">
                <img src="<?= $resultat['pictureDesktop'] ?>" alt="<?=  $resultat['alt'] ?>"></a>
            </picture>
        <?php } ?>
    </div>
</div>