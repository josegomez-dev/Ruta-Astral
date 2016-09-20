var eliminar = document.querySelectorAll(".eliminar");
var modificar= document.querySelectorAll(".modificar");
var formInfoMesas = document.querySelector("#info-mesas");
var formNombreMesa= document.querySelector("#nombre");
var formCapacidadMesa= document.querySelector("#capacidad");
var formPreferencialMesa= document.querySelector("#preferencial");
var formIdMesero= document.querySelector("#id_mesero");
var ingresar=document.querySelectorAll("#agregar-nuevo");
var seleccionado;
var guardar=document.querySelectorAll("#guardar-nuevo");
var mensajeError= document.querySelector(".mensaje-error");

var nombreMesa = document.getElementById("nombre"),
	capacidadMesa = document.getElementById("capacidad"),
	preferencial = document.getElementById("preferencial"),
	idMesero=document.getElementById('id-mesero'),
	activo=document.getElementById('activo');

var esNueva = false,
	idMesa;

cargarTabla();

addListener('click', ingresar, function(){
	formInfoMesas.reset();
	esNueva = true;
	formInfoMesas.classList.remove("hide");

});



addListener("click" , guardar, function(event){
	event.preventDefault();
	var esValido=true;
	var i =0;

	// console.log([formInfoMesas]);


	while(i < formInfoMesas.length){
		if(formInfoMesas[i].id != "guardar-nuevo" &&  formInfoMesas[i].id !="cancelar-ingreso"){
			if(formInfoMesas[i].value==""){
				esValido=false;
				console.log(formInfoMesas[i].value)
			}
		}

		i++;
	}
	
	if(esValido){

		if(esNueva){
			// var tbody=document.querySelector("tbody");

			console.log({
					'pidUsuario': $.cookie('idUsuario'),
					'pnombreMesa': nombreMesa.value,
					'pcapacidad': capacidadMesa.value,
					'ppreferencial': preferencial.value,
					'pidMesero':idMesero.value,
					'pactivo':activo.value
				});

			$.ajax({
				url :'php/insertar_mesa.php',
				type: 'POST',
				data :{
					'pidUsuario': $.cookie('idUsuario'),
					'pnombreMesa': nombreMesa.value,
					'pcapacidad': capacidadMesa.value,
					'ppreferencial': preferencial.value,
					'pidMesero':idMesero.value,
					'pactivo':activo.value
				},
				success:function(result){
					if(result){
						mensajeError.classList.remove('hide');
						mensajeError.innerText = result;
					}else{
						cargarTabla();
						ocultarFormulario();
					}
				},
				error:function(result){
					console.log(result);
				}
			});
			
		} else{
			$.ajax({
				url :'php/modificar_mesa.php',
				type: 'POST',
				data :{
					'pidUsuario': $.cookie('idUsuario'),
					'pidMesa': idMesa,
					'pnombreMesa': nombreMesa.value,
					'pcapacidad': capacidadMesa.value,
					'ppreferencial': preferencial.value,
					'pidMesero':idMesero.value,
					'pactivo':activo.value
				},
				success:function(result){
					if(result){
						mensajeError.classList.remove('hide');
						mensajeError.innerText = result;
					}else{
						cargarTabla();
						ocultarFormulario();
					}
				},
				error:function(result){
					console.log(result);
				}
			});
		}
	
	}
});

function addListener(evento ,parray, pmetodo){
	
	for (var i =0; i< parray.length; i++){
		parray[i].addEventListener(evento, pmetodo);
	}
}

function cargarTabla(){

	var tbody = document.querySelector("#tabla-info-mesas tbody");

	tbody.innerHTML = '';

	$.ajax({
		url: 'php/obtener_mesas.php',
		type: 'GET',
		success: function(data, textStatus, xhr){
			console.log(data);
			data = data.sort(function(a,b){
				return a.id_mesa- b.id_mesa;
			});
			for(i in data){

				var row = tbody.insertRow(i);

				row.dataset.id = data[i].id_mesa;

				row.insertCell().innerText = data[i].id_mesa;
				row.insertCell().innerText = data[i].nombre_mesa;
				row.insertCell().innerText = data[i].capacidad_mesa;
				row.insertCell().innerText=data[i].id_mesero;
				row.insertCell().innerHTML = data[i].preferencial ? "<i class='fa fa-check'></i>": "";
				row.insertCell().innerText = data[i].activo ? "Activo" : "Inactivo";
				row.insertCell().innerHTML = "<i data-idMesa='" + data[i].id_mesa + "' class='fa fa-pencil edit'></i>";
			}
			eventoTabla();
			
		},
		error: function(req, status, error){
			console.error(req);
		}
	});
}

function ocultarFormulario(){
	mensajeError.classList.add('hide');
	formInfoMesas.classList.add("hide");
}

function eventoTabla(){
	var editar=document.querySelectorAll(".edit");

	editar.addEventListener("click",function(){
		var mesaAModificar = this.dataset.idmesa;

		idMesa = mesaAModificar;

		esNueva = false;
		$.ajax({
			url :'php/buscar_mesa.php',
			type: 'POST',
			data :{
				pidMesa: mesaAModificar
			},
			success:function(result){

				formInfoMesas.classList.remove("hide");

				// console.log(result);

				nombreMesa.value = result.nombre_mesa;
				capacidadMesa.value =result.capacidad_mesa;
				preferencial.value =Boolean(result.preferencial);
				idMesero.value =result.id_mesero;
				activo.value =Boolean(result.activo);
				
			},
			error:function(result){
				console.log(result);
			}
		});
	});
}





