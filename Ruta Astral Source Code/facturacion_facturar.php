<!doctype html>
<html>
	<head>
		<title>Facturacion</title>
		<?php require 'parciales/head.php'; ?>
	</head>
	<body>
		<?php require 'parciales/sidebar.php' ?>
		<div class="main">
			
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Cliente</div>
					<div class="cuerpo">
							<div class="buscars">
							<input type="text" id="buscar_cliente" name="buscar" class="panel">
							<button class="btn" id="btn_buscar">Buscar Cliente</button>
							</div>
						<table id="clients_table" class="tabla">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Nombre Usuario</th>
									<th>Correo</th>
									<th>Telefono</th>
									<th>Cant. Puntos</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel">
					<div class="titulo">Facturación</div>
					<div class="cuerpo">
						<table class="tabla" id="tabla_factura">
							<thead>
								<tr>
									<th>Platillo</th>
									<th>Precio<br></th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel">
					<div class="titulo">Factura</div>
					<div class="cuerpo">
						<table class="tabla" id="datos_generales">
							<thead>
								<tr>
									<th>% I.V.A</th>
									<th>% Impuesto Servicio</th>
									<th>% Precio Express<br></th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
						<table class="tabla" id="descuentos">
							<thead>
								<tr>
									<th>% Descuento</th>
									<th>Puntos A Redimir</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th><input type="text" id="descuento" class="input-pequeno"></th>
									<th><input type="text" id="puntos_redimidos" class="input-pequeno"><th>
									<button class="btn" id="btn_calcular">Calcular</button>
								</tr>

							</tbody>
						</table>
						 <table class="tabla" id="resultados">
							<thead>
								<tr>
									<th>Sub. Total</th>
									<th>Total</th>
									<th>Puntos Obtenidos<br></th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
						<div class="clear">&nbsp;&nbsp;&nbsp;&nbsp;</div>
						<div class="flotar-derecha">
							&nbsp;
							<button class="btn" id="btn_facturar">Facturar</button>
						</div>
						<div class="clear"></div>

						<div class="mensaje-error hide"></div>
					</div>
				</div>
			</div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script>
			var idOrden = <?php echo $_GET['idOrden'] ?>
		</script>
		<script src="scripts/ver_ordenes.js"></script>
		<script src="scripts/obtener_datos_generales.js"></script>
	</body>
</html>
