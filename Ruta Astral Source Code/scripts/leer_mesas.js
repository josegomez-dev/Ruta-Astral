console.log("Prueba de conexión");
mostrarMesas();

function mostrarMesas(){

  	var peticion = $.ajax({
        url: "php/leer_mesas.php",
        type: "post",
        async: false,
        data: {

	           },
        dataType: "json",	

		success: function(response){

			var mesas = document.querySelector('#grafico-mesas');
			var mesasAdicionales = document.querySelector('#otras-mesas');

			mesas.innerHTML = '';
			mesasAdicionales.innerHTML = '';

			var i=0;

			console.log(response)

			while(i<10 && i< response.length){
				
				mesas.innerHTML += '<div data-index="'+response[i]['id_mesa']+'" class="mesa">'+
					'<img src="img/mesa.png">'+ 
					'<h4>'+response[i]['nombre_mesa']+'</h4>'+
					'<p class="capacidad">Capacidad: <span class="cantidad">'+response[i]['capacidad_mesa']+'</span></p>'+
					'<div class="estado">'+
					'<i class="fa fa-circle fa-1x '+response[i]['estado'].toLowerCase()+'"></i>'+
					'<p> '+response[i]['estado']+'</p>'+
					'</div></div>';

				i++;
			}//END for

			mesasAdicionales.innerHTML += '<select id="otras-mesas" class="boton-derecho">'+
					'<option data-index="99">Otras mesas</option>';
			for(i=10; i<response.length; i++){

				mesasAdicionales.innerHTML += '<option data-index="'+response[i]['id_mesa']+'" value="mesa0'+i+'">'+response[i]['nombre_mesa']+'</option>'+			
					'</select>';
				
			}

			mesasAdicionales.innerHTML += '</select>';

		},
		error: function(request, error) {
		    console.log(request);
		    alert(error);
		}
	});//END ajax

}//END mostrarMesas
