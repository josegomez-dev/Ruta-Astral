<?php
  require_once 'conexion.php';  
  $conexion = new mysqli($host_name,$user_name,$password,$data_base);


  if($conexion->connect_error)die($conexion->connect_error);
  $conexion->set_charset("utf8");

  $idOrden = $_POST['id'];
  
  $sentencia_sql = "SELECT * FROM `ordenes`
  	WHERE id_orden=$idOrden";

  $result = $conexion->query($sentencia_sql);

	if(!$result)die("Falló la conexión" . $conexion->error);
	
	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	
		$filas[] = $registro;
	}

	echo json_encode($filas);

?>
