var eliminar = document.querySelectorAll(".eliminar");
var modificar= document.querySelectorAll(".modificar");
var formInfoMesas = document.querySelector("#info-mesas");
var formNombreMesa= document.querySelector("#nombre");
var formCapacidadMesa= document.querySelector("#capacidad");
var formPreferencialMesa= document.querySelector("#preferencial");
var ingresar=document.querySelectorAll("#agregar-nuevo");
var seleccionado;
var guardar=document.querySelectorAll("#guardar-nuevo");


addListener("click", modificar, function(){
	var tr = this.parentNode.parentNode;
	var nodes = tr.children;
	var len = nodes.length - 1;

	var nombre = nodes[1].innerHTML;
	var capacidad = nodes[2].innerHTML;
	var preferencial = esPreferencial();

	formNombreMesa.value=nombre;
	formCapacidadMesa.value=capacidad;
	formPreferencialMesa.value=preferencial;

	seleccionado = tr;

	function esPreferencial(){
		var resul = false;

		if(nodes[3].innerHTML != ''){
			resul = true;
		}

		return resul;
	}

	formInfoMesas.classList.remove("hide");

});

addListener('click', ingresar, function(){
	// this.parentNode.parentNode.children;

	seleccionado =null;

	formInfoMesas.classList.remove("hide");

});


addListener("click" , eliminar, function(){
	this.parentNode.parentNode.remove();
});


addListener("click" , guardar, function(event){
	event.preventDefault();
	var guardarNuevo=true;
	var i =0;

	console.log([formInfoMesas]);


	while(i < formInfoMesas.length){
		if(formInfoMesas[i].id != "guardar-nuevo" &&  formInfoMesas[i].id !="cancelar-ingreso"){
			if(formInfoMesas[i].value==""){
				guardarNuevo=false;
				console.log(formInfoMesas[i].value)
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

function addListener(evento ,parray, pmetodo){
	
	for (var i =0; i< parray.length; i++){
		parray[i].addEventListener(evento, pmetodo);
	}
}