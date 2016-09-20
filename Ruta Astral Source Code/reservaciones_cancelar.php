<!doctype html>
<html>
	<head>
		<title>Cancelar Reservaciones</title>
		<?php require 'parciales/head.php'; ?>
	</head>
	<body>
		<?php require 'parciales/sidebar.php'; ?>
		<div class="main">
			<?php require 'parciales/menu_reservaciones.php'; ?>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Reservaciones</div>
					<div class="cuerpo">
						<table id="tabla_reservaciones" class="tabla">
							<thead>
								<tr>
									<th>ID Reservación</th>
									<th>Fecha</th>
									<th>Hora</th>
									<th>Mesa</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel">
					<div class="titulo">Cancelar Reservaciones</div>
					<div class="cuerpo">
						<input type="text" id="cancelar_reservacion" name="buscar" class="panel">
						<button class="btn" id="btn_anular">Cancelar Reservación</button>	
					</div>
				</div>
			</div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script src="scripts/ver_reservaciones.js"></script>
		<script src="scripts/cancelar_reservacion.js"></script>
	</body>
</html>
