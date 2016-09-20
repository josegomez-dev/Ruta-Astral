<?php
    require_once 'conexion.php';
    
    if(isset($_POST['pid_orden']) && isset($_POST['ptotal']) && isset($_POST['pestado']) && isset($_POST['pfecha']) && isset($_POST['pdescuento']) && isset($_POST['pid_cajero']) && isset($_POST['pid_cliente'])){
        $id = $_POST['pid_orden'];
        $total = $_POST['ptotal'];
        $estado = $_POST['pestado'];
        $fecha = $_POST['pfecha'];
        $descuento = $_POST['pdescuento'];
        $idUsuario = $_POST['pid_cliente'];
        $idCajero = $_POST['pid_cajero'];
        
        $sentencia_sql = "CALL insertarFacturas"."('$id', '$total', '$estado', '$fecha', '$descuento', '$idCajero', '$idUsuario')";
        // echo($sentencia_sql);
        $result = $conn->query($sentencia_sql);
        
        if(!$result)die("Fallo la conexion".$conn->error);
        $filas = array();
    
        echo json_encode($result);
    }
    
?>