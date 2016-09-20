<?php
	header('Content-Type: application/json');

	require "conexion.php";

	$stmt = $conn->prepare("CALL obtener_usuarios;");

	$stmt->execute();

	$usuarios = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

	echo json_encode($usuarios);
?>