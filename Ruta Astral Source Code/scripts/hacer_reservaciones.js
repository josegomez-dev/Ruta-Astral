//var cancelarReservacion = document.getElementById("cancelar_reservacion");
var buscarMesas = document.getElementById('buscar_mesa');

var tiempoReservacion = 0;

var mesaActual = 0; //Variable global que almacena el índice de la última mesa clickeada.
var reservar = document.getElementById('reservar');
var fechaFormateada = 0;
var fechHora =0;

buscarMesas.addEventListener('click', function() {
  obtenerTiempoReservacion();
  var fecha = document.getElementById('fecha_reservacion').value.replace(/-/g, '/');
  var horaDesde = document.getElementById('desde_hora').value;
  console.log(horaDesde);
  var inicioReservacion = new Date(fecha);

  fechHora = inicioReservacion.setHours(horaDesde)/1000;
  console.log(fecha);
  console.log(inicioReservacion);

  mostrarMesas(fechHora);
});

reservar.addEventListener('click', function() {
	console.log(mesaActual);
	ingresarReservacion();
});

function obtenerTiempoReservacion(){
     var peticion = $.ajax({
         url:"php/obtener_tiempo_reserva.php",        
         type: "POST",
         async: false,
         data: {},
         dataType: "json",

         success: function(response){
             console.log(response);
            
             for(var i = 0; i<response.length; i++){
                
                 tiempoReservacion = response[i]['duracion_reserva'];

                
             }
         },
         error: function(request, error) {
             console.log(request.responseText);
         }
     });
 }


function mostrarMesas(fechaHora){

	var peticion = $.ajax({
	    url: "php/cargar_mesas_desocupadas.php",
		type: "post",
		async: false,
		data: {
			'phora' : fechaHora
		},
	    dataType: "json",	

		success: function(response){
			var section = document.getElementById('mesas-salon');
			var mesas = document.querySelector('#grafico-mesas');
			section.classList.remove("hide");
			mesas.innerHTML = '';

			for(var i = 0; i<response.length; i++){

				mesas.innerHTML += '<div data-idmesa="'+response[i]['id_mesa']+'" class="mesa">'+
					'<img src="img/mesa.png">'+ 
					'<h4>'+response[i]['nombre_mesa']+'</h4>'+
					'<p class="capacidad">Capacidad: <span class="cantidad">'+response[i]['capacidad_mesa']+'</span></p>';

			}
			obtenerUltimaMesaSeleccionada();

		},
		error: function(request, error) {
		    console.log(request.responseText);
		}
	});

}


function ingresarReservacion(){
	var peticion = $.ajax({
	    url:"php/hacer_reservaciones.php",
	    type: "post",
	    data: {
	        'phora' : fechHora,
	        'pid_mesa' : mesaActual,
	        'pid_usuario' : $.cookie('idUsuario'),
	    },
	    success: function(response){
			location.reload();	        
	    },
	    error: function(request, error) {
	        console.log(request.responseText);
	    }
  	});
}


function obtenerUltimaMesaSeleccionada(){
	var mesa = document.querySelectorAll('.mesa');
	var b = mesa.length;
	while (b--){
	  mesa[b].addEventListener('click',function(){
		console.log(this.dataset);
		mesaActual = parseInt(this.dataset.idmesa);
		console.log('La mesa clickeada tiene el id: ' + mesaActual);
	
	  });
	}
}
