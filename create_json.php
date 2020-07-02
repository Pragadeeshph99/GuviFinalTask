<?php

function get_data(){
    $con =mysqli_connect("localhost","root","","guvi");
    $query="SELECT * from signup";
    $result=mysqli_query($con,$query);
    $data = array();

    while($row = mysqli_fetch_array($result)){
        $data[]=array(
            'firstname'  => $row["firstname"],
            'secondname' => $row["secondname"],
            'city'   => $row["city"],
            'country'=>  $row["country"],
            'password' => $row["password"],
            'email' => $row["email"],
            'age' => $row["age"],
            'dob' => $row["dob"],
            'contact'=> $row["contact"],

       );
    }

 return json_encode($data);
}
 echo '<pre>';
 print_r(get_data());
 echo '</pre>';

?>