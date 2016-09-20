var infoNegocio=document.querySelector("#info-negocio");
var formImpuestos=document.querySelector("#info-expres");
var formFacturas=document.querySelector("#info-facturas");
var formReservaciones=document.querySelector("#info-facturas");
var guardarNegocio=document.querySelector("#guardar-info-negocio");
var guardarExpres=document.querySelector("#guardar-info-expres");
var guardarFacturas=document.querySelector("#guardar-info-facturas");
var guardarReservaciones=document.querySelector("#guardar-info-reservacion");
var mensajeError= document.querySelector(".mensaje-error");

var nombreNegocio=document.getElementById("nombreConfig"),
		cedulaJuridica=document.getElementById("ced-juridica"),
		direccion=document.getElementById("direccion"),
		numeroTelefono=document.getElementById("telefono");

var impuestosVentas=document.getElementById("impuesto-ventas"),
		impuestosServicios=document.getElementById("impuesto-servicio"),
		expres=document.getElementById("costo-express");

var consecutivo=document.getElementById("consecutivo");

var previo=document.getElementById("previo"),
		duracion=document.getElementById("duracion");

var idNegocio;

cargarInfo();

guardarNegocio.addEventListener('click', function(event){
	event.preventDefault();
	var i = 0;
	var hayError=false;

	while(i < infoNegocio.length){
		if(infoNegocio[i].id != "guardar"){
			if(infoNegocio[i].value==""){
				hayError=true;
			}
		}

		i++;
	}
	
	if(!hayError){
		$.ajax({
			url :'php/modificar_negocio.php',
			type: 'POST',
			data :{
				'pidUsuario': $.cookie('idUsuario'),
				'pnombreNegocio': nombreNegocio.value,
				'pcedulaJuridica': cedulaJuridica.value,
				'pdireccion':direccion.value,
				'pnumeroTelefono':numeroTelefono.value
			},
			success:function(result){
				console.log(result);
			},
			error:function(result){
				console.log(result);
			}
		}); 

	}else{
		
		mensajeError.classList.remove('hide');
	}

});

guardarExpres.addEventListener('click', function(event){
	event.preventDefault();
	var i = 0;
	var hayError=false;

	while(i < formImpuestos.length){
		if(formImpuestos[i].id != "guardar"){
			if(formImpuestos[i].value==" "){
					hayError=true;
			}
		}

		i++;
	}
	
	if(!hayError){
		$.ajax({
			url :'php/modificar_impuestos.php',
			type: 'POST',
			data :{
				'pidUsuario': $.cookie('idUsuario'),
				'pimpuestoVenta': impuestosVentas.value,
				'pimpuestoServicio': impuestosServicios.value,
				'pexpres': expres.value
			},
			success:function(result){
				console.log(result);
			},
			error:function(result){
				console.log(result);
			}
		}); 

	}else{
		
		mensajeError.classList.remove('hide');
	}

});



guardarFacturas.addEventListener('click', function(event){
	event.preventDefault();
	var i = 0;
	var hayError=false;

	while(i < formFacturas.length){
		if(formFacturas[i].id != "guardar"){
			if(formFacturas[i].value==""){
					hayError=true;
			}
		}

		i++;
	}
	
	if(!hayError){
		$.ajax({
			url :'php/modificar_facturas.php',
			type: 'POST',
			data :{
				'pidUsuario': $.cookie('idUsuario'),
				'pconsecutivo': consecutivo.value
			},
			success:function(result){
				console.log(result);
			},
			error:function(result){
				console.log(result);
			}
		}); 

	}else{
		
		mensajeError.classList.remove('hide');
	}

});

guardarReservaciones.addEventListener('click', function(event){
	event.preventDefault();
	var i = 0;
	var hayError=false;

	while(i < formReservaciones.length){
		if(formReservaciones[i].id != "guardar"){
			if(formReservaciones[i].value==""){
					hayError=true;
			}
		}

		i++;
	}
	
	if(!hayError){
		$.ajax({
			url :'php/modificar_reservacion.php',
			type: 'POST',
			data :{
				'pidUsuario': $.cookie('idUsuario'),
				'pprevio': previo.value,
				'pduracion': duracion.value
			},
			success:function(result){
				console.log(result);
			},
			error:function(result){
				console.log(result);
			}
		}); 

	}else{
		
		mensajeError.classList.remove('hide');
	}

});

function cargarInfo(){

	$.ajax({
		url :'php/buscar_info_negocio.php',
		type: 'POST',
		data :{
		},
		success:function(result){
			console.log(result);
			nombreNegocio.value= result.nombre_negocio;
			cedulaJuridica.value = result.cedula_juridica;
			direccion.value = result.direccion;
			numeroTelefono.value = result.telefono;
			impuestosVentas.value=result.impuesto_ventas;
			impuestosServicios.value=result.impuesto_servicio;
			expres.value=result.costo_express;
			consecutivo.value=result.consecutivo_facturas;
			previo.value=result.hora_previa_reserva;
			duracion.value=result.duracion_reserva;

			if($.cookie('rol') == "Soporte"){
				bloquear();
			}


		},
		error:function(result){
			console.log(result);
		}
	});    
}

function bloquear(){
	var forms = document.querySelectorAll('form');
	var length;
	for(i in forms){
		length = forms[i].length;
		while(length--){
			forms[i][length].disabled = true;
		}
	}
}