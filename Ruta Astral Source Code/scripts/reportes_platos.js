var filtro = document.getElementById("filtro"),
	tbody = document.querySelector("#reporte-plato tbody"),
	imprimir = document.querySelector(".imprimir")
	fechaInicio = filtro.querySelector("[name=fecha-inicio]"),
	fechaFinal =  filtro.querySelector("[name=fecha-final]");

obtenerReporte();

filtro.addEventListener("submit", function(event){
	event.preventDefault();
	
	obtenerReporte();

});

imprimir.addEventListener("click", function(){

	var elementoAImprimir = document.getElementById('reporte-plato');
	newWin= window.open("");
	newWin.document.write(elementoAImprimir.outerHTML);
	newWin.print();
	newWin.close();

});

function obtenerReporte(){
	tbody.innerHTML = '';

	$.ajax({
		url: 'php/obtener_reporte_platos.php',
		type: 'POST',
		data: {
			pfechaInicio: fechaInicio.value,
			pfechaFinal: fechaFinal.value
		},
		success: function(data, textStatus, xhr){

			// data.forEach(function(element, index){
			// 	element.fecha_hora = new Date(element.fecha_hora);
			// });

			// data.sort(function (a,b){
			// 	return a.cant_platos - b.cant_platos;
			// });

			console.log(data);

			var tr;

			data.forEach(function(element, index){ 
				tr = tbody.insertRow();

				// var fecha = element.fecha_hora;

				tr.insertCell().innerText = element.hora;
				tr.insertCell().innerText = element.cant_platos;
				tr.insertCell().innerText = element.nombre_plato;
			});


		},
		error: function(req, status, error){
			console.error(req.responseText);
		}
	});
}