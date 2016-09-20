<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario']) &&
 		isset($_POST['pnombreMesa']) &&
		isset($_POST['pcapacidad']) &&
		isset($_POST['pidMesero']) &&
		isset($_POST['ppreferencial'])&&
		isset($_POST['pactivo'])){

		$idUsuario = $_POST['pidUsuario'];
		$nombreMesa = $_POST['pnombreMesa'];
		$capacidadMesa = $_POST['pcapacidad'];
		$idMesero = $_POST['pidMesero'];
		$preferencial = $_POST['ppreferencial'];
		$activo = $_POST['pactivo'];

		$sql = "SELECT * FROM MESAS WHERE nombre_mesa = '$nombreMesa'";

		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){

			die("Ya exite una mesa con ese nombre");
		}
	
		$stmt->close();

		$sql = "CALL insertar_mesa($idUsuario, '$nombreMesa',
			$capacidadMesa, $preferencial, $idMesero, $activo);";

		$stmt = $conn->prepare($sql);
		$stmt->execute();

	} else{
		echo "hola";
		echo $_POST['pnombreMesa'];
		echo $_POST['pcapacidad'];
		echo $_POST['pidMesero'];
		echo $_POST['ppreferencial'];
		echo $_POST['pactivo'];
	}

?>