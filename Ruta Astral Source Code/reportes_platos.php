<!doctype html>
<html>
	<head>
		<?php require 'parciales/head.php'; ?>
		<title>Reportes Platos</title>
	</head>
	<body>
		<div class="side-bar">
			<?php require 'parciales/sidebar.php' ?>
		</div>
		<div class="main">
			<?php require 'parciales/reportes_menu.php'; ?>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Platos</div>
					<div class="cuerpo">
						<form action="" id="filtro">
							<div class="col-9">
								<label for="">Desde (fecha)</label>
								<input type="date" name="fecha-inicio" class="text-input date">
							</div>
							<div class="col-9">
								<label for="">Hasta (fecha)</label>
								<input type="date" name="fecha-final" class="text-input date">
							</div>
							<button class="fa fa-filter btn"></button>
						</form>
						<div class="contenedor-tabla">
							<table id="reporte-plato" class="tabla">
								<thead>
									<tr>
										<th>Hora</th>
										<th>Cantidad</th>
										<th>Plato</th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						</div>
						<div class="flotar-derecha">
							<i class="fa fa-print imprimir"></i>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script src="scripts/reportes_platos.js"></script>
	</body>
</html>