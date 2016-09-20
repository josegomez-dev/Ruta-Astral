<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario']) &&
		isset($_POST['pimpuestoVenta']) &&
		isset($_POST['pimpuestoServicio']) &&
		isset($_POST['pexpres'])){

		$idUsuario = $_POST['pidUsuario'];
		$impuestoVenta = $_POST['pimpuestoVenta'];
		$impuestoServicio = $_POST['pimpuestoServicio'];
		$expres= $_POST['pexpres'];

		$sql = "UPDATE GENERAL
		SET impuesto_ventas ='$impuestoVenta',
			impuesto_servicio= '$impuestoServicio',
			costo_express ='$expres'

		WHERE id = 0;";

		// echo $sql;

		$stmt = $conn->prepare($sql);
		$stmt->execute();
	}		

?>