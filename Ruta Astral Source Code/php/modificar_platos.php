<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario'])&&
		isset($_POST['pidPlato'])&&
		isset($_POST['pnombrePlato']) &&
		isset($_POST['pingredientes']) &&
		isset($_POST['pdescripcion']) &&
		isset($_POST['pprecioPlato'])&&
		isset($_POST['pcalorias'])&&
		isset($_POST['pidTipo']) &&
		isset($_POST['pactivo']) &&
		isset($_POST['pimagen'])){


		$idUsuario = $_POST['pidUsuario'];
		$idPlato = $_POST['pidPlato'];
		$nombrePlato = $_POST['pnombrePlato'];
		$ingredientes = $_POST['pingredientes'];
		$descripcion = $_POST['pdescripcion'];
		$precioPlato = $_POST['pprecioPlato'];
		$calorias = $_POST['pcalorias'];
		$tipo = $_POST['pidTipo'];
		$activo = $_POST['pactivo'];
		$imagen = $_POST['pimagen'];

		$sql = "SELECT * FROM PLATOS WHERE nombre_plato = '$nombrePlato' AND id_plato <> $idPlato";
		// echo $sql;
		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){

			die("Ya exite un plato con ese nombre");
		}
	
		$stmt->close();

		$sql = "UPDATE PLATOS
		SET nombre_plato ='$nombrePlato',
			ingredientes = '$ingredientes',
			descripcion ='$descripcion',
			precio_plato = $precioPlato,
			calorias = $calorias,
			activo = $activo,
			id_tipo = $tipo,
			url_imagen = '$imagen'
		WHERE id_plato = $idPlato;";

		$stmt = $conn->prepare($sql);
		$stmt->execute();

	} else{
	}

?>