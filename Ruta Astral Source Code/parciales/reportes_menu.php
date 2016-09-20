<?php 
	$url = $_SERVER['REQUEST_URI'];
	$url = explode("/", $url);
	$url = $url[count($url) - 1];
	$url = explode(".", $url)[0];

	$links = [
		[
			"nombre" => "Bitácora",
			"link" => "reportes_bitacora"
		],[
			"nombre" => "Platos",
			"link" => "reportes_platos"
		],[
			"nombre" => "Facturación",
			"link" => "reportes_facturacion",
		],[
			"nombre" => "Visitas",
			"link" => "reportes_visitas",
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