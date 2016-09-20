var formulario = document.getElementById("info-usuario");
var agregarUsuario = document.getElementById("agregar-usuario");
// var borrarUsuario = document.getElementById("borrar-ususario");
var formCancelar = document.querySelector("#info-usuario .cancelar-form");
var formGuardar = document.querySelector("#info-usuario .enviar-form");
var confUsuario = document.getElementById("conf-usuario");
var usuarioActual;

var usuarios = [
	{
		id: 1,
		nombre: "Leonardo Cruz Monge",
		correo: "user@domain.com",
		telefono: "1234-45678",
		direccion: "Desamparados",
		puesto: "Cliente",
		rol: "Cliente",
		estado: "Activo",

	},{
		id: 2,
		nombre: "David Brenez",
		correo: "user@domain.com",
		telefono: "1234-45678",
		direccion: "Pavas",
		puesto: "Gerente",
		rol: "Administrador",
		estado: "Activo"
	},{
		id: 3,
		nombre: "Jhonny Bravo",
		correo: "user@domain.com",
		telefono: "1234-45678",
		direccion: "San Miguel",
		puesto: "Soporte",
		rol: "Soporte",
		estado: "Activo"
	}
];

cargarTabla();

agregarUsuario.addEventListener('click', function(event){
	var nodoSeleccionado = document.querySelector("#tabla-info-usuario .selected");

	if (nodoSeleccionado != null) {
		nodoSeleccionado.classList.remove("selected");
	}
	usuarioActual = null;
	confUsuario.classList.add('hide');
	formulario.reset();
	formulario.classList.remove("hide");
});

confUsuario.addEventListener('click', function(){
	var seleccion = document.querySelector("#tabla-info-usuario .selected");

	usuarioActual = getObj(seleccion.dataset.id);

	setValor("nombre-apellidos", usuarioActual.nombre);
	setValor("clave", usuarioActual.clave);
	setValor("clave", usuarioActual.correo);
	setValor("correo", usuarioActual.correo);
	setValor("telefono", usuarioActual.telefono);
	setValor("direccion", usuarioActual.direccion);
	setValor("puesto", usuarioActual.puesto);
	setValor("role", usuarioActual.rol);
	setValor("estado", usuarioActual.estado);

	formulario.classList.remove("hide")

	function setValor(pid,pvalor){
		var i = -1;

		while(++i < formulario.length){
			nodo = formulario[i];

			if(nodo.id ==pid){
				nodo.value = pvalor;
			}
		}
	}

	function getObj(id){
		return usuarios.filter(function(d){return d.id == id})[0];
	}

});

formGuardar.addEventListener('click', function(event){
	event.preventDefault();

	var form = this.parentNode.parentNode;
	var i = -1;
	var nodo;
	var esValido = true;

	while(++i < form.length && esValido){
		nodo = form[i];
		// console.log([nodo]);

		if(nodo.nodeName != "BUTTON"
			&& nodo.value == ""){
			esValido = false;
		}
	}

	i = -1;
	if(esValido){

		if(usuarioActual == null){

			var max = Math.max.apply(null, usuarios.map(function(d){return d.id}));

			usuarios.push({
				id: max + 1,
				nombre: getValorElemento("nombre-apellidos"),
				correo: getValorElemento("correo"),
				telefono: getValorElemento("telefono"),
				direccion: getValorElemento("direccion"),
				puesto: getValorElemento("puesto"),
				rol: getValorElemento("role"),
				estado: getValorElemento("estado")
			});
		} else{
			usuarioActual.nombre = getValorElemento("nombre-apellidos");
			usuarioActual.correo = getValorElemento("correo");
			usuarioActual.telefono = getValorElemento("telefono");
			usuarioActual.direccion = getValorElemento("direccion");
			usuarioActual.puesto = getValorElemento("puesto");
			usuarioActual.rol = getValorElemento("role");
			usuarioActual.estado = getValorElemento("estado");
		}
		confUsuario.classList.add("hide");
		this.parentNode.parentNode.classList.add("hide");
		this.parentNode.parentNode.reset();
	}

	function getValorElemento(pid){

		i = -1;

		while(++i < form.length){
			nodo = form[i];

			if(nodo.id ==pid){
				return nodo.value;
			}
		}

	}

	cargarTabla();

});

formCancelar.addEventListener('click', function(event){
	event.preventDefault();
	
	this.parentNode.parentNode.classList.add("hide");
	this.parentNode.parentNode.reset();
	
});

function cargarTabla(){
	var html = ''

	for(i in usuarios){
		html += "<tr data-id='" + usuarios[i].id + "'>" 
		+ "<td>" + usuarios[i].id + "</td>"
		+ "<td>" + usuarios[i].nombre + "</td>"
		+ "<td>" + usuarios[i].correo + "</td>"
		+ "<td>" + usuarios[i].telefono + "</td>"
		+ "<td>" + usuarios[i].direccion + "</td>"
		+ "<td>" + usuarios[i].puesto + "</td>"
		+ "<td>" + usuarios[i].rol + "</td>"
		+ "<td>" + usuarios[i].estado + "</td>"
		+ "</tr>";
	}

	document.querySelector("#tabla-info-usuario tbody").innerHTML = html;
	eventoTabla();
}

function eventoTabla(){
	var usuario = document.querySelectorAll("#tabla-info-usuario tbody tr");
	var i = -1;
	var tr;

	while(++i < usuario.length){
		tr = usuario[i];
		tr.addEventListener("click", metodo);
	}

	function metodo(event){

		console.log(event);

		var nodoSeleccionado = document.querySelector("#tabla-info-usuario .selected");

		if (nodoSeleccionado != null) {
			nodoSeleccionado.classList.remove("selected");
		}

		this.classList.add("selected");

		confUsuario.classList.remove("hide");
		formulario.classList.add('hide');
		formulario.reset();

	}
}