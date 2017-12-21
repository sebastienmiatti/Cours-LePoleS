<?php

try {
    $bdd = new PDO('mysql:host=localhost;dbname=site_cv', 'root', '') or die(print_r($bdd->errorInfo()));
    $bdd->exec('SET NAMES utf8'); //on force la prise en charge de l'UTF8
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

// host=db714439183.db.1and1.com;dbname=db714439183', 'dbo714439183', '@Tchikito9792'
