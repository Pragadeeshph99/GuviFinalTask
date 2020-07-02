<?php
	$sname = "localhost";
	$name = "root";
	$pwd = "";
	$db = "guvi";
	$firstName = $_POST["firstName"];
	$secondName = $_POST["secondName"];
	$email=$_POST["email"];
	$city=$_POST["city"];
	$country=$_POST["country"];
	$password=$_POST["password"];

	if(file_exists('data.json'))
	{
		$current_data = file_get_contents('data.json');
		$array_data[] = json_decode($current_data, true);
		$data[]=array(
			'firstname'  => $firstName,
			'secondname' => $secondName,
			'email' => $email,
			'city' => $city,
			'country' =>  $country,
			'password' => $password
		);
		array_push($array_data,$data);
		$final_data = json_encode($array_data);
	//write json to file
	if (file_put_contents("data.json", $final_data))
		echo "JSON file created successfully...";
	}
	else
		echo "Oops! Error creating json file...";
	$con = new mysqli($sname,$name,$pwd,$db);
	$stmt = $con->prepare("SELECT * FROM signup WHERE email=?");
	$stmt -> bind_param("s",$email);
	$stmt -> execute();
	if ($stmt -> fetch())
	{
		echo "This email is already registered";
	}
	else {
		$stmt = $con->prepare("INSERT INTO signup(firstName,secondName,city,country,password,email) VALUES (?,?,?,?,?,?)");
		$stmt -> bind_param("ssssss",$firstName,$secondName,$city,$country,$password,$email);
		$stmt -> execute();
		echo "success";
	}

	$stmt -> close();
	$con -> close();

?>