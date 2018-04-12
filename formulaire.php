<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=JSctropbien;charset=utf8', 'root', 'pangot');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage('Impossible de se connecter à la base de données'));
};
$lastName = $_POST['lastName'];
$firstName = $_POST['firstName']; 
$num = $_POST['num'];
$fixe = $_POST['fixe'];
$email = $_POST['email'];
$adress = $_POST['adress'];
$postal = $_POST['postal'];
$city = $_POST['city'];
$msg = $_POST['msg'];
$req = $bdd->prepare('INSERT INTO contact (lastName, firstName, num, fixe, adress, email, postal, city, msg) VALUES(:lastName, :firstName, :num, :fixe, :email, :adress, :postal, :city, :msg)');
$req->execute(array(
    
    'lastName' => $lastName,
	'firstName' => $firstName,
    'num' => $num,
    'fixe' => $fixe,
    'email' => $email,
	'adress' => $adress,
	'postal' => $postal,
    'city' => $city,
    'msg' => $msg
    ));

echo 'Merci !';

?>