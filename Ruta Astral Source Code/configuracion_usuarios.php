<?php require "php/conexion.php";
	$stmt = $conn->prepare("SELECT * FROM PUESTOS;");

	$stmt->execute();

	$puestos = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
?>
<!doctype html>
<html>
	<head>
		<?php require 'parciales/head.php'; ?>
		<title>Configuracion Usuarios</title>
	</head>
	<body>
	<?php require 'parciales/sidebar.php' ?>
		<div class="main">
			<?php require 'parciales/configuracion_menu.php'; ?>
			<div class="contenedor">
				<div class="panel">
					<div class="titulo">Usuarios</div>
					<div class="cuerpo">
						<div class="contenedor-tabla">	
							<table id="tabla-info-usuario" class="tabla">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre completo</th>
										<th>Puesto</th>
										<th>Estado</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						</div>
						<div class="flotar-derecha">
							<i class="fa fa-pencil hide"></i>
							<i id="agregar-usuario" class="fa fa-user-plus"></i>
						</div>
						<div class="clear"></div>
						<form action="" method="post" id="info-usuario" class="hide">
							<div class="col-2">
								<label for="nombre-completo">Nombre completo	</label>
								<input type="text" id="nombre-completo" class="text-input" name="user">
								<label for="cedula">Cédula</label>
								<input type="text" id="cedula" name="cedula" class="text-input numero">
								<label for="usuario">Nombre de usuario</label>
								<input type="text" id="usuario" class="text-input" name="usuario">
								<label for="clave">Contraseña</label>
								<input type="password" id="clave" class="text-input" name="pass">
								<label for="telefono">Teléfono</label>
								<input type="text" id="telefono" class="text-input numero" name="telefono">
								<label for="direccion">Dirección</label>
								<textarea name="direccion" id="direccion" class="text-input"></textarea>
							</div>
							<div class="col-2">
								<label for="correo">Correo</label>
								<input type="text" id="correo" class="text-input" name="correo">
								<label for="fecha-nacimiento">Fecha de nacimiento</label>
								<input type="date" id="fecha-nacimiento" class="text-input">
								<label for="puesto">Puesto</label>
								<select name="puesto" id="puesto" class="style-select">
									<option value="null">Seleccionar</option>
									<?php 
										foreach ($puestos as $puesto) {
											$nombrePuesto = $puesto['nombre_puesto'];
											$idPuesto = $puesto['id_puesto'];

											echo "<option value='$idPuesto'>$nombrePuesto</option>";
										}
									?>
								</select>
								<label for="rol">Rol</label>
								<select name="rol" id="rol" class="style-select">
									<option value="">Seleccionar</option>
									<option value="Administrador">Administrador</option>
									<option value="Soporte">Soporte</option>
									<option value="Cajero">Cajero</option>
									<option value="Salonero">Salonero</option>
									<option value="Cocina">Cocina y Bar</option>
									<!-- <option value="Miselaneo">Miselaneo</option> -->
									<option value="Cliente">Cliente</option>
								</select>
								<label for="estado">Estado</label>
								<select name="estado" id="estado" class="style-select">
									<option value="true">Activo</option>
									<option value="false">Inactivo</option>
								</select>
							</div>
							<div class="clear"></div>
							<div class="flotar-derecha">
								<button type="reset" class="btn btn-cancel cancelar-form">Cancelar</button>
								<button id="guardar" type="submit" class="btn btn-normal enviar-form">Guardar</button>
							</div>
							<div class="clear"></div>
							<div class="mensaje-error hide"></div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<?php require 'parciales/javascript.php'; ?>
		<script src="scripts/configuracion_usuarios.js"></script>
	</body>
</html>