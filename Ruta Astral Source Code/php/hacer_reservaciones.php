<?php
    require_once 'conexion.php';

    if(isset($_POST['phora']) && isset($_POST['pid_mesa']) && isset($_POST['pid_usuario']) ){
        $hora = $_POST['phora'];
        $mesa = $_POST['pid_mesa'];
        $usuario = $_POST['pid_usuario'];
        
        $sentencia_sql = "CALL ingresarReservacion"."('$hora', '$mesa', '$usuario')";
        
        $result = $conn->query($sentencia_sql);
        
        if(!$result)die("Fallo la conexion".$conn->error);
        // $filas = array();
    
        // echo json_encode($result);
    }
    
?>