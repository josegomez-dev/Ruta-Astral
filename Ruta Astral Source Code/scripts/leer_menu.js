//console.log("Prueba de conexión");
var platos = document.getElementById('platos'),
	bebidas = document.getElementById('bebidas');
mostrarMenu();

function mostrarMenu(){

  	var peticion = $.ajax({
        url: "php/leer_menu.php",
        type: "post",
        data: {

	           },
        dataType: "json",	

		success: function(response){

			var menu = document.querySelector('#menu-platos');
			var cocteles = true; 
			var platosFuertes = true
			var divisionPlatos = 0,
				divicionBebidas = 0;
			
			// menu.innerHTML = '';
			
		// console.log(response)
			for(var i=0; i<response.length; i++){	
				
				if(response[i]['id_tipo'] == 1){

					platos.innerHTML += '<div class="item">' +
						'<img src="'+response[i]['url_imagen']+'" class="plato">' +
						'<h3>'+response[i]['nombre_plato'] +'</h3>' + 
						'<p class="cal">'+response[i]['calorias'] + ' 	cal</p>' +
						'<div id="clrfix"></div>'+
						'<p class="desc">'+response[i]['descripcion']+'</p>'+
						'</div>';

					if((divisionPlatos%3) == 2){
						platos.innerHTML += '<div class="division-platos"></div>';
					}
					divisionPlatos++;

				} else if(response[i]['id_tipo'] == 2){
					

					bebidas.innerHTML += '<div class="item">'+
						'<img src="'+response[i]['url_imagen']+'" class="plato">'+
						'<h3>'+response[i]['nombre_plato']+'</h3>'+ 
						'<p class="cal">'+response[i]['calorias']+' cal</p>'+
						'<div id="clrfix"></div>'+
						'<p class="desc">'+response[i]['descripcion']+'</p>'+
						'</div>';

					if((divicionBebidas%3) == 2){
						bebidas.innerHTML += '<div class="division-platos"></div>';
					}
					divicionBebidas++;

				}//END if

			}//END for	

		},
		error: function(request, error) {
		    // alert(error);
		    console.log(request);
		}
	});//END ajax

}//END mostrarMenu
