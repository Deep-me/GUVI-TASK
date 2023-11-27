<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "registration";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM registration";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $name = $row['name'];
        $dob = $row['dob'];
        $gender = $row['gender'];
        $qualification = $row['qualification'];
        $email = $row['email'];
        $address = $row['address'];
        $country = $row['country'];
        $state = $row['state'];
    }
} else {
    echo "0 results";
}
$conn->close();
?>
