<?php 
	require "conexion.php";

	if(isset($_POST['pnombreUsuario']) &&
		isset($_POST['pnombreCompleto']) &&
		isset($_POST['pclave']) &&
		isset($_POST['pcedula']) &&
		isset($_POST['pcorreo']) &&
		// isset($_POST['pidPuesto']) &&
		isset($_POST['prol']) &&
		isset($_POST['pestado']) &&
		isset($_POST['ptelefono']) &&
		isset($_POST['pdireccion']) &&
		isset($_POST['pfechaNacimiento'])){

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

		$sql = "INSERT INTO USUARIOS (
					nombre_completo,
					nombre_usuario,
					clave_usuario,
					cedula,
					correo,
					id_puesto,
					rol,
					estado_usuario,
					telefono,
					direccion,
					fecha_nacimiento
				)
			VALUES (
				'$nombreCompleto',
				'$nombreUsuario',
				'$clave',
				'$cedula',
				'$correo',
				$idPuesto,
				'$rol',
				$estado,
				'$telefono',
				'$direccion',
				'$fechaNacimiento'
			);";

		// echo $sql;
		
		$stmt = $conn->prepare("SELECT * FROM USUARIOS WHERE nombre_usuario = '$nombreUsuario' OR cedula = '$cedula'");

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

		$stmt = $conn->prepare($sql);

		$stmt->execute();
		// echo $estado;
	}

?>