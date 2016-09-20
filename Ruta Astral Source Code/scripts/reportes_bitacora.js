var filtro = document.getElementById("filtro");
var tbody = document.querySelector("#reporte-bitacora tbody");
var imprimir = document.querySelector(".imprimir");
var fechaInicio = document.querySelector("#fecha-inicio");
var fechaFinal = document.querySelector("#fecha-final");
var nombreUsuario = document.querySelector("#nombre-usuario");
var tbody = document.querySelector("#reporte-bitacora tbody");

obtenerBitacora();

filtro.addEventListener("submit", function(event){
	event.preventDefault();

	obtenerBitacora();

});



imprimir.addEventListener("click", function(){

	var elementoAImprimir = document.getElementById('reporte-bitacora');
	newWin= window.open("");
	newWin.document.write(elementoAImprimir.outerHTML);
	newWin.print();
	newWin.close();

});

function obtenerBitacora(){

	tbody.innerHTML = '';

	$.ajax({
		url: 'php/obtener_bitacora.php',
		type: 'POST',
		data: {
			pnombreUsuario: nombreUsuario.value,
			pfechaInicio: fechaInicio.value,
			pfechaFinal: fechaFinal.value
		},
		success: function(data, textStatus, xhr){

			data.forEach(function(element, index){
				element.fecha_hora = new Date(element.fecha_hora);
			});

			data.sort(function (a,b){
				return a.fecha_hora - b.fecha_hora;
			})

			console.log(data);

			var tr;

			data.forEach(function(element, index){ 
				tr = tbody.insertRow();

				var fecha = element.fecha_hora,
					minutos = fecha.getMinutes() < 10 ? '0' +fecha.getMinutes(): fecha.getMinutes();

				tr.insertCell().innerText = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
				tr.insertCell().innerText = fecha.getHours() + ':' + minutos;
				tr.insertCell().innerText = element.nombre_usuario;
				tr.insertCell().innerText = element.accion;
				tr.insertCell().innerText = element.tipo_elemento;
				tr.insertCell().innerText = element.nombre_elemento;
			});


		},
		error: function(req, status, error){
			console.error(req.responseText);
		}
	});
	
}