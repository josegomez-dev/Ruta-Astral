<?php
  require_once 'conexion.php';  

  //$estado = $_POST['estado'];
  $nuevoEstado = $_POST['nuevoEstado'];
  $id = $_POST['id'];

  $sentencia_sql = "UPDATE PLATOS_X_ORDEN SET estado ='$nuevoEstado' WHERE id_plato_x_orden = $id";

  // echo $sentencia_sql;

  $conn->query($sentencia_sql); 

?>
