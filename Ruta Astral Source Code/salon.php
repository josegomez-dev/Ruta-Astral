<!doctype html>
<html>
	<head>
		<title>Salon</title>
		<link rel="stylesheet" href="css/salon.css">
		<?php require 'parciales/head.php'; ?>
	</head>
	<body>
		<?php require 'parciales/sidebar.php'; ?>

		<div class="main">
			<div class="top-menu">
				<nav>
					<a href="#" class="selected">General</a>
					<a href="#">Mesas</a>
					<a href="#">Platos</a>
					<a href="#">Usuarios</a>
				</nav>
			</div>	

			<!--CUERPO DE SALON.HTML-->

			<section id="mesas-salon" class="salon">
				<div id="grafico-mesas">
					
				</div>
				

				<!--DESPLEGABLE OTRAS MESAS
				<select id="otras-mesas" class="boton-derecho">
					
					<option value="">Otras mesas</option>
					
					<option data-index="10" value="mesa011">Mesa 11</option>
					<option data-index="11" value="mesa012">Mesa 12</option>
					<option data-index="12" value="mesa013">Mesa 13</option>
					<option data-index="13" value="mesa014">Mesa 14</option>
					<option data-index="14" value="mesa015">Mesa 15</option>
				</select>
				-->

				<select id="otras-mesas" class="boton-derecho">
					
					<option value="">Otras mesas</option>
					<!--
					
					<option data-index="10" value="mesa011">Mesa 11</option>
					<option data-index="11" value="mesa012">Mesa 12</option>
					<option data-index="12" value="mesa013">Mesa 13</option>
					<option data-index="13" value="mesa014">Mesa 14</option>
					<option data-index="14" value="mesa015">Mesa 15</option>
					-->
				</select>
				<!--END DESPLEGABLE OTRAS MESAS-->

				<div id="contenedor-datos" class="hide">
				
					<!--DATOS DE LA MESA-->
					<div class="datos-mesa">
						<h1 id="nombre-mesa"></h1>
						<section>
							<p id="id-mesa"></p>
							<p id="capacidad-mesa"></p>
						</section>

						<section>
							<p id="salonero-mesa"></p> 	
							<p id="descripcion-mesa"></p>
						</section>

						<section id="seleccionar-estado" class="hide">
							<p>Estado</p>
							<select id="estado">
								
								<option value="libre">Libre</option>
								<option value="ocupada">Ocupada</option>
								<option value="reservada">Reservada</option>
							
							</select>
						</section>

						<div id="clrfix"></div>
					</div>
					<!--END DATOS DE LA MESA-->


					<input id="boton-crear-orden" type="button" value="Crear orden" class="boton-derecho">
					
					<input id="boton-agregar" type="button" value="Agregar plato" class="boton-derecho">
					
					<!--END BOTONES DE ORDENES-->

					<!--ORDEN DE LA MESA-->
					
					<div id="clrfix"></div>
					<div class="mensaje-error hide"></div>

					<section id="orden-mesa">
						<h1>Orden de la mesa</h1>

						
						<table id="standar-table">
						<!--
							<thead>
								<th class="xxl">Nombre</th>
								<th class="s">Descripción</th>
								<th class="s">Estado</th>
								<th class="xxs">Editar</th>
							</thead>

							<tbody>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td>	
										<i class="fa fa-pencil"></i>
										<i class="fa fa-trash-o"></i>
									</td>
								</tr>
							</tbody>
						TABLA DE ORDEN-->
						</table>
						<!--END TABLA DE ORDEN-->
						<div id="opciones-orden">
					
						</div>
					</section>
					<!--END ORDEN DE LA MESA-->

				</div><!--END PRINCIPAL CONTENEDOR DE DATOS--> 
				
				<!-- MENSAJE DE ERROR-->				
					
				<!-- END MENSAJE DE ERROR-->

			</section>
			<!--END CUERPO DE SALON.HTML-->
			<!--AGREGAR PLATO-->
			<section class="modal hide">
				<div id="botones-orden">
					<input id="cancelar-orden" type="button" value="Cancelar" class="boton-derecho" href="salon.html">
					<input id="agregar-orden" type="button" value="Agregar" class="boton-derecho">
				</div>
					<div class="modal-cuerpo">
						
						<table id="menu-orden" class="tabla">
							
						</table>						
				</div>
	
				<div></div>
				<!-- <input id="cancelar-orden" type="button" value="Cancelar" class="boton-derecho" href="salon.html">
				<input id="agregar-orden" type="button" value="Agregar" class="boton-derecho"> -->
			</section>	
			<!--END AGREGAR PLATO-->
		
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script src="scripts/leer_mesas.js"></script>
		<script src="scripts/salon.js"></script>
	</body>
</html>
	