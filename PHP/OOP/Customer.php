<?php



class Customer
{

    public $name = '';
    public $date_of_birth = '';
    public $gender = '';
    public $is_active = false;
    private $ballance = 0;
    public static $bank_name = "Sonali Bank";


    function __construct($name, $dob, $gender)
    {
        $this->name = $name;
        $this->date_of_birth = $dob;
        $this->gender = $gender;
    }

    public function deposit($amount)
    {
        $this->ballance += $amount;
    }

    public function withDraw($amount)
    {
        if($this->ballance >= $amount){
            $this->ballance -= $amount;
        }else{
            echo "Insufficient Balance!";
        }
        
    }

    public function getBallance()
    {
        return $this->ballance;
    }

    public function getBank(){
        return Customer::$bank_name;
    }
}
