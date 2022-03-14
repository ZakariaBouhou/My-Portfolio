    <?php require __DIR__ . '../../../mail.php';?>
    <div class="contact" id="contact">
        <h2>Contact</h2>
        <form action="" method="POST" class="form-container" id="theForm">
            <div class="form">
                <p>Tous les champs sont obligatoires.</p>
                <label for="name"><abbr>*</abbr>Nom</label>
                <input type="text" name="name" id="name" placeholder="Votre nom et/ou organisation" required pattern="^[A-Za-z0-9 '-]+$">
            </div>
            <div class="form">
                <label for="email"><abbr>*</abbr>Email</label>
                <input type="email" name="email" id="email" placeholder="Votre email" required>
            </div>
            <div class="form">
                <label for="object"><abbr>*</abbr>Objet</label>
                <input type="text" name="object" id="object" placeholder="L'objet de votre message" required>
            </div>
            <div class="form">
                <label for="message"><abbr>*</abbr>Message</label>
                <textarea name="message" id="message" placeholder="Saisissez votre message" required></textarea>
            </div>
            <div class="form">
                <input type="button" value="Tout effacer">
            </div>
            <div class="form">
                <input type="submit" value="Envoyer" name="envoyer">
            </div>
        </form>
    </div>
</main>