<!doctype html>
<html>
	<head>
		<?php require("parciales/head.php") ?>
		<title>Configuracion General</title>
	</head>
	<body>

		<?php require 'parciales/sidebar.php' ?>

		<div class="main">

			<?php require 'parciales/configuracion_menu.php'; ?>

			<div class="contenedor">

				<div class="panel">
				
					<div class="titulo">Negocio</div>
					<div class="cuerpo">
						<form class="form-pequeno" id="info-negocio">
								
							<label for="nombre-config">Nombre</label>
							<input type="text" class="text-input" id="nombreConfig">	

							<label for="ced-juridica">Cédula Jurídica</label>
							<input type="text" class="text-input" id="ced-juridica">	

							<label for="dirrecion">Dirección</label>
							<textarea type="text" class="text-input" id="direccion">  
							</textarea>	

							<label for="telefono">Teléfono</label>
							<input type="text" class="text-input" id="telefono">	

							<div class="flotar-derecha">
								<input type="button" class="btn" id="guardar-info-negocio" value="Guardar">
							</div>
							<div class="clear"></div>
						</form>
					</div>
				</div>
				<div class="panel">
					<div class="titulo">Impuestos & Exprés</div>
					<div class="cuerpo">
						<form class="form-pequeno" id="info-expres">
								
							<label for="impuesto-ventas">Impuesto de ventas</label>
							<input type="text" class="text-input" id="impuesto-ventas">	

							<label for="impuesto-servicio">Impuesto de servicio</label>
							<input type="text" class="text-input" id="impuesto-servicio">	

							<label for="costo-expres">Costo por exprés</label>
							<input type="text" class="text-input" id="costo-express">  
							</textarea>	

							<div class="flotar-derecha">
								<input type="button" class="btn" id="guardar-info-expres" value="Guardar">
							</div>
							<div class="clear"></div>
						</form>
					</div>
				</div>
				<div class="panel">
					<div class="titulo">Facturas</div>
					<div class="cuerpo">
						<form class="form-pequeno" id="info-facturas">
								
							<label for="consecutivo">Iniciar consecutivo en </label>
							<input type="text" class="text-input" id="consecutivo">	

							<div class="flotar-derecha">
								<input type="submit" class="btn" id="guardar-info-facturas" value="Guardar">
							</div>
							<div class="clear"></div>
						</form>
					</div>
				</div>
				<div class="panel">
					<div class="titulo">Reservacion</div>
					<div class="cuerpo">	
						<form class="form-pequeno" id="info-reservacion">
							<label for="previo">Previo</label>
							<input id="previo" class="text-input" type="text" name="previo"> </input>
							<label for="duracion">Duración</label>
							<input id="duracion" class="text-input" type="text" name="duracion"> </input>

							<div class="flotar-derecha">
							<input type="button" class="btn" id="guardar-info-reservacion" value="Guardar">
							</div>
						<div class="clear"></div>
						</form>
						<div class="mensaje-error hide">Verificar datos vacios</div>

					</div>
				</div>
			</div>
		</div>
		<?php echo require "parciales/javascript.php";?>
		<script src="scripts/configuracion_general.js"></script>

	</body>
</html>