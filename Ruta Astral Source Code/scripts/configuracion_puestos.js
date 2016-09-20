var modificar= document.querySelectorAll(".modificar");
var formInfoPuestos = document.querySelector("#info-puestos");
var ingresar=document.querySelectorAll("#agregar-nuevo-puesto");
var guardar=document.querySelectorAll("#guardar-nuevo");
var cancelar=document.querySelectorAll("#cancelar-ingreso");
var mensajeError= document.querySelector(".mensaje-error");

var puesto=document.getElementById("puesto"),
	descripcion=document.getElementById("descripcion");
	estado=document.getElementById("activo");


var esNuevo=false,
	idPuesto;

cargarTabla();	


addListener('click', ingresar, function(){
	esNuevo = true;
	formInfoPuestos.classList.remove("hide");

});


addListener("click", guardar, function(event){
	event.preventDefault();
	var esValido=true;
	var i= 0;



	while(i<formInfoPuestos.length){
		var input = formInfoPuestos[i];
		if(input.id != "guardar-nuevo" && input.id !="cancelar-ingreso"){
			if(input.value==""){
				esValido=false;
				console.log(formInfoPuestos[i].value);
			}
			
		}
		i++;
	}

	if(esValido){

		if(esNuevo){

			$.ajax({
				url :'php/insertar_puesto.php',
				type: 'POST',
				data :{
					'pidUsuario': $.cookie('idUsuario'),
					'ppuesto': puesto.value,
					'pdescripcionPuesto':descripcion.value,
					'pactivo':estado.value
				},
				success:function(result){
					console.log(result);
					if(result){
						mensajeError.classList.remove('hide');
						mensajeError.innerText = result;
					}else{
						ocultarFormulario();
						cargarTabla();
					}
				},
				error:function(result){
					console.log(result);
				}
			});
			
		} else{

			$.ajax({
				url :'php/modificar_puestos.php',
				type: 'POST',
				data :{
					'pidUsuario': $.cookie('idUsuario'),
					'pidPuesto':idPuesto,
					'ppuesto': puesto.value,
					'pdescripcion':descripcion.value,
					'pactivo':estado.value
				},
				success:function(result){
					if(result){
						mensajeError.classList.remove('hide');
						mensajeError.innerText = result;
						console.log(result);
					}else{
						ocultarFormulario();
						cargarTabla();
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

	var tbody = document.querySelector("#tabla-info-puestos tbody");

	tbody.innerHTML = '';

	$.ajax({
		url: 'php/obtener_puestos.php',
		type: 'GET',
		success: function(data, textStatus, xhr){
			console.log(data);
			data = data.sort(function(a,b){
				return a.id_puesto- b.id_puesto;
			});
			for(i in data){

				var row = tbody.insertRow(i);

				row.dataset.id = data[i].id_plato;

				row.insertCell().innerText = data[i].id_puesto;
				row.insertCell().innerText = data[i].nombre_puesto;
				row.insertCell().innerText = data[i].descripcion_puesto;
				row.insertCell().innerText = data[i].activo ? "Activo" : "Inactivo";
				row.insertCell().innerHTML = "<i data-idPuesto='" + data[i].id_puesto + "' class='fa fa-pencil edit'></i>";
			}
			eventoTabla();
			
		},
		error: function(req, status, error){
			console.error(req);
		}
	});
}

function eventoTabla(){
	var editar=document.querySelectorAll(".edit");


	editar.addEventListener("click",function(){
		var puestoAModificar = this.dataset.idpuesto;
		console.log(puestoAModificar)


		idPuesto = puestoAModificar;

		esNuevo = false;
		$.ajax({
			url :'php/buscar_puesto.php',
			type: 'POST',
			data :{
				'pidpuesto': puestoAModificar
			},
			success:function(result){

				formInfoPuestos.classList.remove("hide");

				puesto.value = result.nombre_puesto;
				descripcion.value = result.descripcion_puesto;
				estado.value = Boolean(result.activo);

			},
			error:function(result){
				console.log(result);
			}
		});
	});
}
function ocultarFormulario(){
	mensajeError.classList.add('hide');
	formInfoPuestos.classList.add("hide");
}