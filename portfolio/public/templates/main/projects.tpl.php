<?php

require __DIR__. '/../../data.php';
?>
<div class="projects" id="projects">
    <h2>Réalisations</h2>
    <div class="projects-container">
        <?php foreach ($projects as $key => $value): ?>
        <div class="content-project">
            <div class="itemsProject">
                <h3><?=$value['Titre']?></h3>
                <p><?=$value['Description']?></p>
                <p><?=$value['Description complémentaire']?></p>
                <p><a href="<?=$value['Lien1']?>">Lien du repo </a></p>
                <?php if ($value['Lien2'] !== ''):?>
                <p><a href="<?=$value['Lien2']?>">Démo du projet</a></p>
                <?php endif ?>
            </div>
        </div>
        <?php  endforeach ?>
    </div>
</div>