<!doctype html>
<html>
	<head>
		<?php require 'parciales/head.php'; ?>
		<title>Reportes Bitacora</title>

	</head>
	<body>
		<?php require 'parciales/sidebar.php' ?>
		<div class="main">
			<?php require 'parciales/reportes_menu.php'; ?>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Platos</div>
					<div class="cuerpo">
						<form action="" id="filtro">
							<div class="col-9">
								<label for="">Desde (fecha)</label>
								<input type="date" id="fecha-inicio" name="fecha-inicio" class="text-input date">
							</div>
							<div class="col-9">
								<label for="">Hasta (fecha)</label>
								<input type="date" id="fecha-final" name="fecha-final" class="text-input date">
							</div>
							<div class="col-9">
								<label for="">Nombre de usuario</label>
								<input type="text" id="nombre-usuario" name="nombre-usuario" class="text-input date">
							</div>
							<button class="fa fa-filter btn"></button>
						</form>
						<div class="contenedor-tabla tabla-reporte">
							<table id="reporte-bitacora" class="tabla">
								<thead>
									<tr>
										<th>Fecha</th>
										<th>Hora</th>
										<th>Usuario</th>
										<th>Acción</th>
										<th>Elemento</th>
										<th>Descripción</th>
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
		<script src="scripts/reportes_bitacora.js"></script>
	</body>
</html>