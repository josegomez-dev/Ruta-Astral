<?php
	header('Content-Type: application/json');

	require "conexion.php";

	if(isset($_POST['pnombreUsuario']) &&
		isset($_POST['pfechaInicio']) &&
		isset($_POST['pfechaFinal'])){

		$nombreUsuario = ($_POST['pnombreUsuario'] == "" ? "%" : $_POST['pnombreUsuario']);
		$fechaInicio = ($_POST['pfechaInicio'] == "" ? "0000-00-00" : $_POST['pfechaInicio']);
		$fechaFinal = ($_POST['pfechaFinal'] == "" ? "3000-01-01" : $_POST['pfechaFinal']);

		$sql = "CALL obtener_bitacora('$nombreUsuario', DATE('$fechaInicio'), DATE('$fechaFinal'))";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$usuarios = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		echo json_encode($usuarios);
	}
?>