
<div class="skills" id="skills">
    <h2>Compétences</h2>
    <div class="tool-container">
        <?php foreach ($tools as $key => $value): ?>
        <div class="tools">
            <p class="skillName"><?= $key?></p>
            <img class="iconSkills"src="<?= $value[0]?>">
        </div>
        <?php endforeach ?>               
    </div>
</div>