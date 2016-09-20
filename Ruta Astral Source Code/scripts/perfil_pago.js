var inputNumero = document.querySelectorAll(".numero"),
	formPago = document.querySelector("form"),
	tabla = document.querySelector("table tbody"),
	agregar = document.querySelector(".fa.fa-plus"),
	mensajeError = document.querySelector(".mensaje-error");

var nombreTarjeta = document.getElementById("nombre-tarjeta"),
	numeroTarjeta = document.getElementById("numero-tarjeta"),
	selectorMes = document.getElementById("mes"),
	selectorAnio = document.getElementById("anio"),
	pidTarjeta = document.getElementById("pid");

var nuevoMetodo,
	metodoId;

cargarTabla();

document.querySelector("button.cancelar").addEventListener('click', function(){
	formPago.classList.add("hide");
	mensajeError.classList.add("hide");
})

agregar.addEventListener("click", function(){

	if(tabla.childElementCount > 1){
		mensajeError.innerText = "No se puede tener mas de 2 metodos de pago";
		mensajeError.classList.remove('hide');
	} else{
		formPago.classList.remove("hide");
		mensajeError.classList.add('hide');
		formPago.reset();
		nuevoMetodo = true;
		
	}
})

bloquearNoNumero(inputNumero);

formPago.addEventListener("submit", function(event){
	event.preventDefault();
	var i = -1;

	var esValido = true;

	var form = this;

	while (++i < this.length){
		if(this[i].localName != "button"){
			
			if(this[i].value == ""){
				esValido = false;
			}
		}
	}

	if(esValido){
		mensajeError.classList.add("hide");
		var data, url;
		if(nuevoMetodo){
			data = {
				pnombreTarjeta: nombreTarjeta.value,
				pnumeroTarjeta: numeroTarjeta.value,
				pmes: selectorMes.value,
				panio: selectorAnio.value,
				pidTarjeta: pidTarjeta.value,
				pidUsuario: $.cookie("idUsuario")
			};
			url = 'php/insertar_metodo_pago.php';
		} else{
			data = {
				pidMetodo: metodoId,
				pnombreTarjeta: nombreTarjeta.value,
				pnumeroTarjeta: numeroTarjeta.value,
				pmes: selectorMes.value,
				panio: selectorAnio.value,
				pidTarjeta: pidTarjeta.value,
				pidUsuario: $.cookie("idUsuario")
			};
			url = 'php/modificar_metodo_pago.php';
		}

		$.ajax({
			url: url,
			type: 'POST',
			data: data,
			success: function(data, textStatus, xhr){

				if(data){
					mensajeError.classList.remove("hide");
					mensajeError.innerText = data;
				} else{
					cargarTabla();
					form.reset();
					form.classList.add("hide");
					mensajeError.classList.add("hide");
				}

			},
			error: function(req, status, error){
				console.error(req.responseText);
			}
		});



	} else{
		mensajeError.innerText = "Verifique que no hayan campos vacios";
		mensajeError.classList.remove("hide");
	}
});

function bloquearNoNumero(){
	var i = -1;
	var elementos = arguments[0];

	while(++i < elementos.length){
		elementos[i].addEventListener("keypress", function(event){
			event.preventDefault();

			var charCode = event.charCode;

			if(charCode >= 48 && charCode <= 57){
				this.value += String.fromCharCode(charCode);
			}
		});
	}
}

function cargarTabla(){

	tabla.innerHTML = '';

	$.ajax({
		url: 'php/obtener_metodos_pago.php',
		type: 'POST',
		data: {idUsuario: $.cookie("idUsuario")},
		success: function(data, textStatus, xhr){
			console.log(data);

			var row;

			for(i in data){
				row = tabla.insertRow();
				row.insertCell().innerText = data[i].nombre_tarjeta;
				row.insertCell().innerText = data[i].numero_tarjeta;
				row.insertCell().innerText = data[i].mes_vencimiento + "/" + data[i].anio_vencimiento;
				row.insertCell().innerHTML = "<i class='fa fa-trash-o borrar'></i> <i class='fa fa-pencil edit'></i>";

				row.dataset.id = data[i].id_metodo;

			}
			eventoTabla();
		},
		error: function(req, status, error){
			console.error(req.responseText);
		}
	});
}

function eventoTabla(){
	var edit = document.querySelectorAll("i.edit");
	var borrar = document.querySelectorAll("i.borrar");

	edit.addEventListener('click', function(){

		var row = this.parentNode.parentNode,
			id = row.dataset.id;

		nuevoMetodo = false;
		metodoId = id;

		$.ajax({
			url: 'php/buscar_metodo_pago.php',
			type: 'POST',
			data: {pid: id},
			success: function(data, textStatus, xhr){

				formPago.reset();

				console.log(data);
				nombreTarjeta.value = data.nombre_tarjeta;
				numeroTarjeta.value = data.numero_tarjeta;
				pidTarjeta.value = data.pid_tarjeta;
				selectorAnio.value = data.anio_vencimiento;
				selectorMes.value = data.mes_vencimiento;

				formPago.classList.remove("hide");
			},
			error: function(req, status, error){
				console.error(req);
			}
		});
	});

	borrar.addEventListener('click', function(){
		var row = this.parentNode.parentNode,
			id = row.dataset.id;

		$.ajax({
			url: 'php/borrar_metodo_pago.php',
			type: 'POST',
			data: {
				pidUsuario: $.cookie('idUsuario'),
				pidMetodo: id
			},
			success: function(data, textStatus, xhr){

				// console.log(data);

				cargarTabla();
				mensajeError.classList.add("hide");

			},
			error: function(req, status, error){
				console.error(req);
			}
		});
	});
}