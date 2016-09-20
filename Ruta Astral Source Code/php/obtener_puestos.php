<?php
	header('Content-Type: application/json');

	require "conexion.php";

	$stmt = $conn->prepare("SELECT
		*
	FROM PUESTOS");

	$stmt->execute();

	$platos = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

	echo json_encode($platos);
?>