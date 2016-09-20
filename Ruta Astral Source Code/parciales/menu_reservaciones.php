<?php 
	$url = $_SERVER['REQUEST_URI'];
	$url = explode("/", $url);
	$url = $url[count($url) - 1];
	$url = explode(".", $url)[0];

	$links = [
		[
			"nombre" => "Hacer reservación",
			"link" => "reservaciones"
		],[
			"nombre" => "Ver reservaciones",
			"link" => "reservaciones_visualizar",
		],[
			"nombre" => "Cancelar reservaciones",
			"link" => "reservaciones_cancelar"
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