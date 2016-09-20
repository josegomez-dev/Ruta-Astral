<?php
	
	$host = 'localhost';
	$username = 'root';
	$password = '';
	$database = "cenfo_ps1";

	$conn = new mysqli($host, $username, $password, $database);

	$conn->set_charset("utf8");

	if($conn->connect_errno){
		die("No se pudo conectar");
	}

?>