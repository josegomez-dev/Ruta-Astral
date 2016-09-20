console.log('Estamos en ordenesJS');
var items = document.querySelector('#standar-table');
var idPlatoOrden = 0;

listarItems();

function listarItems(){

	$.ajax({
        url: "php/mostrar_items_ordenes.php",
        type: "post",
        data: {
        	'estado': 'Facturado'
               },
        async: false,
        dataType: 'json',

        success: function(response){
        	//console.log(response);
        	var itemsOrdenes = document.querySelector('#items-ordenes');
        	itemsOrdenes.innerHTML = '';

        	// console.log(response);

        	for(var i=0; i<response.length ; i++){

		        var hora = response[i].hora + ':' + (response[i].hora < 10 ? '0' + response[i].hora : response[i].hora);

		        var linea = itemsOrdenes.insertRow();
		        linea.insertCell().innerHTML = response[i]['nombre_plato'];
		        linea.insertCell().innerHTML = hora;
		        linea.insertCell().innerHTML = response[i]['nombre_mesa'];
		        linea.insertCell().innerHTML = response[i]['id_orden'];

		        var ultimaCelda = linea.insertCell();

		        var newSelect = document.createElement('select');
		        var pendiente = document.createElement('option');
		        var listo = document.createElement('option');
		        var transito = document.createElement('option');
		        var cancelado = document.createElement('option');
		        var entregado = document.createElement('option');

		        pendiente.value = 'Pendiente';
		        pendiente.innerText = 'Pendiente';
		        listo.value = 'Listo';
		        listo.innerText = 'Listo';
		        transito.value = 'En transito';
		        transito.innerText = 'En tránsito';
		        cancelado.value = 'Cancelado';
		        cancelado.innerText = 'Cancelado';
		        entregado.value = 'Entregado';
		        entregado.innerText = 'Entregado';

		        newSelect.appendChild(pendiente);
		        newSelect.appendChild(listo);
		        newSelect.appendChild(transito);
		        newSelect.appendChild(cancelado);
		        newSelect.appendChild(entregado);

		        ultimaCelda.appendChild(newSelect);

		        newSelect.classList.add('boton-derecho');

		        newSelect.dataset.index = response[i]['id_plato_x_orden'];

		        newSelect.value = response[i].estado;

        	}//END for
        	
        },	
        error: function(request, error) {

        }        
  	});

}//END listarItems


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


/*
	Función que busca y retorna una mesa según su ID.
*/
function buscarMesaSegunId(idMesa){
	
	var mesa;
	
	$.ajax({
        url: "php/buscar_mesa_id.php",
        type: "post",
        async: false,
        data: {
            'id' : idMesa
               },
        dataType: 'json',

        success: function(response){
        	mesa = response;
        },
        error: function(request, error) {

        }        
  	});
 
  	return mesa;
}//END buscarMesaSegunId



/*
	Función que busca y retorna una orden según su ID.
*/
function buscarOrdenSegunId(idOrden){
	
	var orden;
	//console.log('Orden: '+idOrden);
	
	$.ajax({
        url: "php/buscar_orden_id.php",
        type: "post",
        async: false,
        data: {
            'id' : idOrden
               },
        dataType: 'json',

        success: function(response){
        	orden = response;
        },
        error: function(request, error) {

        }        
  	});
 
  	return orden;
}//END buscarMesaSegunId

var selector = document.querySelectorAll('select');
var indice = selector.length;
while (indice--){
	selector[indice].addEventListener('change',function(){
		console.log(this.dataset.index);
		console.log(this.value)
		
		actualizarEstado(this.value, this.dataset.index);
		
	});
}//END while

function actualizarEstado(nEstado, idPla){
	
	console.log('Estamos en funcion' +nEstado +idPla);
	
	$.ajax({
        url: "php/modificar_estado_item.php",
        type: "post",
        async: false,
        data: {
            'nuevoEstado' : nEstado,
            'id' : idPla
               },

        success: function(response){
        	console.log(response);
        	location.reload();
        },
        error: function(request, error) {
   			console.log(request);
   			//location.reload();
        }        
  	});

}

/*

var elementosOrden = document.querySelectorAll('.elemento-orden');
var estadoOrden = document.querySelectorAll('.boton-derecho');
var i = estadoOrden.length;

while(i--){

	estadoOrden[i].addEventListener('change',function(){

		var elementoOrden = this.parentNode.parentNode;

		console.log(this.parentNode.parentNode);

		if(this.value == "Entregado" || this.value == "Cancelado" ){
			elementoOrden.remove(); //Elimina			
			//elementoOrden.classList.add('hide'); //Oculta			
				
		}

		console.log(elementoOrden.classList);
	})
}
*/

/***************************************************
					BACK UP
****************************************************/

/*************************
//JSON VIEJO, Primera Iteracion
var ordenes = [
	{
		"nombre":"Arroz con pollo",
		"descripcion":"Con 1 papa",
		"estado":"Pendiente"
	},
	{
		"nombre":"Arroz con pollo",
		"descripcion":"Con 2 papas",
		"estado":"Pendiente"
	},
	{
		"nombre":"Arroz con pollo",
		"descripcion":"Con 3 papas",
		"estado":"Pendiente"
	},
	{
		"nombre":"Arroz con pollo",
		"descripcion":"Con 4 papas",
		"estado":"Pendiente"
	}
];

*************************/
