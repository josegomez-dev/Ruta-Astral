var registroUsuario = document.querySelector("#registro-usuario");
var registrarse = document.querySelector("#registrarse");
var mensajeError= document.querySelector(".mensaje-error");

registrarse.addEventListener('click', function(event){
	event.preventDefault();
	var i = 0;
	var hayError=false;

	while(i < registroUsuario.length){
		if(registroUsuario[i].id != "registrarse"){
			if(registroUsuario[i].value==""){
				hayError=true;
			}
		}

		i++;
	}
	
	if(!hayError){
	    
	    $.ajax({
			url: 'php/insertar_usuario.php',
			type: 'POST',
			data: {
    			'pnombreUsuario': document.getElementById("nombre-usuario").value,
    			'pnombreCompleto': document.getElementById("nombre-completo").value,
    			'pclave': document.getElementById("clave").value,
    			'pcedula': document.getElementById("cedula").value,
    			'pcorreo': document.getElementById("correo").value,
    			'pidPuesto': 'null',
    			'prol': "Cliente",
    			'pestado' : 1,
    			'ptelefono': document.getElementById("numero-tel").value,
    			'pdireccion': document.getElementById("direccion").value,
    			'pfechaNacimiento': document.getElementById("fecha-nacimiento").value
    		},
			success: function(data, textStatus, xhr){
			   console.log(data); 

			    
				if(data){

					console.log(data);

				 	mensajeError.innerText = data;
				 	mensajeError.classList.remove("hide");
				} else{
					document.location.assign('iniciar_sesion.php')
				}
			},
			error: function(req, status, error){
				console.error(req);
			}
		});
	    
	}else{
		
		mensajeError.classList.remove('hide');
	}

});
