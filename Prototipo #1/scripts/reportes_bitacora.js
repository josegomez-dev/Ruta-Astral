var filtro = document.getElementById("filtro");
var tbody = document.querySelector("#reporte-bitacora tbody");
var imprimir = document.querySelector(".imprimir");

var lista = [
	{
		hora: "10:00am",
		usuario: "DBrenez",
		accion: "Moficar mesa",
		descripcion: "mesa Gaia capacidad 10"
	},{
		hora: "12:00pm",
		usuario: "LCruz",
		accion: "Agrega Plato",
		descripcion: "Brownie Astral"
	},{
		hora: "2:35pm",
		usuario: "JBravo",
		accion: "Crea Usuario",
		descripcion: "MFallas"
	}
]

filtro.addEventListener("submit", function(event){
	event.preventDefault();

	var isValid = true;

	for(var i = 0; i < this.length; i++){
		var input = this[i] 
		var type = input.dataset.type;

		// console.log()
	
		if(type == "date"){

			var match = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.exec(input.value);

			if(match != null){
				var dia = input.value.split("/")[0];
				var mes = input.value.split("/")[1];
				var anio = input.value.split("/")[2];

				var fecha = mes + "/" + dia + "/" + anio;

				var isDate = !isNaN(Date.parse(fecha));

				// console.log(isDate);

				if(!isDate){
					isValid = false;
				}
			} else{
				// console.log(match);
				isValid = false;
			}
		}
	}

	console.log(isValid);

	if(isValid){
		var string = "";

		for(i in lista){
			string += "<tr>"
			+ "<td>" + lista[i].hora + "</td>"
			+ "<td>" + lista[i].usuario + "</td>"
			+ "<td>" + lista[i].accion + "</td>"
			+ "<td>" + lista[i].descripcion + "</td>"
			+ "</tr>"
		}

		tbody.innerHTML = string;
	}

});

imprimir.addEventListener("click", function(){

	var elementoAImprimir = document.getElementById('reporte-bitacora');
	newWin= window.open("");
	newWin.document.write(elementoAImprimir.outerHTML);
	newWin.print();
	newWin.close();

});
