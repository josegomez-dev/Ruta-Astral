<?php 
	require "conexion.php";

	if(isset($_POST['pnombreTarjeta']) &&
		isset($_POST['pnumeroTarjeta']) &&
		isset($_POST['pmes']) &&
		isset($_POST['panio']) &&
		isset($_POST['pidTarjeta']) &&
		isset($_POST['pidUsuario'])
		){

		$nombreTarjeta = $_POST['pnombreTarjeta'];
		$numeroTarjeta = $_POST['pnumeroTarjeta'];
		$mes = $_POST['pmes'];
		$anio = $_POST['panio'];
		$pidTarjeta = $_POST['pidTarjeta'];
		$idUsuario = $_POST['pidUsuario'];

		$sql = "CALL existencia_metodo_pago($idUsuario, '$numeroTarjeta', '$nombreTarjeta', $anio, $mes);";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){
			die("La tarjeta ya existe");
		}

		$stmt->close();		

		$sql = "CALL insertar_metodo_pago"."($idUsuario, '$numeroTarjeta', '$nombreTarjeta', '$pidTarjeta', $anio, $mes);";

		$stmt = $conn->prepare($sql);

		$stmt->execute();
		
	}
?>