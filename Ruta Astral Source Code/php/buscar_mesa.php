<?php
	header('Content-Type: application/json');

	require "conexion.php";


	if(isset($_POST['pidMesa'])){
		$id = $_POST['pidMesa'];
		$stmt = $conn->prepare("SELECT *
		FROM MESAS WHERE id_mesa = $id");

		$stmt->execute();

		$mesas = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		echo json_encode($mesas[0]);
	}
?>