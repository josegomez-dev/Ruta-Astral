<?php
    require_once 'conexion.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base);
        
    if ($conexion->connect_error)die($conexion->error);
    
    $conexion->set_charset("utf8");
    
    if(isset($_POST['pid']) && isset($_POST['ppuntos']) ){
        $id = $_POST['pid'];
        $puntos = $_POST['ppuntos'];
        
        $sentencia_sql = "CALL insertarPuntosCliente"."('$id', '$puntos')";
        
        $result = $conexion->query($sentencia_sql);
        
        if(!$result)die("Fallo la conexion".$conexion->error);
        $filas = array();
    
        echo json_encode($result);
    }
    
?>