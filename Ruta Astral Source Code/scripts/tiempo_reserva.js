var previoReserva = document.querySelector("#previo");
var duracionReserva = document.querySelector("#duracion");
var guardarPlato= document.querySelector(".guardar-form");

guardarPlato.addEventListener("click", function(event){
	event.preventDefault();
	if(esNumero(previoReserva.value) && esNumero(duracionReserva.value)){
		alert("Se guardo");
	}else{
		alert("Error")
	}
	
})

function esNumero(valor){
	var resul = valor % 1 === 0;

	console.log(resul);

	return resul;
}
