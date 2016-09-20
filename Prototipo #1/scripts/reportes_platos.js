var filtro = document.getElementById("filtro");
var tbody = document.querySelector("#reporte-plato tbody");
var imprimir = document.querySelector(".imprimir");

var lista = [
	{
		cantidad: 10,
		plato: "Arroz Con pollo",
		hora: "6:00pm"
	},{
		cantidad: 3,
		plato: "Brownie",
		hora: "4:00pm"
	},{
		cantidad: 1,
		plato: "Ceviche",
		hora: "8:00pm"
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
			+ "<td>" + lista[i].cantidad + "</td>"
			+ "<td>" + lista[i].plato + "</td>"
			+ "<td>" + lista[i].hora + "</td>"
			+ "</tr>"
		}

		tbody.innerHTML = string;
	}

});

imprimir.addEventListener("click", function(){

	var elementoAImprimir = document.getElementById('reporte-plato');
	newWin= window.open("");
	newWin.document.write(elementoAImprimir.outerHTML);
	newWin.print();
	newWin.close();

});
