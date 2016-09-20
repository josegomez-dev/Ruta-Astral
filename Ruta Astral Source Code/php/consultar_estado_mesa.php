<?php
  require_once 'conexion.php';  
  

  $idMesa = $_POST['prueba'];
  
  $sentencia_sql = "SELECT `estado`
		FROM `MESAS`
		WHERE id_mesa = '$idMesa'";

  $result = $conn->query($sentencia_sql);

	if(!$result)die("Falló la conexión" . $conn->error);
	

	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	
		$filas[] = $registro;
	}

	echo json_encode($filas);

?>


