<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario'])&&
		isset($_POST['pnombrePlato']) &&
		isset($_POST['pingredientes']) &&
		isset($_POST['pidTipo']) &&
		isset($_POST['pdescripcion'])&&
		isset($_POST['pprecioPlato'])&&
		isset($_POST['pcalorias']) &&
		isset($_POST['pimagen']) &&
		isset($_POST['pactivo'])){

		$nombrePlato = $_POST['pnombrePlato'];
		$ingredientes = $_POST['pingredientes'];
		$tipo = $_POST['pidTipo'];
		$descripcion = $_POST['pdescripcion'];
		$precio=$_POST['pprecioPlato'];
		$calorias=$_POST['pcalorias'];
		$activo = $_POST['pactivo'];
		$imagen = $_POST['pimagen'];
		$idUsuario = $_POST['pidUsuario'];

		$sql = "SELECT * FROM PLATOS WHERE nombre_plato = 'nombrePlato'";
		// echo $sql;
		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){

			die("Ya exite un plato con ese nombre");
		}
	
		$stmt->close();

		$sql ="CALL insertar_plato($idUsuario, '$nombrePlato', '$ingredientes',
			'$descripcion', $precio, $calorias, $tipo, '$imagen', $activo);";
		// echo $sql;

		$stmt = $conn->prepare($sql);
		$stmt->execute();

	} else{
		echo "Usuario: " . isset($_POST['pidUsuario']);
		echo "nombrePlato: " . isset($_POST['pnombrePlato']);
		echo "ingredientes: " . isset($_POST['pingredientes']);
		echo "Tipo: " . isset($_POST['pidTipo']);
		echo "desc: " . isset($_POST['pdescripcion']);
		echo "precio: " . isset($_POST['pprecioPlato']);
		echo "cal: " . isset($_POST['pcalorias']);
		echo "img: " . isset($_POST['pimagen']);
		echo "act: " . isset($_POST['pactivo']);
	}

?>
