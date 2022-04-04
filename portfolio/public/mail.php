<?php

    session_start();
   
    if (isset($_POST['envoyer'])) {

        
        if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['object']) && !empty($_POST['message'])) {

            $_SESSION['name'] = htmlspecialchars(strip_tags($_POST['name']));
            $nameValid = trim($_SESSION['name']);
            //dump($nameValid);
            
            $_SESSION['email'] = htmlspecialchars(strip_tags($_POST['email']));
            
            $_SESSION['object'] = htmlspecialchars(strip_tags($_POST['object']));
            $objectValid = trim($_SESSION['object']);
            
            $_SESSION['message'] = htmlspecialchars(strip_tags($_POST['message']));
            $messageValid = trim($_SESSION['message']);
            
            if (!filter_var($_SESSION['email'], FILTER_VALIDATE_EMAIL)) {

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
            $objectValid = $_POST['object'];
            $messageValid = $_POST['message'];
            
            mail($to, $objectValid, $messageValid, $headers);

            header('Location: index.php?success=1#contact');
            exit();

            

        }         
        
    }

?>