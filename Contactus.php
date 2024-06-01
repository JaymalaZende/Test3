<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "savatol";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$name = $data['name'];
$queries = $data['queries'];
$mobile = $data['mobile'];
$email = $data['email'];

$sql = "INSERT INTO contact us (name, mobile, email, message)
VALUES ('".$name."', '".$mobile."', '".$email."', '".$queries."')";

if ($conn->query($sql) === TRUE) {
  echo "SUCCESS";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>