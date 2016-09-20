var eliminar= document.querySelectorAll("#eliminar");
var modificar=document.querySelectorAll("#modificar");
var formInfoPlatos= document.querySelector("#info-platos");
var formNombrePlatoEspa= document.querySelector("#nombre-esp");
var formNombrePlatoIng= document.querySelector("#nombre-ing");
var formIngredientes= document.querySelector("#ingredientes");
var formPrecio= document.querySelector("#precio");
var formCalorias= document.querySelector("#calorias");
var formCaracteristicas= document.querySelector("#caracterisitcas-especiales");
var formTipo= document.querySelector("#tipo");
var ingresar= document.querySelectorAll("#agregar nuevo");
var= seleccionado;
var guardar= document.querySelector("#guardar-nuevo");

addListener("click", modificar, function(){
	var tr= this.parentNode.parentNode;
	var nodes= tr.children;
	var len= nodes.length -1;

	var nombre-esp = nodes[1].innerHTML;
	var nombre-ing = nodes[2].innerHTML;
	var ingredientes = nodes[3].innerHTML;
	var precio = nodes[4].innerHTML; 
	var calorias = nodes[5].innerHTML; 
	var caracterisitcas-especiales = nodes[6].innerHTML;
	var tipo = nodes[7].innerHTML;

	formNombrePlatoEspa.value=nombre-esp;
	formNombrePlatoIng.value=nombre-ing;
	formIngredientes.value=ingredientes;
	formPrecio.value=precio;
	formCalorias.value=calorias;
	formCaracteristicas.value=caracterisitcas-especiales;
	formTipo.value=tipo;

	seleccionado=tr;

	formInfoPlatos.classList.remove("hide");
});

addListener('click', ingresar, function
	seleccionado= null;
	formInfoPlatos.classList.remove("hide");

});
addListener("click", eliminar, function(){
	this.parentNode.parentNode.remove();
});
addListener("click", guardar, function(event){
	event.preventDefault();
	var guardarNuevo=true;
	var i=0;

	concole.log([formInfoPlatos]);

	while(i < formInfoPlatos.length){
		if(formInfoPlatos[i].id !="guardar-nuevo" && formInfoPlatos[i].id !="cancelar-ingreso"){
			if(formInfoPlatos[i].value==""){
				guardarNuevo=false;
				console.log(formInfoPlatos[i].value)
			}
		}
		i++;
	}
	if(guardarNuevo){
		alert("Se guardo");
	}else{
		alert("No se guardo");
	}
});

function addListener(evento, parray, pmetodo){
	for(var i=0; i< parray.length; i++){
		parray[i].addEventListener(evento, pmetodo);
	}
}