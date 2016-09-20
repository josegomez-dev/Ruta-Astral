var mesa = document.querySelectorAll('.mesa');
var i = mesa.length;
var mesaActual = 0; //Variable global que almacena el índice de la última meza clickeada.
var items = []; //Items de una orden
var agregar = false; //Si existe una orden cuando se agregan platos sólo se agregan a la orden.
var crear = false; //Si no existe una orden cuando se agregan platos se crea la orden.

function mostrarDatosMesa(nombre, id, capacidad, salonero, desc, estado){
	document.getElementById("nombre-mesa").innerHTML = "Información de la mesa " + nombre;
	document.getElementById("id-mesa").innerHTML = "ID: " + id;
	document.getElementById("capacidad-mesa").innerHTML = "Capacidad: " + capacidad;
	document.getElementById("salonero-mesa").innerHTML = "ID de salonero: " + salonero;
	document.getElementById("descripcion-mesa").innerHTML = "Descripción: " ;
	document.getElementById("estado").value = estado;
}//END mostrarDatosMesa


//MOSTRAR DATOS DE LA MESA
while (i--){
	mesa[i].addEventListener('click',function(){
		
		var nombre = this.querySelector("h4");
		var estado = this.querySelector(".estado p");
		var indice = this.dataset.index;
		mesaActual = this.dataset.index;
		
		var boton = document.getElementById("seleccionar-estado");
		boton.classList.remove("hide");
						
		var contenedor = document.getElementById("contenedor-datos");
		contenedor.classList.remove("hide");
		
		$.ajax({
        url: "php/leer_mesas.php",
        type: "post",
        async: false,
        data: {

	           },
        dataType: "json",	

		success: function(response){	
		
			mostrarDatosMesa(response[mesaActual-1]['nombre_mesa'], response[mesaActual-1]['id_mesa'], response[mesaActual-1]['capacidad_mesa'], response[mesaActual-1]['id_mesero'],
				"", response[mesaActual-1]['estado'].toLowerCase());

			if(existeOrden(mesaActual)){
				mostarTablaOrden();
				buscarOrdenActiva(mesaActual);
				agregar = true;
				crear = false;				
			} else{
				//console.log('NO TIENE ORDEN');
				
				if(consultarEstadoMesa(mesaActual) == 'Ocupada'){
					console.log('MOSTRAR');
					mostrarBotonCrear();
				} else{
					console.log('OCULTAR');
					ocultarBotonCrear();
				}//END if/else
				
				agregar = false;
				crear = true;
				ocultarTablaOrden();
			}//END if/else
			
		},//END success
		error: function(request, error) {
		    alert(error);
		}//END error
		
		});//END ajax
	
	})
}//END mostrar datos de la mesa



var otrasMesas = document.querySelector('#otras-mesas');
otrasMesas.addEventListener('change', function(){

	mesaActual = document.querySelector('#otras-mesas').children[this.selectedIndex].dataset.index;
	
	var boton = document.getElementById("seleccionar-estado");
	boton.classList.remove("hide");
					
	var contenedor = document.getElementById("contenedor-datos");
	contenedor.classList.remove("hide");
	
	if (mesaActual == 99){
		var contenedor = document.getElementById("contenedor-datos");
		contenedor.classList.add("hide");

	} else {
		$.ajax({
        url: "php/leer_mesas.php",
        type: "post",
        async: false,
        data: {

	           },
        dataType: "json",	

		success: function(response){	
		
			mostrarDatosMesa(response[mesaActual-1]['nombre_mesa'], response[mesaActual-1]['id_mesa'], response[mesaActual-1]['capacidad_mesa'], response[mesaActual-1]['id_mesero'],
				"", response[mesaActual-1]['estado'].toLowerCase());

			buscarOrdenActiva(mesaActual);

			if(existeOrden(mesaActual)){
				//console.log('SI TIENE ORDEN');

				mostarTablaOrden();
				buscarOrdenActiva(mesaActual);
				agregar = true;
				crear = false;
					
			} else{
				//console.log('NO TIENE ORDEN');
				if(consultarEstadoMesa(mesaActual) == 'Ocupada'){
					//console.log('MOSTRAR');
					mostrarBotonCrear();
				} else{
					//console.log('OCULTAR');
					ocultarBotonCrear();
				}//END if/else
				//consultarEstadoMesa(mesaActual);

				agregar = false;
				crear = true;
				ocultarTablaOrden();
			}//END if/else

		},//END success
		error: function(request, error) {
		    alert(error);
		}//END error
		
		});//END ajax
	}//END else
	
})


var estado = document.querySelector('#estado');

estado.addEventListener('change', function(){

    var nuevoEstado = estado.options[estado.selectedIndex].text;
    var id = mesaActual;

    //VALIDAR SI HAY ORDEN ANTES DE CAMBIAR EL ESTADO A LIBRE

	if(existePendiente(mesaActual)){
    	mensajesError(2);
    }else {
    	$.ajax({
	        url: "php/modificar_estado_mesa.php",
	        type: "post",
	        data: {
	            'estado': nuevoEstado,
	            'id' : id
	               },
	        success: function(response){
	            actualizarEstadoMesa(nuevoEstado);
	        	
	        },
	        error: function(request, error) {
	        	console.log(request);
	        }//END error        
  		});	      
    }//END if/else

    if(nuevoEstado == 'Ocupada'){
		console.log('MOSTRAR');
		mostrarBotonCrear();
	} else{
		console.log('OCULTAR');
		ocultarBotonCrear();
	}//END if/else

})//END

/*
estado.addEventListener('change', function(){

    var nuevoEstado = estado.options[estado.selectedIndex].text;
    var id = mesaActual;

    //VALIDAR SI HAY ORDEN ANTES DE CAMBIAR EL ESTADO A LIBRE

	if(existePendiente(mesaActual)){
    	//console.log('PAGUE');
   		mensajesError(2);
    } else{
		actualizarEstadoMesa(nuevoEstado);        	
    }


    var peticion = $.ajax({
        url: "php/modificarEstadoMesa.php",
        type: "post",
        data: {
            'estado': nuevoEstado,
            'id' : id
               },
        dataType: 'json',

        success: function(response){
        	
        	console.log('ESTOY EN EXITO');
        	actualizarEstadoMesa(nuevoEstado);
        	console.log('PAGUE');
        	if(existePendiente(mesaActual)){
        		console.log('PAGUE');
        	}
        	
        },
        error: function(request, error) {
            console.log('ESTOY EN ERROR');
        }//END error        
  	});

})//END
*/


/*  
	Función que muesta la tabla de menú para ordenar.
*/
var botonAgregar = document.querySelector('#boton-agregar');
botonAgregar.addEventListener('click', function(){

	mostrarMenu();

	var ordenar = document.querySelector('.modal');
	ordenar.classList.remove('hide');

});

var botonCrearOrden = document.querySelector('#boton-crear-orden');
botonCrearOrden.addEventListener('click', function(){

	mostrarMenu();

	var ordenar = document.querySelector('.modal');
	ordenar.classList.remove('hide');

});

function mostrarMenu(){

  	$.ajax({
        url: "php/leer_menu.php",
        type: "post",
        async: false,
        data: {

	           },
        dataType: "json",	

		success: function(response){
			//console.log('HOLA');
			
			var menu = document.querySelector('#menu-orden');
	
			menu.innerHTML = '';
			menu.innerHTML += '<thead>'+
				'<tr>'+
				'<th>ID</th>'+
				'<th>Nombre del Plato</th>'+
				'<th class="hide">Descripcion</th>'+
				'<th>Calorias</th>'+
				'<th>Precio</th>'+
				'</tr>'+
				'</thead>'+
				'<tbody>';

			for(var i=0; i<response.length; i++){	
				
				menu.innerHTML += '<tr data-id="'+response[i]['id_plato']+'">'+
					'<td>'+response[i]['id_plato']+'</td>'+
					'<td>'+response[i]['nombre_plato']+'</td>'+
					'<td class="hide">'+response[i]['descripcion']+'</td>'+
					'<td>'+response[i]['calorias']+'</td>'+
					'<td>'+response[i]['precio_plato']+'</td>'+
					'</tr>';
										
			
			}//END for	
			menu.innerHTML += '</tbody>';
			
			ordenarPlatos();

		},
		error: function(request, error) {
		    console.log(error);
		}
		});//END ajax
}//END mostrarMenu


//OCULTAR TABLA ORDENAR 
var botonCancelar = document.querySelector('#cancelar-orden');
botonCancelar.addEventListener('click', function(){

	var ordenar = document.querySelector('.modal');
	ordenar.classList.add('hide');
	items = [];

});

/*
	CANCELAR ORDEN
*/
function eliminarOrden(){

	var eliminarOrden = document.querySelector('#eliminar-orden');
	eliminarOrden.addEventListener('click', function(){

		var pendiente = false;

		if(existeOrden(mesaActual)){

			if(existePendiente(mesaActual)){
				mensajesError(1);// Imprime el error de orden activa.
			} else{
				desactivarOrden(idOrdenActual(mesaActual));
				ocultarTablaOrden();
			}//END if/else	
				
		}//END if 

	})//END cancelarOrden
}//END cancelarOrden


// SELECCIONAR PLATOS PARA ORDENAR
function ordenarPlatos(){
	//console.log('INICIA ORDENAR PLATOS');
	
	var platoOrdenado = document.querySelectorAll('#menu-orden tbody tr');
	var nuevoItem;
	var indiceLista = platoOrdenado.length;
	items = [];

	while(indiceLista--){

		platoOrdenado[indiceLista].addEventListener('click', function(){
			var existe = false;
			nuevoItem = parseInt(this.dataset.id);
			this.classList.toggle('selected');
						
			for(var j=0; j<items.length; j++){
				
				if(items[j] == nuevoItem){
					existe = true;
					items.splice(j,1);
				}//END if
			}//END for

			if(!existe){
					items.push(nuevoItem);		
			}//END if
	
		})
	}//END while
}//END ordenarPlatos


/*
	Evento para agregar items a una orden.
*/
var botonAgregarOrden = document.querySelector('#agregar-orden');
var ordenar = document.querySelector('.modal');
botonAgregarOrden.addEventListener('click', function(){

	//var ordenar = document.querySelector('.modal');
	//window.location.assign('salon_guion1.html');
	//console.log("Antes "+items);
	//console.log('Vamos a generarla');
	agregarItemsOrden(items);
	ordenar.classList.add('hide');
	items = [];
	//console.log("Despues "+items);
});

/*
	Evento para agregar items a una orden.

var botonCrearOrden = document.querySelector('#boton-crear-orden');
var ordenar = document.querySelector('.modal');
botonCrearOrden.addEventListener('click', function(){

	//var ordenar = document.querySelector('.modal');
	//window.location.assign('salon_guion1.html');
	//console.log("Antes "+items);
	//console.log('Vamos a generarla');
	agregarItemsOrden(items);
	ordenar.classList.add('hide');
	items = [];
	//console.log("Despues "+items);
});
*/

function agregarItemsOrden(arrayOrden){

	var existeOrden = false;
	var idOrden = -1;
	
	if(agregar){
		//console.log('SE AGREGARIA');
		idOrden = idOrdenActual(mesaActual);
	} else if(crear){
		//console.log('SE CREARIA');
		idOrden = crearOrden(mesaActual);
	}

	for(var i=0 ; i<arrayOrden.length ; i++){
		$.ajax({
		    url: "php/ingresar_item_orden.php",
		    type: "post",
		    data: {
		        'id_orden': idOrden,
		        'id_plato': arrayOrden[i],
		        'estado': 'Pendiente'
		           },
		    async: false,
		    success: function(response){
		    	console.log(response)
		    },
		    error: function(request, error) {
		    	console.log(request)
		    }        
		});
	}//END for

	refrescarTablaOrden();
	mostarTablaOrden();

	/*
		Leer el ultimo numero de orden y sumarle 1
		Hacer el insert
		Mostrar en la tabla
	*/
	//console.log(arrayOrden);
	//console.log("La mesa actual es: "+ mesaActual);
	//console.log("Desde generar Orden: " + arrayOrden);
}
	
function actualizarEstadoMesa(estadoActualizar){
	
	if(mesaActual<=10){
		mesa[mesaActual-1].children[3].innerHTML = '<i class="fa fa-circle fa-1x '+ estadoActualizar.toLowerCase() +'"></i><p> '+estadoActualizar+'</p>';
	}//END if
}//END actualizarEstadoMesa	

function consultarEstadoMesa(idMesa){
	
	var estado = '';
	$.ajax({
		    url: "php/consultar_estado_mesa.php",
		    type: "post",
		    data: {
		        'prueba': idMesa
		           },
		    async: false,
		    dataType: 'json',

		    success: function(response){
		    	estado = response[0]['estado'];
		    },
		    error: function(request, error) {
		    	//console.log(request);
		    }        
		});
	return estado;
}//END consultarEstadoMesa


/*
var eliminar = documentzzzzzzzzz.querySelector('#eliminar');
eliminar.addEventListener('click', function(){

	window.location.assign('salon.html');
	//ordenar.classList.add('hide');

});
*/


/*
	Evento para generar una factura según una orden.

var facturar = document.querySelector('#facturar');
facturar.addEventListener('click', function(){

	window.location.assign('facturacion_guion1.html');
	//window.location.assign('salon_guion1.html');
	//ordenar.classList.add('hide');

});
*/

/*
	Función que retorna si una mesa tiene una orden activa o no.
*/
function existeOrden(indiceMesa){

	var existe = false;
	var botonAgregar = document.querySelector('#boton-agregar');
	var botonCrear = document.querySelector('#boton-crear-orden');

	$.ajax({
        url: "php/buscar_items_orden.php",
        type: "post",
        data: {
            'estado': 'Facturado',
            'id' : indiceMesa
               },
        async: false,
        dataType: 'json',

        success: function(response){

        	if (response.length > 0){
        		//console.log('HAY ORDEN');
        		existe = true;
        		botonCrear.classList.add('hide');
        		botonAgregar.classList.remove('hide');
        	} else{
        		//console.log('NO HAY ORDEN');
        		botonCrear.classList.remove('hide');
        		botonAgregar.classList.add('hide');
        	}//END if/else
        },
        error: function(request, error) {
        }        
  	});

  	return existe;
}//END existeOrden

/*
	Función que consulta si la orden de la mesa tiene items pendientes de facturar.
*/
function existePendiente(indiceMesa){

	var pendiente = false;
	$.ajax({
        url: "php/buscar_items_orden.php",
        type: "post",
        data: {
            'estado': 'Facturado',
            'id' : indiceMesa
               },
        async: false,
        dataType: 'json',

        success: function(response){

        	for(var i=0; i<response.length ; i++){
        		if(response[i]['estado'] == 'Listo' ||
        			response[i]['estado'] == 'Entregado' ||
        			response[i]['estado'] == 'En tránsito'){

        			pendiente = true;
        		}//END if
        	}//END for
        },
        error: function(request, error) {
        }        
  	});

	return pendiente;
}//END existePendiente


/*
	Función que retorna si una mesa tiene una orden activa o no.
*/
function crearOrden(indiceMesa){

	var id = -1;
	$.ajax({
        url: "php/crear_orden.php",
        type: "post",
        data: {
            'id' : indiceMesa,
            'tipo' : 1
               },
        async: false,
        dataType: 'json',

        success: function(response){
        	id = response[0]['id_orden'];
        },	
        error: function(request, error) {
        	console.log(request);
        }        
  	});

  	return id;
}//END crearOrden

/*
	Función que cambia el tipo de orden para desactivarla. (Eliminar)
*/
function desactivarOrden(idOrden){

	$.ajax({
        url: "php/eliminar_orden.php",
        type: "post",
        data: {
            'id' : idOrden
               },
        async: false,
        dataType: 'json',

        success: function(response){
        	//console.log('Orden "ELIMINADA"');
        },	
        error: function(request, error) {
        	//console.log(request);
        }        
  	});
}//END eliminarOrden




/*
	Función que retorna el ID de la orden actual de la mesa.
*/
function idOrdenActual(indiceMesa){

	var id = -1;
	$.ajax({
        url: "php/buscar_items_orden.php",
        type: "post",
        data: {
            'estado': 'Facturado',
            'id' : indiceMesa
               },
        async: false,
        dataType: 'json',

        success: function(response){

        	if (response.length > 0){
        		//console.log('HAY ORDEN');
        		id = response[0]['id_orden'];
        	}
        },
        error: function(request, error) {
        }        
  	});

  	return id;
}//END existeOrden

/*
	Función que busca la orden de una mesa y construye la tabla de orden.
*/
function buscarOrdenActiva(indiceMesa){

	var peticion = $.ajax({
        url: "php/buscar_items_orden.php",
        type: "post",
        data: {
            'estado': 'Facturado',
            'id' : indiceMesa
               },
        dataType: 'json',

        success: function(response){

        	var ordenMesa = document.querySelector('#standar-table');
        	var opcionesOrden = document.querySelector('#opciones-orden');

        	ordenMesa.innerHTML = '';
        	ordenMesa.innerHTML += '<thead>'+
				'<th class="xxl">Nombre</th>'+
				'<th class="s">Descripción</th>'+
				'<th class="s">Estado</th>'+
				// '<th class="xxs">Editar</th>'+
				'</thead>'+
				'<tbody>';

        	for(var i=0; i<response.length; i++){
        		
        		//console.log(i);
        		//console.log(response[i]['id_plato']);
        		var plato = buscarPlatoSegunId(response[i]['id_plato']);
        		//console.log('YUJUUU' + plato[0]['nombre_plato']);
        		//console.log(buscarPlatoSegunId(response[i]['id_plato']));
        		console.log(plato);

        		if(response[i]['estado'] != 'Cancelado'){
        			if(response[i]['descripcion'] == undefined){
        				ordenMesa.innerHTML += '<tr>'+
	        			'<td>'+plato[0]['nombre_plato']+'</td>'+
	        			'<td>Regular</td>'+
	        			'<td>'+response[i]['estado']+'</td>'+
	        			// '<td>'+
	        			// '<i class="fa fa-pencil"></i>'+
	        			// '<i class="fa fa-trash-o"></i>'+
	        			// '</td>'+
	        			'</tr>'; 
        			}else{
        				ordenMesa.innerHTML += '<tr>'+
	        			'<td>'+plato[0]['nombre_plato']+'</td>'+
	        			'<td>'+response[i]['descripcion']+'</td>'+
	        			'<td>'+response[i]['estado']+'</td>'+
	        			// '<td>'+
	        			// '<i class="fa fa-pencil"></i>'+
	        			// '<i class="fa fa-trash-o"></i>'+
	        			// '</td>'+
	        			'</tr>'; 
        			}//END else   			
        		
        		}//END 
        		
        	}//END for

        	ordenMesa.innerHTML += '</tbody>';


        	opcionesOrden.innerHTML = '<div id="clrfix"></div>'+
        		'<input id="facturar-orden" type="button" value="Facturar" class="boton-derecho">'+
				'<input id="eliminar-orden" type="button" value="Eliminar orden" class="boton-derecho">';

			eliminarOrden();	

			var botonFacturar = document.querySelector('#facturar-orden');
			botonFacturar.addEventListener('click', function(){

					console.log('FACTURAR');
					//console.log('FACTURAR: ' 'facturacion.php?'+ idOrdenActual(mesaActual));
					window.location.assign('facturacion_facturar.php?idOrden='+ idOrdenActual(mesaActual));
			});

        },
        error: function(request, error) {
            //alert( ' '+error);
            console.log(request);
            //actualizarEstadoMesa(nuevoEstado);
        }        
  	});

}//END buscarOrdenActivo


/*
	Función que busca y retorna un plato, según su ID.
*/
function buscarPlatoSegunId(idPlato){
	
	var plato;
	
	$.ajax({
        url: "php/buscar_plato_id.php",
        type: "post",
        async: false,
        data: {
            'id' : idPlato
               },
        dataType: 'json',

        success: function(response){
        	plato = response;
        },
        error: function(request, error) {
            //alert( ' '+error);
            //console.log(request);
            //actualizarEstadoMesa(nuevoEstado);
        }        
  	});
 
  	return plato;
}//END buscarPlatoSegunId

function mostrarBotonCrear(){
	var boton = document.querySelector('#boton-crear-orden');
	boton.classList.remove('hide');
}//END mostrarBotonCrear

function ocultarBotonCrear(){
	var boton = document.querySelector('#boton-crear-orden');
	boton.classList.add('hide');
}//END ocultarBotonCrear

function ocultarTablaOrden(){
	var tablaOrden = document.querySelector('#orden-mesa');
	tablaOrden.classList.add('hide');
}//END ocultarTablaOrden


function mostarTablaOrden(){
	var tablaOrden = document.querySelector('#orden-mesa');
	tablaOrden.classList.remove('hide');
}//END mostarTablaOrden

function refrescarTablaOrden(){
	buscarOrdenActiva(mesaActual);
}//END refrescarTablaOrden

function mensajesError(idMensaje){
	
	var mensajeParaError = document.querySelector('.mensaje-error');	
	var mensaje = '';

	console.log('El id del mensaje es: '+ idMensaje);

	switch(idMensaje){
		case 1:
			mensaje = 'No se puede eliminar la orden porque tiene elementos pendientes de facturar.';
			break;
		case 2:
			mensaje = 'No se puede liberar la mesa porque tiene elementos pendientes de facturar.';
			break;
		default:
			break;
	}//END switch
	mensaje += '</br>CLICK AQUÍ PARA ELIMINAR ESTE ';
	mensajeParaError.innerHTML = mensaje;
	//console.log(mensaje);
	mensajeParaError.classList.remove('hide');
	//console.log(mensajeParaError);
	
	var documento = document;
	mensajeParaError.addEventListener('click',function(){
		// alert();
		this.classList.add('hide');
	})
}//END mensajesError


/*
	FACTURAR
*/


/***************************************************
					BACK UP
****************************************************/

/***********************
	FUNCION DE ORDENAR

var botonAgregar = document.querySelector('#boton-agregar');
botonAgregar.addEventListener('click', function(){

	mostrarMenu();

	function mostrarMenu(){

	  	var peticion = $.ajax({
	        url: "php/leer_menu.php",
	        type: "post",
	        async: false,
	        data: {

		           },
	        dataType: "json",	

			success: function(response){
				console.log('HOLA');
				
				var menu = document.querySelector('#menu-orden');
		
				menu.innerHTML = '';
				menu.innerHTML += '<thead>'+
					'<tr>'+
					'<th>ID</th>'+
					'<th>Nombre del Plato</th>'+
					'<th class="hide">Descripcion</th>'+
					'<th>Calorias</th>'+
					'<th>Precio</th>'+
					'</tr>'+
					'</thead>'+
					'<tbody>';

				for(var i=0; i<response.length; i++){	
					
					menu.innerHTML += '<tr data-id="'+response[i]['id_plato']+'">'+
						'<td>'+response[i]['id_plato']+'</td>'+
						'<td>'+response[i]['nombre_plato']+'</td>'+
						'<td class="hide">'+response[i]['descripcion']+'</td>'+
						'<td>'+response[i]['calorias']+'</td>'+
						'<td>'+response[i]['precio_plato']+'</td>'+
						'</tr>';
											
				
				}//END for	
				menu.innerHTML += '</tbody>';
				
				ordenarPlatos();

			},
			error: function(request, error) {
			    console.log(error);
			}
		});//END ajax

	}//END mostrarMenu

	var ordenar = document.querySelector('.modal');
	ordenar.classList.remove('hide');

});
**********************/