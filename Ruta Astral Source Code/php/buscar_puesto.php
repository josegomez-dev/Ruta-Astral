<?php
	header('Content-Type: application/json');

	require "conexion.php";


	if(isset($_POST['pidpuesto'])){
		$idPuesto = $_POST['pidpuesto'];
		$stmt = $conn->prepare("SELECT *
		FROM PUESTOS
		WHERE id_puesto = $idPuesto");

		$stmt->execute();

		$puesto = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		echo json_encode($puesto[0]);
	}
?>