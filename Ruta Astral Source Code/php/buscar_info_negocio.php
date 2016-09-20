<?php
	header('Content-Type: application/json');

	require "conexion.php";

	$stmt = $conn->prepare("SELECT *
	FROM GENERAL WHERE id = 0");

	$stmt->execute();

	$general = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

	echo json_encode($general[0]);

?>