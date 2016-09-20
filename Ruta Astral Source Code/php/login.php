<?php
	header('Content-Type: application/json');

	require "conexion.php";

	if(isset($_POST['pnombreUsuario']) &&
		isset($_POST['pclave'])){

		$nombreUsuario = $_POST['pnombreUsuario'];
		$clave = $_POST['pclave'];

		$sql = "SELECT * FROM USUARIOS WHERE nombre_usuario = '$nombreUsuario' AND clave_usuario = '$clave' AND estado_usuario <> 0;";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$usuario = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(count($usuario) > 0){
			echo json_encode($usuario[0]);
		}

	}
?>