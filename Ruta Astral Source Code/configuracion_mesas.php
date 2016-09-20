<!doctype html>
<html>
	<head>
		<title>Mantenimiento Mesas</title>
		<?php require 'parciales/head.php'; ?>

	</head>
	<body>
		
		<?php require 'parciales/sidebar.php' ?>

			<div class="main">
			<?php require 'parciales/configuracion_menu.php'; ?>
			
			<div class="contenedor">
			
				<div class="panel">
					<div class="titulo"> Mesas</div>
					<div class="cuerpo">
						<div class="contenedor-tabla">
							<table class="tabla" id="tabla-info-mesas">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Capacidad</th>
										<th>IdMesero</th>
										<th>Preferencia</th>
										<th>Estado mesa</th>
										<th></th>
									</tr>
								</thead>
								<tbody class="tbody-centrado">
								</tbody>
			
							</table>
						</div>
						<div class="flotar-derecha">
								<i class="fa fa-plus" id="agregar-nuevo"></i>
							
						</div>
						<div class="clear"></div>	
						<form id="info-mesas" class="form-pequeno hide" method="post" action="">
							<label for="nombre">Nombre</label>
							<input id="nombre" class="text-input" type="text" name="nombre-mesa"></input>
							<label for="capacidad">Capacidad</label>
							<input id="capacidad" class="text-input" type="text" name="capacidad"> </input>
							<label for="id-mesero">Id mesero</label>
							<input id="id-mesero" class="text-input" type="text" name="idMesero"> </input>
							<label for ="preferencial">Escoja si es preferencial</label>
							<div class="text-input">
								<select id="preferencial"  class="btn" >
									<option value="">Seleccionar</option>
									<option value="true">Si</option>
									<option value="false">No</option>
								</select>
							</div>
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
		<script src="scripts/configuracion_mesas.js"></script>

	</body>
</html>		