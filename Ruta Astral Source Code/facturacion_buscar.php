<!doctype html>
<html>
	<head>
		<title>Facturacion</title>
		<?php require 'parciales/head.php'; ?>
		<link rel="stylesheet" href="css/facturacion.css">
	</head>
	<body>
		<?php require 'parciales/sidebar.php'; ?>
		<div class="main">
			<?php require 'parciales/menu_facturas.php'; ?>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Factura</div>
					<div class="cuerpo">
							<div class="buscars">
							<input type="text" id="buscar_cliente" name="buscar" class="panel">
							<button class="btn" id="btn_buscar">Buscar Factura</button>
							</div>
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
				<div class="mensaje-error hide"></div>
			</div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script type="text/javascript" src="scripts/buscar_facturas.js"></script>
	</body>
</html>