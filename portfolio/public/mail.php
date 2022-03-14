<?php
     
    if (isset($_POST['envoyer'])) {
        if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['object']) && isset($_POST['message'])) {
            if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['object']) && !empty($_POST['message'])) {

                //Cette fonction permet d'éviter des injections de code par des chevrons <> en les échappant
                $name = htmlspecialchars(strip_tags($_POST['name']));
                $email = htmlspecialchars(strip_tags($_POST['email']));
                $object = htmlspecialchars(strip_tags($_POST['object']));
                $message = htmlspecialchars(strip_tags($_POST['message']));
            
                $to = 'admin@zak-bouhou.com';
                $headers = [
                    "From" => $_POST['email']
                ];
                $object = $_POST['object'];
                $message = $_POST['message'];

                mail($to, $object, $message, $headers);
            }
            
        }
    }

?>