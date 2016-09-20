<?php
  require_once 'conexion.php'; 

  $estado = $_POST['estado'];
  $idMesa = $_POST['id'];

  $sentencia_sql = "UPDATE `MESAS` SET `estado`='$estado' WHERE `id_mesa`='$idMesa'";

  $conn->query($sentencia_sql); 

?>