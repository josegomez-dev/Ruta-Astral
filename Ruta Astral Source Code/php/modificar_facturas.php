<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario']) &&
		isset($_POST['pconsecutivo'])){

		$idUsuario = $_POST['pidUsuario'];
		$consecutivo= $_POST['pconsecutivo'];


		$sql = "UPDATE GENERAL
		SET consecutivo_facturas ='$consecutivo'

		WHERE id = 0;";

		// echo $sql;

		$stmt = $conn->prepare($sql);
		$stmt->execute();
	}		

?>