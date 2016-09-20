<?php 
	header('Content-Type: application/json');

	require "conexion.php";

	if(isset($_POST['pid'])){
		$idMetodo = $_POST['pid'];

		$sql = "CALL buscar_metodo_pago($idMetodo)";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$metodoPago = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		echo json_encode($metodoPago[0]);
		
	}

?>