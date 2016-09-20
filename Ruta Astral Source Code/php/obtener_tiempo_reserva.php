<?php
    require_once 'conexion.php';

    $sentencia_sql = "CALL obtenerTiempoReservacion";
    
    $result = $conn->query($sentencia_sql);
    
    if(!$result)die("Fallo la conexion".$conn->error);
    $filas = array();
    
    while($registro = mysqli_fetch_assoc($result)){
        $filas[] = $registro;
    }
    
    echo json_encode($filas);
?>