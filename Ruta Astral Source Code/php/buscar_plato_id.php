<?php
  require_once 'conexion.php';  
  

  $idPlato = $_POST['id'];
  
  $sentencia_sql = "SELECT * FROM `PLATOS`
  	WHERE id_plato=$idPlato";

  $result = $conn->query($sentencia_sql);

	if(!$result)die("Falló la conexión" . $conn->error);
	
	$filas = array();

	while($registro = mysqli_fetch_assoc($result)){	
		$filas[] = $registro;
	}

	echo json_encode($filas);

?>
