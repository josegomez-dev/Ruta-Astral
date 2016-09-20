<?php
   
	require_once 'conexion.php';
   
  if(isset($_POST['pid']) ){
      $id = $_POST['pid'];

    $sentencia_sql = "CALL cancelarReservaciones"."($id)";

    // echo $sentencia_sql;

    $result = $conn->query($sentencia_sql);

    if(!$result)die("Fallo la conexión ".$conn->error);

    echo json_encode($result);
}



?>