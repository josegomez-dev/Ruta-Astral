<?php
  require_once 'conexion.php';  
 
  $idMesa = $_POST['id'];
  $tipoOrden = $_POST['tipo'];
  
  $sentencia_sql = "CALL crear_orden ($idMesa, $tipoOrden)";

  $result = $conn->query($sentencia_sql);

	if(!$result)die("Falló la conexión" . $conn->error);
	
	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	
		$filas[] = $registro;
	}

	echo json_encode($filas);

?>
