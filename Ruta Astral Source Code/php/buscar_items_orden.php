<?php
  require_once 'conexion.php';  
  

  $estado = $_POST['estado'];
  $idMesa = $_POST['id'];
  
	$sentencia_sql = "SELECT ORDENES.id_mesa,
	  	ORDENES.id_orden,
	  	PLATOS_X_ORDEN.id_plato,
	  	PLATOS_X_ORDEN.estado
	FROM `ORDENES`
	INNER JOIN `PLATOS_X_ORDEN`
	ON ORDENES.id_orden=PLATOS_X_ORDEN.id_orden
	WHERE PLATOS_X_ORDEN.estado <> '$estado'
	AND ORDENES.id_mesa = $idMesa
	AND ORDENES.tipo_orden <> 0
	AND ORDENES.tipo_orden <> 3";

  $result = $conn->query($sentencia_sql);

	if(!$result)die("Falló la conexión " . $conn->error);
	

	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	
		$filas[] = $registro;
	}

	echo json_encode($filas);

?>


