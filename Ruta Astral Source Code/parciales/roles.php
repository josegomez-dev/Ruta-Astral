<?php
	$linksSuperiores = [
		"menu" => [
			"nombre" => "Menú",
			"link" => "index",
			"icon" => "<i class='fa fa-cutlery'></i>"
		],
		"salon" => [
			"nombre" => "Salon",
			"link" => "salon",
			"icon" => "<i class='fa fa-users'></i>"
		],
		"config" => [
			"nombre" => "Configuración",
			"link" => "configuracion",
			"icon" => "<i class='fa fa-cogs'></i>"
		],
		"ordenes" => [
			"nombre" => "Órdenes",
			"link" => "ordenes",
			"icon" => "<i class='fa fa-list'></i>"
		],
		"express" => [
			"nombre" => "Exprés",
			"link" => "express",
			"icon" => "<i class='fa fa-motorcycle'></i>"
		],
		"reservaciones" => [
			"nombre" => "Reservaciones",
			"link" => "reservaciones",
			"icon" => "<i class='fa fa-calendar'></i>"
		],
		"facturacion" => [
			"nombre" => "Facturación",
			"link" => "facturacion",
			"icon" => "<i class='fa fa-calculator'></i>"
		],
		"reportes" => [
			"nombre" => "Reportes",
			"link" => "reportes_bitacora",
			"icon" => "<i class='fa fa-pencil-square'></i>"
		]
	];

	$roles = [
		"Administrador" => [
			$linksSuperiores["menu"],
			$linksSuperiores["salon"],
			$linksSuperiores["config"],
			$linksSuperiores["ordenes"],
			$linksSuperiores["reservaciones"],
			$linksSuperiores["facturacion"],
			$linksSuperiores["reportes"]

		],
		"Soporte" => [
			$linksSuperiores["menu"],
			$linksSuperiores["salon"],
			$linksSuperiores["config"],
			$linksSuperiores["ordenes"],
			$linksSuperiores["reservaciones"],
			$linksSuperiores["facturacion"],
			$linksSuperiores["reportes"]
		],
		"Cajero" =>[
			$linksSuperiores["menu"],
			$linksSuperiores["salon"],
			$linksSuperiores["ordenes"],
			$linksSuperiores["express"],
			$linksSuperiores["facturacion"]

		],
		"Salonero" => [
			$linksSuperiores["menu"],
			$linksSuperiores["salon"],
			$linksSuperiores["ordenes"],
		],
		"Cocina" => [
			$linksSuperiores["ordenes"]
		],
		"Cliente" =>[
			$linksSuperiores["menu"],
			$linksSuperiores["express"],
			$linksSuperiores["reservaciones"]
		],
		"Anonimo" =>[
			$linksSuperiores["menu"]
		]
	];

	$haySesion = false;
	if(isset($_COOKIE['rol'])){
		$rol = $_COOKIE['rol'];

		$linksPorRol = $roles[$rol];

		$haySesion = true;

	} else{
		$linksPorRol = $roles["Anonimo"];
	}

	
?>