<?php
	require "conexion.php";
	if(isset($_POST['pidUsuario']) &&
		isset($_POST['pidMetodo'])){
		
		$idUsuario = $_POST['pidUsuario'];
		$idMetodo = $_POST['pidMetodo'];

		$sql = "CALL borrar_metodo_pago($idUsuario, $idMetodo);";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

		echo $sql;
	}
?>