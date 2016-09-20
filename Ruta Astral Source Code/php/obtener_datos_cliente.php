<?php
  require_once 'conexion.php';
   
    if(isset($_POST['pnombre'])){
        $id = $_POST['pnombre'];
        $sentencia_sql = "CALL obtenerClientes"."('$id')";

        $stmt = $conn->prepare($sentencia_sql);

        $stmt->execute();

        $filas = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

        echo json_encode($filas);
  }

?>