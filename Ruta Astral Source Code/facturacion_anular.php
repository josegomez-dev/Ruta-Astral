<!doctype html>
<html>
	<head>
		<title>Anular Facturas</title>
		<?php require 'parciales/head.php'; ?>
		<link rel="stylesheet" href="css/facturacion.css">
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
									<th>Descuento</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>

				</div>
				<div class="panel">
					<div class="titulo">Anular Facturas</div>
					<div class="cuerpo">
						<input type="text" id="buscar_factura" name="buscar" class="panel">
						<button class="btn" id="btn_anular">Anular Factura</button>					
					</div>

				</div>
				<div class="mensaje-error hide"></div>
			</div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script src="scripts/anular_factura.js"></script>
	</body>
</html>
