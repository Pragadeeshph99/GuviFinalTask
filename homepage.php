<?php

    $sname = "localhost";
    $name = "root";
    $pwd = "";
    $db = "guvi";
    $email = $_POST["email"];

    $con = new mysqli($sname,$name,$pwd,$db);
    $stmt =  $con->prepare("SELECT * FROM signup WHERE email=?");
    $stmt -> bind_param("s",$email);
    $stmt -> execute();
    $select_stmt= $stmt->get_result();
    $user_value = $select_stmt->fetch_assoc();

    $fname=$user_value['firstname'];
    $firstName=$user_value['firstname'];
    $secondName=$user_value['secondname'];
    $city=$user_value['city'];
    $country=$user_value['country'];
    $password=$user_value['password'];
    $email=$user_value['email'];
    $age=$user_value['age'];
    $dob=$user_value['dob'];
    $contact=$user_value['contact'];

    $arr=array($fname,$firstName,$secondName,$city,$country,$password,$email,$age,$dob,$contact);

    $con -> close();
    $data['result'] = $arr;
    echo json_encode($data);
    exit;
?>