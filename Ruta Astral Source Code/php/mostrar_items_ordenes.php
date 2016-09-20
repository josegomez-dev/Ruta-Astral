<?php
  require_once 'conexion.php';  
 
  $sentencia_sql = "SELECT nombre_plato,
		nombre_mesa,
	    po.id_orden,
	    HOUR(fecha_hora) AS hora,
	    MINUTE(fecha_hora) AS minutos,
	    id_plato_x_orden,
	    po.estado
	FROM PLATOS_X_ORDEN AS po
	INNER JOIN PLATOS AS pa ON pa.id_plato = po.id_plato
	INNER JOIN ORDENES AS o ON o.id_orden = po.id_orden
	INNER JOIN MESAS AS m ON o.id_mesa = m.id_mesa
	WHERE po.estado NOT IN('Facturado', 'Entregado', 'Cancelado')";

  $result = $conn->query($sentencia_sql);

	if(!$result)die("Falló la conexión" . $conn->error);
	
	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	
		$filas[] = $registro;
	}

	echo json_encode($filas);

?>


