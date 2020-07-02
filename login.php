<?php

    $sname = "localhost";
    $name = "root";
    $pwd = "";
    $db = "guvi";
    $user = $_POST["user"];
    $pass=$_POST["pass"];

    $con = new mysqli($sname,$name,$pwd,$db);
    $stmt =  $con->prepare("SELECT * FROM signup WHERE email=?");
    $stmt -> bind_param("s",$user);
    $stmt -> execute();
    $select_stmt= $stmt->get_result();
    $user_value = $select_stmt->fetch_assoc();

    if($user_value){
        $user_value=$user_value['password'];
        if($user_value == $pass){
            echo "success";
        }else{
            echo "Invalid password.";
        }
    }else{
        echo "Invalid E-mail.Please try with registered E-mail.";
    }

    $select_stmt -> close();

    $con -> close();

?>