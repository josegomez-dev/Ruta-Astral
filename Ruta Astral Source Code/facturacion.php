<!doctype html>
<html>
	<head>
		<title>Facturacion</title>
		<?php require 'parciales/head.php'; ?>
	</head>
	<body>
		<?php require 'parciales/sidebar.php'; ?>
		<div class="main">
			<?php require 'parciales/menu_facturas.php'; ?>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Facturas</div>
					<div class="cuerpo">
						<table id="tabla_facturas" class="tabla">
							<thead>
								<tr>
									<th>ID Factura</th>
									<th>ID Orden</th>
									<th>ID Cliente</th>
									<th>Estado</th>
									<th>Fecha</th>
									<th>Descuento</th>
									<th>Total</th>
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
		<script src="scripts/ver_facturas.js"></script>
	</body>
</html>
