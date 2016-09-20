<?php 
	$url = $_SERVER['REQUEST_URI'];
	$url = explode("/", $url);
	$url = $url[count($url) - 1];
	$url = explode(".", $url)[0];

	$links = [
		[
			"nombre" => "General",
			"link" => "configuracion"
		],[
			"nombre" => "Mesas",
			"link" => "configuracion_mesas"
		],[
			"nombre" => "Platos",
			"link" => "configuracion_platos",
		],[
			"nombre" => "Usuarios",
			"link" => "configuracion_usuarios",
		],[
			"nombre" => "Puestos",
			"link" => "configuracion_puesto",
		]
	];
?>

<div class="top-menu show">
	<nav>
		<?php 
			foreach ($links as  $link) {
				if($link['link'] == $url){
					echo "<a class='selected' href='" . $link['link'] . ".php'>" . $link['nombre'] . "</a>";
				} else{
					echo "<a href='" . $link['link'] . ".php'>" . $link['nombre'] . "</a>";
				}
			}
		?>
	</nav>
</div>