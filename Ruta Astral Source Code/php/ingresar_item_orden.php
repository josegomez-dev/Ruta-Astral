<?php
  require_once 'conexion.php';  


  $idOrden = $_POST['id_orden']; 
  $idPlato = $_POST['id_plato'];
  $estado = $_POST['estado']; 

  $sentencia_sql = "INSERT INTO `PLATOS_X_ORDEN` (`id_orden`,`id_plato`,`estado`, fecha_hora)
          VALUES($idOrden, $idPlato, '$estado', NOW())";

  $result = $conn->query($sentencia_sql);

	if(!$result)die("Falló la conexión" . $conn->error);

?>
