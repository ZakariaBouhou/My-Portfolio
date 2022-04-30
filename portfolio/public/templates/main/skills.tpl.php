<?php
    $requete = $bdd->prepare('SELECT name, picture FROM technos');
    $requete->execute();
?>

<div class="skills" id="skills">
    <h2>Compétences</h2>
    <div class="tool-container">      
       <?php while ($resultat = $requete->fetch()) { ?>          
            <div class="tools">
                <p class="skillName"><?= $resultat['name']  ?></p>
                <img class="iconSkills"src="<?=  $resultat['picture'] ?>">
            </div>              
        <?php } ?>
    </div>
</div>