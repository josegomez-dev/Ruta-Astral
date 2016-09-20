<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario'])&&
		isset($_POST['pidMesa'])&&
		isset($_POST['pnombreMesa']) &&
		isset($_POST['pcapacidad']) &&
		isset($_POST['pidMesero']) &&
		isset($_POST['ppreferencial'])&&
		isset($_POST['pactivo'])){


		$nombreUsuario=$_POST['pidUsuario'];
		$idMesa=$_POST['pidMesa'];
		$nombreMesa = $_POST['pnombreMesa'];
		$capacidadMesa = $_POST['pcapacidad'];
		$id_mesero = $_POST['pidMesero'];
		$preferencial = $_POST['ppreferencial'];
		$activo=$_POST['pactivo'];

		$sql = "SELECT * FROM MESAS WHERE nombre_mesa = '$nombreMesa' AND id_mesa <> $idMesa";
		// echo $sql;
		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){

			die("Ya exite una mesa con ese nombre");
		}
	
		$stmt->close();

		$sql = "UPDATE MESAS SET nombre_mesa='$nombreMesa', capacidad_mesa=$capacidadMesa, preferencial=$preferencial, id_mesero=$id_mesero, activo=$activo WHERE id_mesa=$idMesa;";
		// echo $sql;

		$stmt = $conn->prepare($sql);
		$stmt->execute();

	} else{
		echo $_POST['pnombreMesa'];
		echo $_POST['pcapacidad'];
		echo $_POST['pidMesero'];
		echo $_POST['ppreferencial'];
		echo $_POST['pactivo'];
	}

?>