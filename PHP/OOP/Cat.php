<?php


class Cat{

    public $name;
    public $color;
    public $weight;

    function __construct($name, $color, $weight)
    {
        $this->name = $name;
        $this->color = $color;
        $this->weight = $weight; 
    }

    public function dako()
    {
        echo "Mauuuuuuuuuuu";
    }

    
}

