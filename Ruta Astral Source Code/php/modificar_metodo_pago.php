<?php
	require "conexion.php";

	if(isset($_POST['pnombreTarjeta']) &&
		isset($_POST['pnumeroTarjeta']) &&
		isset($_POST['pmes']) &&
		isset($_POST['panio']) &&
		isset($_POST['pidTarjeta']) &&
		isset($_POST['pidUsuario']) &&
		isset($_POST['pidMetodo'])
		){

		$nombreTarjeta = $_POST['pnombreTarjeta'];
		$numeroTarjeta = $_POST['pnumeroTarjeta'];
		$mes = $_POST['pmes'];
		$anio = $_POST['panio'];
		$pidTarjeta = $_POST['pidTarjeta'];
		$idUsuario = $_POST['pidUsuario'];
		$idMetodo = $_POST['pidMetodo'];

		$sql = "CALL validacion_modificacion_metodo($idUsuario, '$numeroTarjeta', '$nombreTarjeta',
			$anio, $mes, $idMetodo);";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){
			die("La tarjeta ya existe");
		}

		$stmt->close();

		$sql = "CALL modificar_metodo_pago($idUsuario, '$numeroTarjeta', '$nombreTarjeta',
			$anio, $mes, $idMetodo, '$pidTarjeta');";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

	}

?>