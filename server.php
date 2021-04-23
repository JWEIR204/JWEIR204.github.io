<?php
  	$username = "";
  	$password = "";
  	$errors = array();


	// Create connection
	$db = mysqli_connect('localhost', 'root', '', 'IP3_Group10');

	// Check connection
  	if ($db->connect_error) {
	  die("Connection failed: " . $db->connect_error);
	}

	//If submit query is clicked
	if(isset($_POST['sendQuery'])){
		$name = mysqli_real_escape_string($db, $_POST['name']);
		$email = mysqli_real_escape_string($db, $_POST['email']);
		$query = mysqli_real_escape_string($db, $_POST['query']);

		if(empty($name)){
			array_push($errors, "Please enter a name");
		}

		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  			array_push($errors, "Invalid email format");
		}

		if(empty($query)){
			array_push($errors, "Please enter a query");
		}

		if(count($errors) == 0){
			$sql = "INSERT INTO contact (name, email, query) VALUES ('$name', '$email', '$query')";
			mysqli_query($db, $sql);
		}
	}
?>