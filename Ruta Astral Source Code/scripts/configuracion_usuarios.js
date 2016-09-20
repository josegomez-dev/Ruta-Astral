var formulario = document.getElementById("info-usuario"),
	agregarUsuario = document.getElementById("agregar-usuario"),
	formCancelar = document.querySelector("#info-usuario .cancelar-form"),
	formGuardar = document.querySelector("#info-usuario .enviar-form"),
	confUsuario = document.getElementById("conf-usuario"),
	inputNumero = document.querySelectorAll("input.numero"),
	mensajeError = document.querySelector(".mensaje-error"),
	nuevoUsuario,
	idnuevoUsuario;

var nombreUsuario = document.getElementById("usuario"),
	nombreCompleto = document.getElementById("nombre-completo"),
	claveUsuario = document.getElementById("clave"),
	cedulaUsuario = document.getElementById("cedula"),
	correoUsuario = document.getElementById("correo"),
	puestoUsuario = document.getElementById("puesto"),
	rolUsuario = document.getElementById("rol"),
	estadoUsuario = document.getElementById("estado"),
	telefonoUsuario = document.getElementById("telefono"),
	direccionUsuario = document.getElementById("direccion"),
	fechaNacimiento = document.getElementById("fecha-nacimiento");



cargarTabla();

inputNumero.addEventListener('keypress', function(event){
	event.preventDefault();

	var charCode = event.charCode;

	if(charCode >= 48 && charCode <= 57){
		this.value += String.fromCharCode(charCode);
	}
})

agregarUsuario.addEventListener('click', function(event){
	formulario.classList.remove("hide");
	formulario.reset();
	nuevoUsuario = true;
});

formulario.addEventListener('submit', function(event){
	event.preventDefault();

	var formatoCorreo = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	var i = -1;
	var nodo;
	var esValido = true;

	var stringError = '';
	var vacios = 0;

	while(++i < this.length && esValido){
		nodo = this[i];

		if(nodo.id == "correo"){
			if(!formatoCorreo.test(nodo.value) || nodo.value == ""){
				esValido = false;
				stringError += "El correo no cumple con el formato especifico\n";
			}
		} else if (nodo.id == "nodo"){
			var date = Date.parse(nodo.value);
			if(!isNaN(date)){
				esValido = false;
			}
		} else if(nodo.nodeName != "BUTTON"){
			if(nodo.value == ""){
				esValido = false;
				vacios++;
			}
		}
	}

	if(vacios > 0){
		stringError += "Verificar espacios vacios";
	}

	// console.log(stringError)

	if(esValido){

		var data,url;

		if(nuevoUsuario){

			url = 'php/insertar_usuario.php';
			data = {
				pidUsuario: $.cookie('idUsuario'),
				'pnombreUsuario': nombreUsuario.value,
				'pnombreCompleto': nombreCompleto.value,
				'pclave': claveUsuario.value,
				'pcedula': cedulaUsuario.value,
				'pcorreo': correoUsuario.value,
				'pidPuesto': puestoUsuario.value,
				'prol': rolUsuario.value,
				'pestado' : estadoUsuario.value == 'true'? true : false,
				'ptelefono': telefonoUsuario.value,
				'pdireccion': direccionUsuario.value,
				'pfechaNacimiento': fechaNacimiento.value
			};
		} else{

			url =  'php/modificar_usuario.php';
			data = {
				pidUsuario: $.cookie('idUsuario'),
				'pidUsuarioMod': idnuevoUsuario,
				'pnombreUsuario': nombreUsuario.value,
				'pnombreCompleto': nombreCompleto.value,
				'pclave': claveUsuario.value,
				'pcedula': cedulaUsuario.value,
				'pcorreo': correoUsuario.value,
				'pidPuesto': puestoUsuario.value,
				'prol': rolUsuario.value,
				'pestado' : estadoUsuario.value == 'true'? true : false,
				'ptelefono': telefonoUsuario.value,
				'pdireccion': direccionUsuario.value,
				'pfechaNacimiento': fechaNacimiento.value
			};
		}

		$.ajax({
			url: url,
			type: 'POST',
			data: data,
			success: function(data, textStatus, xhr){
				if(data){
					mensajeError.innerText = data;
					mensajeError.classList.remove("hide");
				} else{
					formulario.classList.add("hide");
					mensajeError.classList.add("hide");
					formulario.reset();
					cargarTabla();
				}
	
			},
			error: function(req, status, error){
				console.error(req.responseText);
			}
		});
	} else{
		mensajeError.innerText = stringError;
		mensajeError.classList.remove("hide");
	}


});

formCancelar.addEventListener('click', function(){
	this.parentNode.parentNode.classList.add("hide");
});

function cargarTabla(){

	var tbody = document.querySelector("#tabla-info-usuario tbody");

	tbody.innerHTML = '';

	$.ajax({
		url: 'php/obetener_usuarios.php',
		type: 'GET',
		success: function(data, textStatus, xhr){
			data = data.sort(function(a,b){
				return a.id_usuario - b.id_usuario;
			});
			for(i in data){

				var row = tbody.insertRow(i);

				row.dataset.id = data[i].id_usuario;

				row.insertCell().innerText = data[i].id_usuario;
				row.insertCell().innerText = data[i].nombre_completo;
				row.insertCell().innerText = data[i].nombre_puesto;
				if(data[i].estado_usuario){
					row.insertCell().innerText = "Activo";	
				} else{
					row.insertCell().innerText = "Inactivo";
				}
				row.insertCell().innerHTML = "<i class='fa fa-pencil edit'></i>";
				eventoTabla();
			}
		},
		error: function(req, status, error){
			console.error(req.responseText);
		}
	});
}

function eventoTabla(){
	var edit = document.querySelectorAll("i.edit");

	edit.addEventListener('click', function(){

		var row = this.parentNode.parentNode;
		var id = row.dataset.id;
		nuevoUsuario = false;
		idnuevoUsuario = id;

		$.ajax({
			url: 'php/buscar_usuario.php',
			type: 'POST',
			data: {pid: id},
			success: function(data, textStatus, xhr){

				formulario.reset();

				nombreCompleto.value = data.nombre_completo;
				cedulaUsuario.value = data.cedula;
				nombreUsuario.value = data.nombre_usuario
				claveUsuario.value = data.clave_usuario;
				telefonoUsuario.value = data.telefono;
				direccionUsuario.value = data.direccion;
				correoUsuario.value = data.correo;
				fechaNacimiento.value = data.fecha_nacimiento;
				puestoUsuario.value = data.id_puesto;
				rolUsuario.value = data.rol;
				estadoUsuario.value = Boolean(data.estado_usuario);

				formulario.classList.remove("hide");
			},
			error: function(req, status, error){
				console.error(req);
			}
		});
	});
}