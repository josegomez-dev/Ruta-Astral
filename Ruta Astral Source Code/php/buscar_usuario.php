<?php
	header('Content-Type: application/json');

	require "conexion.php";

	if(isset($_POST['pid'])){
		$id = $_POST['pid'];

		$stmt = $conn->prepare("CALL buscar_usuario($id);");

		$stmt->execute();

		$usuarios = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		echo json_encode($usuarios[0]);
	}

?>