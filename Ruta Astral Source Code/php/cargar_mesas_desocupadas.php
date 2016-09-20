<?php
  require_once 'conexion.php';


    if(isset($_POST['phora'])){
        $hora = $_POST['phora'];
        $sentencia_sql = "CALL obtenerMesasLibres"."('$hora')";


        $result = $conn->query($sentencia_sql);
    
    if(!$result)die("Fallo la conexion".$conn->error);
    $filas = array();
    
    while($registro = mysqli_fetch_assoc($result)){
        $filas[] = $registro;
    }
    
    echo json_encode($filas);
}



?>