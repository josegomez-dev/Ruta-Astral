<?php 
	require "login.php";

    $conn = new mysqli($host_name, $user_name, $password, $data_base);

	

	if($conn->connect_error)die($conn->error);
	$conn->set_charset("utf8");
	$sentencia_sql= "Call pa_consultar_personas";

	$result=$conn->query($sentencia_sql);

	if(!$result)die("Fallo la conexión").$conn->error);
	
	$mesas=array();

	while($mesas=mysqli_fetch_assoc($result)){
		$mesas[]=$registro;
	}

echo json_encode($mesas);





?>