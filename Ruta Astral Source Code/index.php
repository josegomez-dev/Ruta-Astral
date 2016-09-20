<!doctype html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Menu</title>
		<?php require 'parciales/head.php'; ?>
		<link rel="stylesheet" href="css/menu.css">
	
	</head>
	<body cz-shortcut-listen="true">
		<?php require 'parciales/sidebar.php' ?>
		<div class="main">
			<section class="menu">
				<input id="boton-imprimir" type="button" value="Imprimir" class="btn">
				<div id="clrfix"></div>	
					
				<div id="menu-platos">
					<div class="division"><h2>Platos fuertes</h2></div>
					<div id="platos"></div>
					<div class="division"><h2>Cocteles</h2></div>
					<div id="bebidas"></div>

				</div>
			</section>
		</div>
		<?php echo require "parciales/javascript.php";?>
		<script src="scripts/menu.js"></script>
		<script src="scripts/leer_menu.js"></script>
	</body>
</html>