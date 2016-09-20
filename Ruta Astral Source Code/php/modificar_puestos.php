<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario'])&&
		isset($_POST['pidPuesto'])&&
		isset($_POST['ppuesto'])&&
		isset($_POST['pdescripcion'])&&
		isset($_POST['pactivo'])){


		$nombreUsuario=$_POST['pidUsuario'];
		$idPuesto=$_POST['pidPuesto'];
		$puesto = $_POST['ppuesto'];
		$descripcion= $_POST['pdescripcion'];
		$activo=$_POST['pactivo'];

		$sql = "SELECT * FROM PUESTOS WHERE nombre_puesto = '$puesto' AND id_puesto <> $idPuesto";
		// echo $sql;
		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){

			die("Ya exite un puesto con este nombre");
		}
	
		$stmt->close();

		$sql = "UPDATE PUESTOS SET nombre_puesto='$puesto', descripcion_puesto='$descripcion', activo=$activo WHERE id_puesto=$idPuesto;";
		// echo $sql;

		$stmt = $conn->prepare($sql);
		$stmt->execute();

	} else{
		/*echo $_POST['pnombreMesa'];
		echo $_POST['pcapacidad'];
		echo $_POST['pidMesero'];
		echo $_POST['ppreferencial'];
		echo $_POST['pactivo'];*/
	}

?>