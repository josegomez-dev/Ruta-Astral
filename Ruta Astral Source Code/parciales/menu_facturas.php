<?php 
	$url = $_SERVER['REQUEST_URI'];
	$url = explode("/", $url);
	$url = $url[count($url) - 1];
	$url = explode(".", $url)[0];

	$links = [
		[
			"nombre" => "Ver facturas",
			"link" => "facturacion"
		],[
			"nombre" => "Buscar factura",
			"link" => "facturacion_buscar",
		],[
			"nombre" => "Anular factura",
			"link" => "facturacion_anular"
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