<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario']) &&
		isset($_POST['pprevio']) &&
		isset($_POST['pduracion'])){

		$idUsuario = $_POST['pidUsuario'];
		$previo = $_POST['pprevio'];
		$duracion = $_POST['pduracion'];



		$sql = "UPDATE GENERAL
		SET hora_previa_reserva ='$previo',
			cedula_juridica = '$cedulaJuridica',
			duracion_reserva ='$duracion'
		WHERE id = 0;";

		// echo $sql;

		$stmt = $conn->prepare($sql);
		$stmt->execute();
	}		

?>