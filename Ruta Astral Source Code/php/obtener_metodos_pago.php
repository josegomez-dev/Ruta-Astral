<?php
	header('Content-Type: application/json');

	require "conexion.php";

	if(isset($_POST['idUsuario'])){

		$idUsuario = $_POST['idUsuario'];

		$sql = "CALL obtener_metodos_pago_usuario($idUsuario);";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$metodosPago = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		echo json_encode($metodosPago);
		
	} else{
		echo $_POST['idUsuario'];
	}
?>