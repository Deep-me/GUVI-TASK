<?php
session_start();
require_once 'register.php';

if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}

$username = $_SESSION['email'];

$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $user = $result->fetch_assoc();

} else {

    echo "Error retrieving user data";
}

?>