var modificarUsuario = document.querySelector("#modificar-usuario");
var guardar = document.querySelector("#guardar");
var mensajeError = document.querySelector(".mensaje-error");


var nombreCompleto =document.getElementById("nombre-completo"),
	nombreUsuario = document.getElementById("nombre-usuario"),
	cedulaUsuario= document.getElementById("cedula"),
	numeroTelefono = document.getElementById("numero-tel"),
	fechaNacimiento = document.getElementById("fecha-nacimiento"),
	direccion = document.getElementById("direccion"),
	clave= document.getElementById("clave"),
	confirmacionClave = document.getElementById("clave2"),
	correoElectronico = document.getElementById("correo");

var idPuesto;

cargarInfo();

guardar.addEventListener('click', function(event){
	event.preventDefault();
	var i = 0;
	var hayError=false;

	while(i < modificarUsuario.length){
		if(modificarUsuario[i].id != "guardar"){
			if(modificarUsuario[i].value==""){
				hayError=true;
			}
		}

		i++;
	}
	
	if(!hayError){
		$.ajax({
			url :'php/modificar_usuario.php',
			type: 'POST',
			data :{
				'pidUsuario': $.cookie('idUsuario'),
				'pidUsuarioMod': $.cookie('idUsuario'),
				'pnombreUsuario':nombreUsuario.value,
				'pnombreCompleto':nombreCompleto.value ,
				'pclave': clave.value,
				'pcedula':cedulaUsuario.value ,
				'pcorreo': correoElectronico.value,
				'prol': $.cookie('rol'),
				'pestado': true,
				'ptelefono': numeroTelefono.value,
				'pdireccion': direccion.value,
				'pfechaNacimiento':fechaNacimiento.value,
				'pidPuesto': idPuesto
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
	var idUsuario = $.cookie('idUsuario');

	$.ajax({
		url :'php/buscar_usuario.php',
		type: 'POST',
		data :{
			pid: idUsuario
		},
		success:function(result){

			nombreCompleto.value= result.nombre_completo;
			nombreUsuario.value = result.nombre_usuario;
			cedulaUsuario.value = result.cedula;
			numeroTelefono.value = result.telefono;
			fechaNacimiento.value =result.fecha_nacimiento;
			direccion.value = result.direccion;
			clave.value = result.clave_usuario;
			confirmacionClave.value = result.clave_usuario;
			correoElectronico.value =result.correo;
			idPuesto = result.id_puesto;
			
		},
		error:function(result){
			console.log(result);
		}
	});
}
