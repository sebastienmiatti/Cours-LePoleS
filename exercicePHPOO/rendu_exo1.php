<?php
 class Chat
 {
 private static $Prenom;
 private static $Age;
 private static $Couleur;
 private static $Sexe;
 private static $Race;

  public function getInfos() // getter d'une propriété static privée
  {
      return self::$Prenom;
      return self::$Age;
      return self::$Couleur;
      return self::$Sexe;
      return self::$Race;
  }
 }

 class chat1 extends Chat
 {

 }

 class chat2 extends Chat
 {

 }

 class chat3 extends Chat
 {
     
 }


$chat1 = new chat();
$chat1 -> getInfos();

$chat2 = new chat();
$chat2 -> getInfos();

$chat3 = new chat();
$chat3 -> getInfos();


 ?>
