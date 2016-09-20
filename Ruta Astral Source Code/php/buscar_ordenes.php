<?php
  require_once 'conexion.php';  
  $conexion = new mysqli($host_name,$user_name,$password,$data_base);


  if($conexion->connect_error)die($conexion->connect_error);
  $conexion->set_charset("utf8");

  $estado = $_POST['estado'];
  //$idMesa = $_POST['id'];
  
  $sentencia_sql = "SELECT ordenes.id_mesa, ordenes.id_orden, platos_x_orden.id_plato, platos_x_orden.estado
		FROM `ordenes`
		INNER JOIN `platos_x_orden`
		ON ordenes.id_orden=platos_x_orden.id_orden
		WHERE platos_x_orden.estado!='$estado'";

  $result = $conexion->query($sentencia_sql);

	if(!$result)die("Falló la conexión" . $conexion->error);
	
	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	
		$filas[] = $registro;
	}

	echo json_encode($filas);

?>
