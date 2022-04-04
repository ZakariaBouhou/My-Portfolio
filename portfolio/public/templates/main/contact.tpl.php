    

    <div class="contact" id="contact">
        <h2>Contact</h2>
        <?php
            if (isset($_GET['success']) && $_GET['success'] == 1) { ?>
                <p id="success">Le message a bien été envoyé !</p>
        <?php } ?>             

        <form action="" method="POST" class="form-container" id="theForm">
            <div class="form">
                <p>Tous les champs sont obligatoires.</p>
                <label for="name"><abbr>*</abbr>Nom</label>            
                <?php
                    if (isset($_GET['error']) && $_GET['error'] == 'name') { ?>
                        <small>Le nom doit comporter au minimum 2 caractères</small>
                <?php } ?>             
                <input type="text" name="name" id="name" placeholder="Votre nom et/ou organisation" required pattern="^[A-Za-z0-9 '-]+$" value="<?=  isset($_SESSION['name']) && isset($_GET['error']) ? $_SESSION['name'] : '' ?>">
            </div>

            <div class="form">
                <label for="email"><abbr>*</abbr>Email</label>
                <?php
                    if (isset($_GET['error']) && $_GET['error'] == 'email') {
                        echo '<small>'.$_GET['message'].'</small>';
                    }
                 ?>
                <input type="email" name="email" id="email" placeholder="Votre email" required value="<?=  isset($_SESSION['email']) && isset($_GET['error']) ? $_SESSION['email'] : '' ?>">
            </div>
            <div class="form">

                <label for="object"><abbr>*</abbr>Objet</label>
                <?php
                    if (isset($_GET['error']) && $_GET['error'] == 'object') { ?>
                        <small>L'objet doit comporter au minimum 2 caractères</small>
                <?php } ?>             
                <input type="text" name="object" id="object" placeholder="L'objet de votre message" required value="<?=  isset($_SESSION['object']) && isset($_GET['error']) ? $_SESSION['object'] : '' ?>">
            </div>
            <div class="form">

                <label for="message"><abbr>*</abbr>Message</label>
                <?php
                    if (isset($_GET['error']) && $_GET['error'] == 'message') { ?>
                        <small>Le message doit comporter au minimum 2 caractères</small>
                <?php } ?>             
                <textarea name="message" id="message" placeholder="Saisissez votre message" required > <?= isset($_SESSION['message']) && isset($_GET['error']) ? $_SESSION['message'] : '' ?></textarea>
            </div>
            
            <div class="form">
                <input type="button" value="Tout effacer" name="effacer" class="buttons">
            </div>
            <div class="form">
                <input type="submit" value="Envoyer" name="envoyer" class="buttons">
            </div>
        </form>
    </div>
</main>