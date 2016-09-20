<!doctype html>
<html>
	<head>
		<?php require("parciales/head.php") ?>
		<title>Modificar Perfil</title>
	</head>
	<body>
		
		<div class="side-bar">
			<?php require 'parciales/sidebar.php'; ?>
		</div>
		<div class="main"> 
			<div class="top-menu show">
				<nav>
					<a href="#" class="selected">Perfil</a>
					<a href="perfil_pago.php" >Métodos de pago</a>  
				</nav>
			</div>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Información Usuario</div>
					<div class="cuerpo">
						<form id="modificar-usuario" class="form-pequeno">
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
								<input type="submit" id="guardar" value="Guardar" class="btn" >
							</div>
						</form>	
						<div class="clear"></div>
						<div class="mensaje-error hide">Verificar espacios vacíos</div>
					</div>
				</div>
			</div>
		</div>
		<?php echo require "parciales/javascript.php";?>
		<script src="scripts/modificar_perfil.js"> </script>
	</body>
</html>