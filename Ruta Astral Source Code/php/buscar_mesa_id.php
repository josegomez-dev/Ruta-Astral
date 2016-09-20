<?php
  require_once 'conexion.php';  
  $conexion = new mysqli($host_name,$user_name,$password,$data_base);


  if($conexion->connect_error)die($conexion->connect_error);
  $conexion->set_charset("utf8");

  $idMesa = $_POST['id'];
  
  $sentencia_sql = "SELECT * FROM `mesas`
  	WHERE id_mesa=$idMesa";

  $result = $conexion->query($sentencia_sql);

	if(!$result)die("Falló la conexión" . $conexion->error);
	
	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	
		$filas[] = $registro;
	}

	echo json_encode($filas);

?>
