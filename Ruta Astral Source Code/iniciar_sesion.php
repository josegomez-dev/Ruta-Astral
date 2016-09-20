<!doctype html>
<html>
	<head>
		<?php require 'parciales/head.php'; ?>
		<title>Iniciar Sesion</title>
	</head>
	<body>
		<?php require 'parciales/sidebar.php' ?>
		<div class="main">
			
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Iniciar Sesion</div>
					<div class="cuerpo">	
						<form class="form-pequeno">
								
							<label for="nombre">Nombre</label>
							<input type="text" class="text-input" id="nombre">	

							<label for="clave">Contraseña</label>
							<input type="password" class="text-input" id="clave">	


							<div class="flotar-derecha">
								<input type="button" class="btn" id="btn-guardar" value="Ingresar">
							</div>
							<div class="clear"></div>
						</form>
						<div class="mensaje-error hide"></div>
					</div>
				</div>
			</div>
		</div>
		<?php echo require "parciales/javascript.php";?>
		<script src="scripts/iniciar_sesion.js"></script>
	</body>
</html>