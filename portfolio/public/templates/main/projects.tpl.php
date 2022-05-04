<?php
    $requete = $bdd->prepare('SELECT * FROM `projects`');
    $requete->execute();

    $imgAltClass = ' alt=\'langages utilisées\' class=\'iconSkills\'>';
?>


<div class="projects" id="projects">
    <h2>Réalisations</h2>
    <div class="projects-container">
        
        <?php while($resultat = $requete->fetch()) { ?>
                     
            <div class="content-project">
                <div class="itemsProject">
                
                    <h3><?=$resultat['title']?></h3>               
         
                    <?= !empty($resultat['logo_symfony']) ? '<img src='.$resultat['logo_symfony']. $imgAltClass : '' ?>             
                    <?= !empty($resultat['logo_php']) ? '<img src='.$resultat['logo_php']. $imgAltClass : '' ?>             
                    <?= !empty($resultat['logo_mysql']) ? '<img src='.$resultat['logo_mysql']. $imgAltClass : '' ?>             
                    <?= !empty($resultat['logo_javascript']) ? '<img src='.$resultat['logo_javascript']. $imgAltClass : '' ?>             
                      
                    <p class="infosProjects describeHidden"><?=$resultat['first_describe']?></p>

                    <?= !empty($resultat['second_describe describeHidden']) ? '<p>'.$resultat['second_describe'].'</p>' : '' ?>             
                    
                    <p><a href="<?=$resultat['link_github']?>">Lien du repo </a></p>
                    
                    <?php if ($resultat['link_youtube'] !== ''):?>
                        <p><a href="<?=$resultat['link_youtube']?>">Démo du projet</a></p>
                    <?php endif ?>
                </div>
            </div>                  
        <?php } ?>
    </div>
</div>