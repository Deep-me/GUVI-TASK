<?php
    $name=$_POST['name'];
    $dob=$_POST['dob'];
    $gender=$_POST['gender'];
    $qualification=$_POST['qualification'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $address=$_POST['address'];
    $country=$_POST['country'];
    $state=$_POST['state'];

    $conn = new mysqli('localhost', 'root','','test');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(name,dob,gender,qualification,email,password,address,country,state)"
        values(?,?,?,?,?,?,?,?,?));
        $stmt->bind_param("sssssssss",$name,$dob,$gender,$qualification,$email,$password,$address,$country,$state);
        $stmt->execute();
        echo "Registration Successfull...";
        $stmt->close();
        $conn->close();
    }
?>