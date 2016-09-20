<!doctype html>
<html>
	<head>
		<title>Reservaciones</title>
		<link rel="stylesheet" href="css/reservacion.css">
		<?php require 'parciales/head.php'; ?>
	</head>
	<body>
		<?php require 'parciales/sidebar.php'; ?>
		<div class="main">
			<?php require 'parciales/menu_reservaciones.php'; ?>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Hacer Reservaciones</div>
					<div class="cuerpo">
						<div class="col-9">
						<table id="clients_table" class="tabla">
								<thead>
									<tr>
										<th>Fecha:</th>
										<th>Hora:</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input type="date" name="fecha-inicio" data-type="date" placeholder="DD/MM/AAAA" class="text-input date" id='fecha_reservacion'>
										</td>
										<td>
											<select id="desde_hora">
											  <option value="16">16:00</option>
											  <option value="17">17:00</option>
											  <option value="18">18:00</option>
											  <option value="19">19:00</option>
											  <option value="20">20:00</option>
											  <option value="21">21:00</option>
											  <option value="22">22:00</option>
											  <option value="23">23:00</option>
											  <option value="00">00:00</option>
											</select> 
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="">
							<button class="btn" id="buscar_mesa">Buscar Mesa</button>
						</div>
						<section id="mesas-salon" class="salon hide">
							<div id="grafico-mesas">
							</div>
							<br />
							<button class="btn" id="reservar">Reservar</button>
						</section>
					</div>
				</div>
			</div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script src="scripts/hacer_reservaciones.js"></script>
	</body>
</html>
