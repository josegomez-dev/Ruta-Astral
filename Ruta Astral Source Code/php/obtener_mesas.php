<?php
	header('Content-Type: application/json');

	require "conexion.php";

	$stmt = $conn->prepare("SELECT *
		FROM MESAS;");

	$stmt->execute();

	$mesas = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

	echo json_encode($mesas);
?>