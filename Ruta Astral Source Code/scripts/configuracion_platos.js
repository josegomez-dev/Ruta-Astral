var eliminar = document.querySelectorAll(".eliminar");
var modificar= document.querySelectorAll(".modificar");
var formInfoPlatos = document.querySelector("#info-platos");
var ingresar=document.querySelectorAll(".agregar-nuevo");
var guardar=document.querySelectorAll("#guardar-nuevo");
var cancelar=document.querySelectorAll("#cancelar-ingreso");
var mensajeError= document.querySelector(".mensaje-error");

var nombrePlato=document.getElementById("nombre-plato"),
	ingredientes=document.getElementById("ingredientes"),
	descripcion=document.getElementById("descripcion"),
	precio=document.getElementById("precio"),
	calorias=document.getElementById("calorias"),
	tipo=document.getElementById("tipo"),
	activo = document.getElementById("activo");
var fileImp = document.getElementById('imagen'),
	imagen = formInfoPlatos.querySelector("img");
var archivo, base;

var esNuevo=false,
	idPlato;

cargarTabla();

fileImp.addEventListener('change', function(event){
	archivo = new FileReader();
	archivo.onloadend = function(){
		
		imagen.src = archivo.result;
	}

	archivo.readAsDataURL(this.files[0]);

});

addListener('click', ingresar, function(){

	esNuevo=true;

	formInfoPlatos.classList.remove("hide");
	formInfoPlatos.reset();
	fileImp.value = "";
	imagen.src="";

});

addListener("click", guardar, function(event){
	event.preventDefault();
	var esValido=true;
	var i= 0;


	while(i<formInfoPlatos.length){
		var input = formInfoPlatos[i];
		if(input.id != "guardar-nuevo" && input.id !="cancelar-ingreso"){
			if(input.value=="" && input.type != "file"){
				esValido=false;
				console.log(formInfoPlatos[i].value);
			}
			
		}
		i++;
	}

	if(esValido){

		var url = 'php/insertar_plato.php';

		var data = {
			'pidUsuario': $.cookie('idUsuario'),
			'pnombrePlato': nombrePlato.value,
			'pingredientes': ingredientes.value,
			'pdescripcion':descripcion.value,
			'pprecioPlato':precio.value,
			'pcalorias':calorias.value,
			'pidTipo': tipo.value,
			'pactivo': activo.value,
			'pimagen': imagen.src
		}

		if(!esNuevo){

			data.pidPlato = idPlato;
			url = 'php/modificar_platos.php';

		}
		$.ajax({
			type: 'POST',
			url: url,
			data :data,
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

});

function addListener(evento, parray, pmetodo){
	for (var i =0; i< parray.length; i++){
		parray[i].addEventListener(evento,pmetodo);
	}
}


function cargarTabla(){

	var tbody = document.querySelector("#tabla-info-platos tbody");

	tbody.innerHTML = '';

	$.ajax({
		url: 'php/obtener_platos.php',
		type: 'GET',
		success: function(data, textStatus, xhr){
			console.log(data);
			data = data.sort(function(a,b){
				return a.id_plato- b.id_plato;
			});
			for(i in data){

				var row = tbody.insertRow(i);

				row.dataset.id = data[i].id_plato;

				row.insertCell().innerText = data[i].id_plato;
				row.insertCell().innerText = data[i].nombre_plato;
				row.insertCell().innerText = data[i].precio_plato;
				row.insertCell().innerText = data[i].nombre_tipo;
				row.insertCell().innerText = data[i].activo ? "Activo" : "Inactivo";
				row.insertCell().innerHTML = "<i data-idPlato='" + data[i].id_plato + "' class='fa fa-pencil edit'></i>";
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
		var platoAModificar = this.dataset.idplato;

		idPlato = platoAModificar;
		fileImp.value = "";

		esNuevo = false;
		$.ajax({
			url :'php/buscar_plato.php',
			type: 'POST',
			data :{
				pidPlato: platoAModificar
			},
			success:function(result){

				console.log(result);

				formInfoPlatos.classList.remove("hide");

				nombrePlato.value = result.nombre_plato;
				ingredientes.value =result.ingredientes;
				descripcion.value =result.descripcion;
				precio.value =result.precio_plato;
				calorias.value =result.calorias;
				tipo.value =result.id_tipo;
				activo.value = Boolean(result.activo);
				imagen.src = result.url_imagen;

			},
			error:function(result){
				console.log(result);
			}
		});
	});
}

function ocultarFormulario(){
	mensajeError.classList.add('hide');
	formInfoPlatos.classList.add("hide");
}