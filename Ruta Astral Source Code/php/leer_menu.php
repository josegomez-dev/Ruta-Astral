<?php 

  	require_once 'conexion.php'; 
  
	//$sentecia_sql = "CALL pa_consultar_personas"; 	//Deninir a cual procedimiento se va a llamar
	$sentecia_sql = "SELECT * FROM `PLATOS` WHERE activo = true;"; 	//Deninir a cual procedimiento se va a llamar
	
														//CALL es la palabra reservada para llamar a un procedimiento almacenado en la base de datos

	$result = $conn->query($sentecia_sql);

	if(!$result)die("Falló la conexión " . $conn->error);
	
	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	//Tomando el result y metiendo los datos en un arreglo
		$filas[] = $registro;
	}
	
	echo json_encode($filas);
	
?>
