<?php
  require_once 'conexion.php';
   if(isset($_POST['pid'])){
        $id = $_POST['pid'];
        $sentencia_sql = "CALL verReservacionesPorUsuario"."('$id')";


        $result = $conn->query($sentencia_sql);

    if(!$result)die("Fallo la conexión ".$conn->error);
      $fila=[];
      while ($registro=mysqli_fetch_assoc($result)) {
        $fila[]=$registro;
      }
    echo json_encode($fila);
}



?>