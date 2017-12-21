<?php

// on récupère la classe Contact
require('Contact.class.php');

// on vérifir que le formulaire a été posté
if (!empty($_POST)) {
  // on éclate le $_POST en tableau qui permet d'accéder directement au champs par des variables
  extract($_POST);

  // on effectue une validation des données du formulaire et on vérifie la validité de l'email
  $valid = (empty($nom) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($sujet) || empty($message)) ? false : true; // écriture ternaire pour if / else

  $erreurnom = (empty($nom)) ? 'Indiquez votre nom' : null;
  $erreuremail = (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) ? 'Entrez un email valide' : null;
  $erreursujet = (empty($sujet)) ? 'Indiquez un sujet' : null;
  $erreurmessage = (empty($message)) ? 'Parlez donc !!' : null;

  // si tous les champs correctement renseignés
  if ($valid) {
    // on crée un nouvel objet (ou une instance) de la class Contact.class.php
    $contact = new Contact();
    // on utilise la méthode insertContact pour insérez en BDD
    $contact->insertContact($nom, $email, $sujet, $message);
  }
}
// on utilise la méthode sendMail de la classe Contact.class.php
//$contact->sendEmail($sujet, $email, $message);

// on efface les valeurs du formulaires
unset($nom);
unset($sujet);
unset($message);
unset($email);
unset($contact);

// on créé une variable de succès
$success = 'Message envoyé !';
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <!--responsive viewport meta tag-->
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Formulaire de contact</title>
      <!-- Bootstrap -->
      <link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css"/>
    </head>

    <body>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <img src="grass.jpg" alt="photo nature" style="height: 71vh; width: 27vw; border-radius: 1%">
              </div>
              <div class="col-md-6 offset-2">
                <h3>Formulaire de contact</h3>
                <h5>Réalisé en POO</h5>
                <!-- BONUS EMAIL -->
                <?php if (isset($success)): ?>
                    <div class="alert alert-success" role="alert"><?= $success; ?></div>
                <?php endif ?>
                <!-- FIN BONUS EMAIL -->
                <form action="index.php" method="post">

                  <div class="form-group">
                    <label for="nom">Nom : </label>
                    <span class="error"><?php if (isset($errornom)) echo $errornom; ?></span>
                    <input class="form-control" type="text" name="nom" value="<?php if(isset($nom)) echo $nom; ?>">
                  </div>

                  <div class="form-group">
                    <label for="email">Email :</label>
                    <span class="error"><?php if (isset($erreuremail)) echo $erreuremail; ?></span>
                    <input id="email" class="form-control" type="text" name="email" value="<?php if (isset($email)) echo $email; ?>">
                  </div>

                  <div class="form-group">
                    <label for="sujet">Sujet :</label>
                    <span class="error"><?php if (isset($erreursujet)) echo $erreursujet; ?></span>
                    <input class="form-control" type="text" name="sujet" value="<?php if (isset($sujet)) echo $sujet; ?>">
                  </div>

                  <div class="form-group">
                    <label for="message">Message :</label>
                    <span class="error"><?php if (isset($erreurmessage)) echo $erreurmessage; ?></span>
                    <textarea class="form-control" name="message" cols="30" rows="10"><?php if (isset($message)) echo $message; ?></textarea>
                  </div>

                  <input type="submit" class="btn btn-outline-info btn-block btnsubmit" value="Envoyer" />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /.container -->

      <!-- JS for Bootstrap -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    </body>
