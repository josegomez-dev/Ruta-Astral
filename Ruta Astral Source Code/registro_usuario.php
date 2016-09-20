<!doctype html>
<html>
	<head>
		<title>Registro Usuarios</title>
		<?php require 'parciales/head.php'; ?>
	</head>
	<body>
		
		<?php require 'parciales/sidebar.php' ?>
		
		<div class="main"> 
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Registro Usuario</div>
					<div class="cuerpo">
						<form id="registro-usuario" class="form-pequeno" method="post" action="agregar.php">
							<label for= "nombre-completo"> Nombre completo</label>
							<input class="text-input" type="text" id="nombre-completo">
							<label for= "nombre-usuario"> Nombre de usuario</label>
							<input class="text-input" type="text" id="nombre-usuario">			

							<label for="cedula"> Cédula</label>
							<input class="text-input" type="text" id="cedula">
							
							<label for="numero-tel"> Número de teléfono</label>
							<input class="text-input" type="text" id="numero-tel">
							<label for="fecha-nacimiento"> Fecha de nacimiento</label>
							<input class="text-input" type="date" id="fecha-nacimiento">

							<label for="direccion"> Dirección</label>
							<textarea class="text-input" type="text" id="direccion"></textarea>

							<label for= "clave"> Contraseña</label>
							<input class="text-input" type="password" id="clave">
							<label for= "clave2"> Confirmar contraseña</label>
							<input class="text-input" type="password" id="clave2">
							<label for= "correo"> Correo electronico</label>
							<input class="text-input" type="text" id="correo">
							<div class="flotar-derecha">
								<input type="submit" id="registrarse" value="Registrarse" class="btn" >
							</div>
						</form>	
						<div class="clear"></div>
						<div class="mensaje-error hide">Verificar datos vacios</div>
					</div>
				</div>
			</div>
		</div>
		<?php echo require "parciales/javascript.php";?>
		<script src="scripts/registro_usuario.js"> </script>

	</body>
</html>