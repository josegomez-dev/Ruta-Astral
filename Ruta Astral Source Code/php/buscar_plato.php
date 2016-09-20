<?php
	header('Content-Type: application/json');

	require "conexion.php";


	if(isset($_POST['pidPlato'])){
		$id = $_POST['pidPlato'];
		$stmt = $conn->prepare("SELECT pa.*, ti.nombre_tipo FROM PLATOS AS pa
			INNER JOIN TIPO_PLATO AS ti ON ti.id_tipo = pa.id_tipo
			WHERE id_plato = $id
			ORDER BY id_plato;");

		$stmt->execute();

		$platos = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		echo json_encode($platos[0]);
	}
?>