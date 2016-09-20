console.log("Prueba de conexión");
mostrarMenu();
window.print();

function mostrarMenu(){

  	var peticion = $.ajax({
        url: "php/leer_menu.php",
        type: "post",
        async: false,
        data: {

	           },
        dataType: "json",	

		success: function(response){

			var menu = document.querySelector('#menu-imprimir');
			var i = 0;

			menu.innerHTML = '';
			menu.innerHTML += '<thead>'+
			'<tr>'+
			'<th>ID</th>'+
			'<th>Nombre del Plato</th>'+
			'<th>Descripción</th>'+
			'<th>Calorías</th>'+
			'<th>Precio</th>'+
			'</tr>'+
			'</thead>';

			menu.innerHTML += '<tbody>';

			for(var i=0; i<response.length; i++){
				menu.innerHTML += '<tr>'+
				'<td>'+response[i]['id_plato']+'</td>'+		
				'<td>'+response[i]['nombre_plato']+'</td>'+
				'<td>'+response[i]['descripcion']+'</td>'+
				'<td>'+response[i]['calorias']+'</td>'+
				'<td>₡'+response[i]['precio_plato']+'</td>'+
				'</tr>';
			}//END for

			menu.innerHTML += '</tbody>';

			//console.log(menu);
		},
		error: function(request, error) {
		    console.log(request);
		}
	});//END ajax

}//END mostrarMenu
