<?php

require_once('./Cat.php');
require_once('./Customer.php');


$cat_one = new Cat('Cute Cat', 'blue', '4kg');
$cat_two = new Cat('Nice Cat', 'Gray', '3.5kg');

// $cat_one->name = "Cute Cat";
// $cat_one->color = "red";
// $cat_one->weight = '3kg';

// echo $cat_one->name."<br/>";
// echo $cat_two->name."<br/>";

// $cat_two->dako();
// $cat_one->dako();


$atik = new Customer("Atikuz", '08-09-1999', 'Male');
$anas = new Customer('Anas', '08-11-2005', "Male");

echo $atik->getBank() . "<br />" ;
echo $anas->getBank() . "<br />" ;
Customer::$bank_name = "Janata Bank";
echo $atik->getBank() . "<br />" ;
echo $anas->getBank() . "<br />" ;

// echo $atik->ballance;
