var eliminar = document.querySelectorAll(".eliminar");
var modificar= document.querySelectorAll(".modificar");
var formInfoPlatos = document.querySelector("#info-platos");
var formNombreEsp= document.querySelector("#nombre-esp");
var formNombreIng= document.querySelector("#nombre-ing");
var formIngredientes= document.querySelector("#ingredientes");
var formPrecio= document.querySelector("#precio");
var formCalorias= document.querySelector("#calorias");
var formCaractEspeciales= document.querySelector("#caract-especiales");
var formTipo= document.querySelector("#tipo");
var ingresar=document.querySelectorAll("#agregar-nuevo");
var seleccionado;
var guardar=document.querySelectorAll("#guardar-nuevo");

for(var i =0; i< modificar.length; i++){
	modificar[i].addEventListener("click", function(){
		console.log("Hola")
		var tr = this.parentNode.parentNode;
		var nodes = tr.children;

		var nombreEsp = nodes[0].innerHTML;
		var nombreIng = nodes[1].innerHTML;
		var ingredientes = nodes[2].innerHTML;
		var precio = nodes[3].innerHTML;
		var calorias = nodes[4].innerHTML;
		var caractEspeciales = nodes[5].innerHTML;
		var tipo = nodes[6].innerHTML;


		formNombreEsp.value=nombreEsp;
		formNombreIng.value=nombreIng;
		formIngredientes.value=ingredientes;
		formPrecio.value=precio;
		formCalorias.value=calorias;
		formCaractEspeciales.value=caractEspeciales;
		formTipo.value=tipo;
		

		seleccionado = tr;
		formInfoPlatos.classList.remove("hide");


	});
}
addListener('click', ingresar, function(){

	seleccionado=null;

	formInfoPlatos.classList.remove("hide");

});

addListener("click", eliminar, function(){
	this.parentNode.parentNode.remove();
});

addListener("click",guardar, function(event){
	event.preventDefault();
	var guardarNuevo=true;
	var i= 0;
	console.log([formInfoPlatos]);
})
