<?php
  require_once 'conexion.php';  
   $idOrden = $_POST['id'];

  $sentencia_sql = "UPDATE `ORDENES` SET `tipo_orden`=0 WHERE `id_orden`=$idOrden";

  $conn->query($sentencia_sql); 

?>

