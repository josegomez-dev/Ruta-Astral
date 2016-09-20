<!doctype html>
<html >
	<head>
		<?php require("parciales/head.php") ?>
		<title>Manteniento Platos</title>
	</head>
	<body>
		<?php require 'parciales/sidebar.php' ?>

			<div class="main">
			<?php require 'parciales/configuracion_menu.php'; ?>	

			<div class="contenedor">
			
				<div class="panel">
					<div class="titulo">Platos</div>
					<div class="cuerpo">
						<div class="contenedor-tabla">
							<table id="tabla-info-platos" class="tabla">
								<thead>
									<tr>
										<th>ID</th>
										<th>Nombre Plato</th>
										<th>Precios</th>
										<th>Tipo</th>
										<th>Estado</th>
										<th></th>
									</tr>
								</thead>
								<tbody class="tbody-centrado">
								</tbody>								

							</table>
						</div>
						<div class="flotar-derecha">
							<i class="fa fa-plus agregar-nuevo"></i>
							
						</div>
						<div class="clear"></div>	
						<form id="info-platos" class="hide" method="post" action="">
							<div class="col-2">
								<label for="nombre-plato">Nombre Plato</label>
								<input id="nombre-plato" class="text-input" type="text" name="nombre-plato"></input>
								<label for="ingredientes">Ingredientes</label>
								<input id="ingredientes" class="text-input" type="text" name="ingredientes"></input> 
								<label for="descripcion">Descripción</label>
								<textarea id="descripcion" class="text-input" type="text" name="descripcion"></textarea>
								<label>Precio</label>
								<input id="precio" class="text-input" type="text" name="precio"></input>
							</div>

							<div class="col-2">
								<label for="calorias">Calorias</label>
								<input id="calorias" class="text-input" type="text" name="calorias"></input>
								<label for ="tipo">Tipo</label>
								<select id="tipo" class="btn">
									<option value="">Seleccionar</option>
									<option value="1">Plato fuerte</option>
									<option value="2">Coctel</option>
								</select>
								<label for ="activo">Estado</label>
								<select id="activo"  class="btn" >
									<option value="">Seleccionar</option>
									<option value="true">Activo</option>
									<option value="false">Inactivo</option>
								</select>
								<label for="imagen">Imagen</label>
								<input type="file" class="text-input" id="imagen">
								<div class="img-container">
									<img id="imagen-plato" src="" alt="">
								</div>
							</div>
							<div class="clear"></div>
							<div class="flotar-derecha">
								<button class="btn btn-cancelar cancelar-form" id="cancelar-ingreso">Cancelar</button>
								<button class="btn btn-guargar guardar-form" id="guardar-nuevo">Guardar</button>
							</div>
						</form>
						<div class="clear"></div>
						<div class="mensaje-error hide">Verficar espacios vacíos</div>
					</div>			
				</div>	
			</div>	
		</div>
		<?php echo require "parciales/javascript.php";?>
		<script src="scripts/configuracion_platos.js"></script>
	</body>
</html>					