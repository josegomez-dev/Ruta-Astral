<?php
  require_once 'conexion.php';

    if(isset($_POST['porden_id'])){
        $id = $_POST['porden_id'];
        $sentencia_sql = "CALL verOrdenes('$id')";


      $stmt = $conn->prepare("$sentencia_sql;");

      $stmt->execute();

      $filas = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
      
      echo json_encode($filas);
  }



?>