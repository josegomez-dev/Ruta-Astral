<?php 
	require "conexion.php";

	if(isset($_POST['ppuesto']) &&
		isset($_POST['pdescripcionPuesto'])&&
		isset($_POST['pactivo'])){


		// $idPuesto = $_POST['pidPuesto'];
		$puesto = $_POST['ppuesto'];
		$descripcionPuesto = $_POST['pdescripcionPuesto'];
		$activo = $_POST['pactivo'];


		$sql = "SELECT * FROM PUESTOS WHERE nombre_puesto = '$puesto'";
		// echo $sql;
		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){

			die("Ya exite este puesto");
		}
	
		$stmt->close();

		$sql = "INSERT INTO PUESTOS (
					nombre_puesto,
					descripcion_puesto,
					activo
				)
			VALUES (
				'$puesto',
				'$descripcionPuesto',
				$activo
			);";
		// echo $sql;

		$stmt = $conn->prepare($sql);
		$stmt->execute();

	} else{
		echo "No entro";
		// echo $_POST['pdescripcionPuesto'];*/

	}

?>