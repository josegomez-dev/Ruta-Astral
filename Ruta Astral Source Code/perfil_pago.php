<!doctype html>
<html>
	<head>
		<?php require 'parciales/head.php'; ?>
		<title>Metodos de pago</title>
	</head>
	<body>
		<?php require 'parciales/sidebar.php' ?>
		<div class="main">
			<div class="top-menu show">
				<nav>
					<a href="perfil.php">Informacion</a>
					<a href="#" class="selected">Metodos de pago</a>
				</nav>
			</div>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Metodos de pago</div>
					<div class="cuerpo">
						<div class="contenedor-tabla">
							<table class="tabla">
								<thead>
									<tr>
										<th>Nombre en la tarjeta</th>
										<th>Número de tarjeta</th>
										<th>Expira</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						</div>
						<div class="flotar-derecha">
							<i class="fa fa-plus"></i>
						</div>
						<div class="clear"></div>
						<form action="" class="form-pequeno hide">
							<label for="nombre-tarjeta">Nombre en la Tarjeta</label>
							<input class="text-input" type="text" id="nombre-tarjeta">
							<label for="numero-tarjeta">Número de tarjeta</label>
							<input class="text-input numero" type="text" id="numero-tarjeta">
							<label for="pid">PID</label>
							<input class="text-input numero" type="text" id="pid">
							<label for="expiracion">Fecha de expiración</label>
							<!-- <input class="text-input fecha" type="text" id="expiracion"> -->
							<div class="text-input">
								<select name="mes" id="mes">
									<option value="">Mes</option>
									<?php for ($i=1; $i < 13; $i++) { 
										echo "<option value='$i'>$i</option>";
									} ?>
								</select>
								<select name="anio" id="anio">
									<option value="">Año</option>
									<?php for ($i=2015; $i < (date("Y") + 11); $i++) { 
										echo "<option value='$i'>$i</option>";
									} ?>
								</select>
							</div>
							<div class="clear"></div>
							<div class="flotar-derecha">
								<button type="reset" class="cancelar btn">Cancelar</button>
								<button class="guardar btn">Guardar</button>
							</div>
							<div class="clear"></div>
						</form>
						<div class="mensaje-error hide"></div>
					</div>
				</div>
			</div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script src="scripts/perfil_pago.js"></script>
	</body>
</html>