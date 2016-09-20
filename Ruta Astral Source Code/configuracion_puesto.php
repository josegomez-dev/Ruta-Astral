<!doctype html>
<html>
	<head>
		<title>Configuración Puestos</title>
		<?php require 'parciales/head.php'; ?>

	</head>
	<body>
		
		<?php require 'parciales/sidebar.php' ?>

			<div class="main">
			<?php require 'parciales/configuracion_menu.php'; ?>
			
			<div class="contenedor">
			
				<div class="panel">
					<div class="titulo">Puestos</div>
					<div class="cuerpo">
						<div class="contenedor-tabla">
							<table class="tabla" id="tabla-info-puestos">
								<thead>
									<tr>
										<th>Id</th>
										<th>Puesto</th>
										<th>Descripción</th>
										<th>Estado</th>
										<th></th>
									</tr>
								</thead>
								<tbody class="tbody-centrado">
								</tbody>
			
							</table>
						</div>
						<div class="flotar-derecha">
								<i class="fa fa-plus" id="agregar-nuevo-puesto"></i>
							
						</div>
						<div class="clear"></div>	
						<form id="info-puestos" class="form-pequeno hide" method="post" action="">
							<label for="puesto">Puesto</label>
							<input id="puesto" class="text-input" type="text" name="puesto"></input>
							<label for="descripcion">Descripción</label>
							<textarea id="descripcion" class="text-input" type="text" name="descripcion"></textarea>
							<label for ="activo">Estado</label>
							<div class="text-input">
								<select id="activo"  class="btn" >
									<option value="">Seleccionar</option>
									<option value="true">Activo</option>
									<option value="false">Inactivo</option>
								</select>
							</div>
							<div class="clear"></div>
							<div class="flotar-derecha">
								<button class="btn btn-guargar guardar-form" id="guardar-nuevo">Guardar</button>
								<button class="btn btn-cancelar cancelar-form" id="cancelar-ingreso">Cancelar</button>
							</div>
							<div class="clear"></div>
						</form>	
						<div class="mensaje-error hide">Verificar datos vacios</div>
									
					</div>	
				</div>	
			</div>	
		</div>
		
		<?php echo require "parciales/javascript.php";?>
		<script src="scripts/configuracion_puestos.js"></script>

	</body>
</html>