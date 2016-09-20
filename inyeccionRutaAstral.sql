				/*INFORMACION PARA INSERTAR EN LA BASE DE DATOS*/

/*GENERAL*/
	INSERT INTO `general`(`id`,`nombre_negocio`,`direccion`,`cedula_juridica`,`telefono`,`impuesto_ventas`,`impuesto_servicio`,`hora_previa_reserva`,`duracion_reserva`,`costo_express`,`consecutivo_facturas`)
	VALUES (1,
		'La Ruta Astral',
		'Lejos muy lejos cruza el ropero sigue  con cuidado que la bruja no lo encuentre',
		'1-2354-4874',
		'22702367',
		13,
		15,
		2,
		1,
		15000,
		1);

/*PUESTOS*/
	INSERT INTO `puestos`(`id_puesto`,`nombre_puesto`,`descripcion_puesto`)
	VALUES (1,'Administrador','Admin del restaurante');

	INSERT INTO `puestos`(`id_puesto`,`nombre_puesto`,`descripcion_puesto`)
	VALUES (2,'Soporte','Encargado IT');

	INSERT INTO `puestos`(`id_puesto`,`nombre_puesto`,`descripcion_puesto`)
	VALUES (3,'Cajero','Encargado de caja');

	INSERT INTO `puestos`(`id_puesto`,`nombre_puesto`,`descripcion_puesto`)
	VALUES (4,'Salonero','Encargado de salón');

	INSERT INTO `puestos`(`id_puesto`,`nombre_puesto`,`descripcion_puesto`)
	VALUES (5,'Cocina','Encargado de cocina');

	INSERT INTO `puestos`(`id_puesto`,`nombre_puesto`,`descripcion_puesto`)
	VALUES (6,'Misc','Empleado del restaurante');

	INSERT INTO `puestos`(`id_puesto`,`nombre_puesto`,`descripcion_puesto`)
	VALUES (7,'Cliente','Cliente del restaurante');


/*USUARIOS*/
	INSERT INTO `usuarios`(`id_usuario`,`nombre_completo`,`nombre_usuario`,`clave_usuario`,`cedula`,`correo`,`id_puesto`,`rol`,`estado_usuario`,`telefono`,`direccion`,`fecha_nacimiento`,`puntos`)
	VALUES (1,
		'Melanie Fallas',
		'mfallas',
		'abc123456',
		'11111',
		'mfallas@rutaAstral',
		1,
		'Administrador',
		1,
		'21111111',
		'Desamparados',
		'2000-1-1',
		NULL);

	INSERT INTO `usuarios`(`id_usuario`,`nombre_completo`,`nombre_usuario`,`clave_usuario`,`cedula`,`correo`,`id_puesto`,`rol`,`estado_usuario`,`telefono`,`direccion`,`fecha_nacimiento`,`puntos`)
	VALUES (2,
		'Leonardo Cruz',
		'lcruz',
		'abc123456',
		'22222',
		'lcruz@rutaAstral',
		2,
		'Soporte',
		1,
		'22222222',
		'Desamparados',
		'2000-1-1',
		NULL);

	INSERT INTO `usuarios`(`id_usuario`,`nombre_completo`,`nombre_usuario`,`clave_usuario`,`cedula`,`correo`,`id_puesto`,`rol`,`estado_usuario`,`telefono`,`direccion`,`fecha_nacimiento`,`puntos`)
	VALUES (3,
		'Jhonny Camacho',
		'jcamacho',
		'abc123456',
		'33333',
		'jcamacho@rutaAstral',
		3,
		'Cajero',
		1,
		'23333333',
		'Desamparados',
		'2000-1-1',
		NULL);

	INSERT INTO `usuarios`(`id_usuario`,`nombre_completo`,`nombre_usuario`,`clave_usuario`,`cedula`,`correo`,`id_puesto`,`rol`,`estado_usuario`,`telefono`,`direccion`,`fecha_nacimiento`,`puntos`)
	VALUES (4,
		'David Brenes',
		'dbrenes',
		'abc123456',
		'44444',
		'dbrenes@rutaAstral',
		4,
		'Salonero',
		1,
		'24444444',
		'Pavas',
		'1990-12-13',
		NULL);

	INSERT INTO `usuarios`(`id_usuario`,`nombre_completo`,`nombre_usuario`,`clave_usuario`,`cedula`,`correo`,`id_puesto`,`rol`,`estado_usuario`,`telefono`,`direccion`,`fecha_nacimiento`,`puntos`)
	VALUES (5,
		'Alejandro Gomez',
		'agomez',
		'abc123456',
		'55555',
		'agomez@rutaAstral',
		7,
		'Cliente',
		1,
		'25555555',
		'Grecia',
		'2000-1-1',
		NULL);


/*TIPOS DE PLATOS*/
	
	INSERT INTO `tipo_plato`(`id_tipo`,`nombre_tipo`,`descripcion`)
	VALUES (1,'Plato fuerte','Plato fuerte');

	INSERT INTO `tipo_plato`(`id_tipo`,`nombre_tipo`,`descripcion`)
	VALUES (2,'Cóctel','Bebida alcohólica preparada');

/*PLATOS*/
	/*PLATOS FUERTES*/
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (1,
		'Ñoquis (Gnocchi) caseros',
		'Pasta y salsa',
		1,
		'Una pasta italiana cuyo ingrediente principal es la papa. Prepara estos ñoquis en casa y sírvelos con tu salsa italiana favorita',
		4000,
		1000,
		'img/menu001.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (2,
		'Spaghetti a la boloñesa fácil',
		'Pasta y salsa',
		1,
		'Spagueti a la boloñesa con pocos ingredientes, pero mucho sabor',
		4000,
		1000,
		'img/menu002.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (3,
		'Lasagne della casa',
		'Pasta, queso, salsa y alcachofa',
		1,
		'Tradicional con salsa boloñesa, queso parmesano y alcachofa',
		4000,
		1000,
		'img/menu003.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (4,
		'I piccolini di spinaci',
		'Pasta, queso, espinaca, salsa y aceite de trufa',
		1,
		'Mini ravioles rellenos de ricotta y espinaca, gratinados con salsa blanca y aceite de trufa',
		4000,
		1000,
		'img/menu004.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (5,
		'Asparagi e zafferano',
		'Arroz, espárragos, azafrán y queso',
		1,
		'Arroz arborio al estilo italiano con espárragos, azafrán y parmesano',
		4000,
		1000,
		'img/menu005.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (6,
		'Pizza mergherita',
		'Tomate, albahaca y queso',
		1,
		'Tomate, Albahaca y Mozztella',
		4000,
		1000,
		'img/menu006.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (7,
		'4 Stagioni',
		'Queso, jamón, anchoas, aceitunas, alcachofas y hongos.',
		1,
		'Mozzarela, ricota, jamon de pavo, anchoas, aceituna negra, alcachofas y champiñón.',
		4000,
		1000,
		'img/menu007.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (8,
		'Lomito de res a la plancha',
		'Lomito, yuca al ajillo',
		1,
		'Dicen quienes gustan de un buen trozo de carne, que el lomito de Chubascos es inigualable. ¿ será el corte? ¿ será el adobo? No lo tenemos muy claro, pero sí que gusta. Se trata de una porción de 200 gramos de puro lomito de res de la mejor calidad, le quitamos la grasa y lo dejamos madurando al menos dos días. Ahora en vez de papitas, lo estamos sirviendo con yuca sancochadita con ajo',
		4000,
		1000,
		'img/menu008.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (9,
		'Olla de carne',
		'Sopa, carne, verdura',
		1,
		'Una sopa de carne con cantidad de verduras y arroz amarillo. Una comida sabrosa, completa y deliciosa, especialmente cuando hace frío. Le servimos el caldo y el arroz y Ud. se acerca a la cocina de leña a elegir las verduras que desea entre el elote, el tacaco, la yuca, la papa, el ayote, la zanahoria, el plátano verde, el chayote, el tiquisque, el ñampí....tiene de todo!',
		4000,
		1000,
		'img/menu009.png');

	/*COCTELES*/

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (10,
		'Watermelon Martini',
		'Coctel',
		2,
		'skyy vodka / sandía / sirope de caña de azúcar / servido en copa martini',
		3000,
		500,
		'img/menu010.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (11,
		'Passion fruit Martini',
		'Coctel',
		2,
		'skyy vodka / fruta de la pasión/ sirope de caña de azúcar / servido en copa martini',
		3000,
				500,
		'img/menu011.png');
	

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (12,
		'Eclipse',
		'Coctel',
		2,
		'ketel one vodka / shochu infusionado / azúcar /sandía / servido en vaso alto con hielo',
		3000,
		500,
		'img/menu012.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (13,
		'Sexo en la playa',
		'Coctel',
		2,
		'vodka / 1 oz de jugo de naranja /½ oz de cóctel de arándanos',
		3000,
		500,
		'img/menu013.png');

	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (14,
		'Orgasmo Chillón',
		'Coctel',
		2,
		'hielo picado / 1 oz de vodka de calidad / 1 ½ oz de crema irlandesa de Bailey / ½ oz de kahlua',
		3000,
		500,
		'img/menu014.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (15,
		'Caribbean Mojito',
		'Coctel',
		2,
		'brugal ron / licor de naranja / angostura bitters / lima / naranja / menta / cava / servido en vaso	alto con hielo',
		3000,
		500,
		'img/menu015.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (16,
		'Squares Delight',
		'Coctel',
		2,
		'gin mare ginebra / martini bianco / limón / azúcar / uva / albahaca / clara de huevo/ bitter de apio/servido en copa martini',
		3000,
		500,
		'img/menu010.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (17,
		'Fraise Clicquot',
		'Coctel',
		2,
		'veuve clicquot champagne / licor de sauco st germain / fresa / sirope de canela / bitter de Jerry thomas de naranja / servido en flauta royal',
		3000,
		500,
		'img/menu011.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (18,
		'Here comes the sun',
		'Coctel',
		2,
		'Beluga vodka /amareto disaronno / fruta de la pasión / zumo de lima / clara de huevo / azúcar /servido en vaso alto con hielo',
		3000,
		500,
		'img/menu012.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (19,
		'Spicy garden',
		'Coctel',
		2,
		'bombay original ginebra / frambuesa / lima / canela / agua de rosas / tabasco / ginger ale / servido en copa gota',
		3000,
		500,
		'img/menu013.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (20,
		'Flower symphony',
		'Coctel',
		2,
		'Sky vodka / licor st germain / cava juve camps / canela / menta / lima / pomelo / servido en copa gota',
		3000,
		500,
		'img/menu014.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (21,
		'Cloudy Window',
		'Coctel',
		2,
		'bacardi superior ron / sirope de canela / sirope de miel / lychee / granada / fresa / lavanda / servido en vaso alto con hielo',
		3000,
		500,
		'img/menu015.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (22,
		'Summer pure',
		'Coctel',
		2,
		'belvedere / amareto disaronno / zumo de manzana / manzana fresca / lima / azúcar / clara de
		huevo',
		3000,
		500,
		'img/menu010.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (23,
		'Sinners future',
		'Coctel',
		2,
		'zacapa 23 ron / campari / sirope de canela / albahaca / bitter de pomelo / zumo de pomelo /
		cayena / lima / servido en copa gota y borde de cayena',
		3000,
		500,
		'img/menu011.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (24,
		'Moonlight San Francisco',
		'Coctel',
		2,
		'Ciroc vodka / cointreau / sirope de chocolate / fresas / lima / clara de huevo / servido en flauta royal con cacao rallado',
		3000,
		500,
		'img/menu012.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (25,
		'Old tennese',
		'Coctel',
		2,
		'tanqueray ten ginebra / licor st. germain / miel / uva / clara de huevo / lima / angostura / servido en copa martini',
		3000,
		500,
		'img/menu013.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (26,
		'Mediterranean Lady',
		'Coctel',
		2,
		'london nº3 ginebra / cointreau / sirope de azucar / lima / albahaca / romero / menta / servido en
		copa martini',
		3000,
		500,
		'img/menu014.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (27,
		'Pink Floyd',
		'Coctel',
		2,
		'Belvedere vodka / licor de moras / moras frescas / melocotón / miel / cava juve camps / servido
		en copa catalina',
		3000,
		500,
		'img/menu015.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (28,
		'Amalfi sour',
		'Coctel',
		2,
		'grey goose vodka / limoncello / sirope de fresa / miel / fresas / limón / clara de huevo / pimienta / servido en flauta royal',
		3000,
		500,
		'img/menu010.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (29,
		'Spring Essence',
		'Coctel',
		2,
		'johnie Walker gold whisky / kway feh lychee / zumo de lychee / sirope de rosas / lima / clara de huevo / servido en copa martini',
		3000,
		500,
		'img/menu011.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (30,
		'Sun Tzu',
		'Coctel',
		2,
		'grey goose vodka / aperol / kumquats / lima / pomelo / sirope de almendras / servido en flauta
		royal',
		3000,
		500,
		'img/menu012.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (31,
		'Dark Temptation',
		'Coctel',
		2,
		'brugal ron / passoa / veuve cliquot champagne / piña / vainilla / lima / menta / fruta de la pasión / servido en vaso alto con hielo',
		3000,
		500,
		'img/menu013.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (32,
		'Mosquito',
		'Coctel',
		2,
		'menta / sirope de miel / lima / manzana / hielo picado',
		3000,
		500,
		'img/menu014.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (33,
		'Monday',
		'Coctel',
		2,
		'zumo de arándanos / zumo de manzana / sirope de canela / fresas/ lima / servido en copa catalina',
		3000,
		500,
		'img/menu015.png');
	
	INSERT INTO `platos`(`id_plato`,`nombre_plato`, `ingredientes`, `id_tipo`, `descripcion`, `precio_plato`, `calorias`,`url_imagen`) 
	VALUES (34,
		'Natural Elixir',
		'Coctel',
		2,
		'limón / zumo de naranja / piña/ sirope de canela / arándanos / jengibre/ hielo picado',
		3000,
		500,
		'img/menu010.png');
	
/*MESAS*/
	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (1,'Abraxas',4,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (2,'Arcanas',6,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (3,'Chakra',8,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (4,'Antares',10,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (5,'Virgo',6,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (6,'Médium',4,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (7,'Tantra',8,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (8,'Amanecer',10,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (9,'Tarot',6,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (10,'Acuario',7,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (11,'Mesa11',5,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (12,'Mesa12',5,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (13,'Mesa13',5,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (14,'Mesa14',5,1,1,'libre',1);

	INSERT INTO `mesas`(`id_mesa`,`nombre_mesa`,`capacidad_mesa`,`preferencial`,`id_mesero`,`estado`,`activo`)
	VALUES (15,'Mesa15',5,1,1,'libre',1);


/*ORDENES*/
	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (1,1);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (2,1);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (3,3);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (4,4);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (5,5);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (6,1);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (7,2);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (8,8);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (9,12);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (10,6);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (11,1);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (12,5);

	INSERT INTO `ordenes` (`id_orden`,`id_mesa`) VALUES (13,13);


/*PLATOS POR ORDEN*/
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (1,
		1,
		'Facturado');

	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (2,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (3,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (4,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (5,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (6,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (7,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (8,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (9,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (10,
		1,
		'Facturado');
	
	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (11,
		1,
		'Pendiente');

	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (11,
		2,
		'Pendiente');

	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (11,
		27,
		'Pendiente');

	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (11,
		28,
		'Pendiente');

	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (12,
		9,
		'Pendiente');

	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (12,
		22,
		'Listo');

	INSERT INTO `platos_x_orden` (`id_orden`,`id_plato`,`estado`) 
	VALUES (13,
		6,
		'Entregado');

/*FALTAN
	BITACORA
	FACTURAS
	METODOS DE PAGO
	RESERVACIONES
*/
