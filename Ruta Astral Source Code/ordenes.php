<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Ordenes</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/ordenes.css">
		<link rel="stylesheet" href="css/tablas.css">
		<link rel="stylesheet" href="css/font-awesome.css">
		<link rel="stylesheet" href="css/salon.css">
	</head>
	<body>
		<?php require 'parciales/sidebar.php' ?>
		<div class="main">
			<div class="top-menu">
				<nav>
					<a href="config_general.html" class="selected">General</a>
					<a href="mantenimiento_mesas.html">Mesas</a>
					<a href="mantenimiento_platos.html">Platos</a>
					<a href="configuracion_usuarios.html">Usuarios</a>
					<a href="ingresar_puesto.html">Puestos</a>
				</nav>
			</div>	

			<!--CUERPO DE ORDENES.HTML-->
			<section id="ordenes">

				<!--ORDEN DE LA MESA-->
				<section id="ordenes">
					<h1>Órdenes pendientes</h1>

					<!--TABLA DE ORDEN-->
					<table id="standar-table">
						<thead>
							<th id="l">Nombre</th>
							<th id="xxs">Ingreso</th>
							<th id="xxs">Origen</th>
							<th id="xxs">Orden</th>
							<th id="xxs">Estado</th>
						</thead>
						<tbody id="items-ordenes">
							
						</tbody>
					</table>
					<!--END TABLA DE ORDEN-->
					<div id="clrfix"></div>

				</section>
				<!--END ORDEN DE LA MESA-->

			</section>
			<!--END CUERPO DE SALON.HTML-->

		</div>
		<script src="scripts/sesion.js"></script>
		<script src="scripts/jquery.js"></script>
		<script src="scripts/ordenes.js"></script>
	</body>
</html>