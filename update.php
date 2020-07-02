
<?php
    $sname = "localhost";
    $name = "root";
    $pwd = "";
    $db = "guvi";
    $age = $_POST["age"];
    $dob = $_POST["dob"];
    $contact = $_POST["contact"];
    $email=$_POST['email'];

    $firstName=$_POST['firstName'];
    $secondName=$_POST['secondName'];
    $city=$_POST['city'];
    $country=$_POST['country'];
    $password=$_POST['password'];

    $con = new mysqli($sname,$name,$pwd,$db);
    $stmt = $con->prepare("UPDATE signup SET firstname=?,secondname=?,city=?,country=?,password=?, age=?,dob=?,contact=? WHERE email=?");
    $stmt -> bind_param("sssssisis",$firstName,$secondName,$city,$country,$password,$age,$dob,$contact,$email);
    $stmt -> execute();

    $stmt -> close();
    $con -> close();
    echo "success";
?>