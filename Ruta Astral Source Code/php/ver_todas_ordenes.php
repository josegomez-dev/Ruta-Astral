<?php
    require_once 'conexion.php';
    
    $sentencia_sql = "CALL verUltimaOrden";
    
    $stmt = $conn->prepare("$sentencia_sql;");

    $stmt->execute();

    $filas = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($filas);
?>