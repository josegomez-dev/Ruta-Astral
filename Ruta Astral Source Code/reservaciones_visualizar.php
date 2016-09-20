<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Ver Reservaciones</title>
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
									<th>ID reservación</th>
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
			</div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script src="scripts/ver_reservaciones.js"></script>
	</body>
</html>
