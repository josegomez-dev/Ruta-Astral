<?php 
	require "conexion.php";

	if(isset($_POST['pidUsuario']) &&
		isset($_POST['pidUsuarioMod']) &&
		isset($_POST['pnombreUsuario']) &&
		isset($_POST['pnombreCompleto']) &&
		isset($_POST['pclave']) &&
		isset($_POST['pcedula']) &&
		isset($_POST['pcorreo']) &&
		isset($_POST['prol']) &&
		isset($_POST['pestado']) &&
		isset($_POST['ptelefono']) &&
		isset($_POST['pdireccion']) &&
		isset($_POST['pfechaNacimiento'])){

		$idUsuario = $_POST['pidUsuario'];
		$idUsuarioMod = $_POST['pidUsuarioMod'];
		$nombreUsuario = $_POST['pnombreUsuario'];
		$nombreCompleto = $_POST['pnombreCompleto'];
		$clave = $_POST['pclave'];
		$cedula = $_POST['pcedula'];
		$correo = $_POST['pcorreo'];
		$idPuesto = $_POST['pidPuesto'];
		$rol = $_POST['prol'];
		$estado = $_POST['pestado'];
		$telefono = $_POST['ptelefono'];
		$direccion = $_POST['pdireccion'];
		$fechaNacimiento = $_POST['pfechaNacimiento'];

		$sql = "CALL validacion_usuario('$nombreUsuario', '$cedula', $idUsuarioMod);";

		// echo $sql;
		
		$stmt = $conn->prepare($sql);

		$stmt->execute();

		$resul = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

		if(sizeof($resul) > 0){

			$existeCedula = false;
			$existeNombreUsuario = false;
			$i = 0;

			while ($i < sizeof($resul) && !$existeCedula) {
				if($resul[$i]['cedula'] == $cedula){
					$existeCedula = true;
				}
				$i++;
			}

			$i = 0;

			while ($i < sizeof($resul) && !$existeNombreUsuario) {
				if($resul[$i]['nombre_usuario'] == $nombreUsuario){
					$existeNombreUsuario = true;
				}
				$i++;
			}

			if($existeCedula){

				$return = "Ya existe un usuario con la misma cédula";

			} else if($existeNombreUsuario){
				$return = "El nombre de usuario ya esta en uso";
			}

			die($return);
		}

		$stmt->close();

		$sql = "CALL modificar_usuario('$nombreCompleto', '$nombreUsuario','$clave',
			'$cedula', '$correo', " . ($idPuesto != '' ? $idPuesto: 'null') . ", '$rol', $estado, '$telefono', '$direccion',
			date('$fechaNacimiento'), $idUsuarioMod, $idUsuario);";

		// echo $sql;

		$stmt = $conn->prepare($sql);

		$stmt->execute();
	} else{
		echo $_POST['pidUsuario'];
		echo $_POST['pidUsuarioMod'];
		echo $_POST['pnombreUsuario'];
		echo $_POST['pnombreCompleto'];
		echo $_POST['pclave'];
		echo $_POST['pcedula'];
		echo $_POST['pcorreo'];
		echo $_POST['prol'];
		echo $_POST['pestado'];
		echo $_POST['ptelefono'];
		echo $_POST['pdireccion'];
		echo $_POST['pfechaNacimiento'];
	}

?>