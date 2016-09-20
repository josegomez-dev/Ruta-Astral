<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario']) &&
		isset($_POST['pnombreNegocio']) &&
		isset($_POST['pcedulaJuridica']) &&
		isset($_POST['pdireccion']) &&
		isset($_POST['pnumeroTelefono'])){

		$idUsuario = $_POST['pidUsuario'];
		$nombreNegocio = $_POST['pnombreNegocio'];
		$cedulaJuridica = $_POST['pcedulaJuridica'];
		$direccion = $_POST['pdireccion'];
		$numeroTelefono = $_POST['pnumeroTelefono'];

		$sql = "UPDATE GENERAL
		SET nombre_negocio ='$nombreNegocio',
			cedula_juridica = '$cedulaJuridica',
			direccion ='$direccion',
			telefono = '$numeroTelefono'
		WHERE id = 0;";

		// echo $sql;

		$stmt = $conn->prepare($sql);
		$stmt->execute();
	}		

?>