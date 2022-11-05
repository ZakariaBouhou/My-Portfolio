<?php
    $requete = $bdd->prepare('SELECT name, picture, alt FROM technos');
    $requete->execute();
?>

<div class="abilities" id="abilities">
    <h2>Langages et outils</h2>
    <p>Mes compagnons de combat...</p>
    <div class="items">
        <?php while ($resultat = $requete->fetch()) { ?>          
            <img src=" <?=  $resultat['picture'] ?>" alt="<?=  $resultat['alt'] ?>">
        <?php } ?>
    </div>
</div>