<?php

//$test = 'pl';
     
    if (isset($_POST['envoyer'])) {

        //echo '<h1>YATAAAAAAAAAA<h1>';
        
        if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['object']) && !empty($_POST['message'])) {

            //Cette fonction permet d'éviter des injections de code par des chevrons <> en les échappant
            $name = htmlspecialchars(strip_tags($_POST['name']));
            $nameValid = trim($name);
            
            $email = htmlspecialchars(strip_tags($_POST['email']));
            
            $object = htmlspecialchars(strip_tags($_POST['object']));
            $objectValid = trim($object);
            
            $message = htmlspecialchars(strip_tags($_POST['message']));
            $messageValid = trim($message);
            
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

               header('Location: index.php?error=email&message=Adresse e-mail non valide');
               exit();
                
            }

            if (strlen($nameValid) < 3) {

               header('Location: index.php?error=name#contact');
               exit();
                
            }
            if (strlen($objectValid) < 3) {

               header('Location: index.php?error=object#contact');
               exit();
                
            }
            if (strlen($messageValid) < 3) {

               header('Location: index.php?error=message#contact');
               exit();
                
            }
            
                       
            $to = 'admin@zak-bouhou.com';
            $headers = [
                "From" => $_POST['email']
            ];
            $object = $_POST['object'];
            $message = $_POST['message'];
            
            mail($to, $object, $message, $headers);

            

        }         
        
    }

?>