<?php 


    $name = '';
    $error_name = '';
    $error_pass = '';

    // check request is form submission
    if(isset($_REQUEST['send'])){
        $name = $_REQUEST['name'];
        if(!$name){
            $error_name = "Name is Required";
        }

        $password = $_REQUEST['password'];
        if(!$password){
            $error_pass = "Passowrd is Required";
        }
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Form Handle</h1>
    <form action="" method="post">
        <input type="text" name="name">
        <br>
        <span style="color: red;"><?php echo $error_name ?></span>
        <br>
        <input type="text" name="password">
        <br>
        <span style="color: red;"><?php echo $error_pass ?></span>
        <br>
        <input type="submit" value="Send" name="send">
    </form>

</body>
</html>