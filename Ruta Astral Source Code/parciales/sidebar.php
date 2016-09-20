<?php 
	$url = $_SERVER['REQUEST_URI'];
	$url = explode("/", $url);
	$url = $url[count($url) - 1];
	$url = explode(".", $url)[0];

	require 'roles.php';

	$linksInferiores = [
		[
			"nombre" => "Registrarse",
			"link" => "registro_usuario",
			"icon" => "<i class='fa fa-plus'></i>"
		],[
			"nombre" => "Ingresar",
			"link" => "iniciar_sesion",
			"icon" => "<i class='fa fa-sign-in'></i>"
		],[
			"nombre" => "Perfil",
			"link" => "perfil",
			"icon" => "<i class='fa fa-user'></i>"
		]
	];

	
?>
<div class="side-bar">
	<img id="logo" src="img/logo.png">
	<nav>
		<?php

			foreach ($linksPorRol as  $link) {
				if($link['link'] == $url ||
					explode("_", $url)[0] == $link['link'] ||
					explode("_", $url)[0] == explode("_", $link['link'])[0]){
					echo "<a class='selected'  href='" . $link['link'] . ".php'>" . $link["icon"] . " " . $link['nombre'] . "</a>";
				} else{
					if($url == '' && $link['link'] == "index"){
						echo "<a class='selected'  href='" . $link['link'] . ".php'>" . $link["icon"] . " " . $link['nombre'] . "</a>";
					}else{
						echo "<a  href='" . $link['link'] . ".php'>" . $link["icon"] . " " . $link['nombre'] . "</a>";
					}
				}
			}
		?>
	</nav>
	<?php
		if(isset($_COOKIE['nombreUsuario'])){
			echo "<p>" . $_COOKIE['nombreUsuario'] . "</p>";		
		} else{
			echo "<p></p>";
		}
	?>
	<nav class="opciones-usuario">
		<?php 
			foreach ($linksInferiores as  $link) {
				if($haySesion && $link['nombre'] == "Perfil"){
					if($link['link'] == $url){
						echo "<a class='selected'  href='" . $link['link'] . ".php'>" . $link["icon"] . " " . $link['nombre'] . "</a>";	
					} else{
						echo "<a  href='" . $link['link'] . ".php'>" . $link["icon"] . " " . $link['nombre'] . "</a>";
					}
					echo "<a id='cerrar-session' href='index.php'><i class='fa fa-sign-out'></i> Cerrar sesión</a>";

				} else if(!$haySesion && $link['nombre'] != "Perfil"){
					if($link['link'] == $url || explode("_", $url)[0] == $link['link']){
						echo "<a class='selected'  href='" . $link['link'] . ".php'>" . $link["icon"] . " " . $link['nombre'] . "</a>";
					} else{
						echo "<a  href='" . $link['link'] . ".php'>" . $link["icon"] . " " . $link['nombre'] . "</a>";
					}
				}
			}
		?>
	</nav>
</div>