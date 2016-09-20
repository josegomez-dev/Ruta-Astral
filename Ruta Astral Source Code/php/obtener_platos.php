<?php
	header('Content-Type: application/json');

	require "conexion.php";

	$stmt = $conn->prepare("SELECT
		id_plato,
		nombre_plato,
		precio_plato,
		nombre_tipo,
		activo
	FROM PLATOS AS pa
	INNER JOIN TIPO_PLATO AS ti ON ti.id_tipo = pa.id_tipo
	ORDER BY id_plato;");

	$stmt->execute();

	$platos = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

	echo json_encode($platos);
?>