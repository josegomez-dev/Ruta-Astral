var usuario = document.querySelector("input#nombre"),
	clave = document.querySelector("input#clave"),
	btnIngresar = document.querySelector("#btn-guardar"),
	mensajeError = document.querySelector(".mensaje-error");

btnIngresar.addEventListener("click", function(event){
	event.preventDefault(); 
	var valido = true;


	if(usuario.value=="" || clave.value==""){
		valido = false;
	}

	if(valido){
		
		$.ajax({
			url: 'php/login.php',
			type: 'POST',
			data: {
				pnombreUsuario: usuario.value,
				pclave: clave.value
			},
			success: function(data){
				if(data){

					console.log(data);

					$.cookie("idUsuario", data.id_usuario, { expires: 1 });
					$.cookie("rol", data.rol, { expires: 1 });
					$.cookie("nombreUsuario", data.nombre_usuario, { expires: 1 });
					// sessionStorage.usuario = data.id_usuario;
					// sessionStorage.rol = data.rol;

					window.location.assign('index.php');
				} else{
					mensajeError.classList.remove("hide");
					mensajeError.innerText = "Verefique que su nombre de usuario y contraseña esten correctos";
				}
			},
			error: function(req){
				mensajeError.classList.remove("hide");
				mensajeError.innerText = "Verefique que su nombre de usuario y contraseña esten correctos";
			}
		});
		
	}else{
		mensajeError.classList.remove("hide");
		mensajeError.innerText = "Llene todos los espacios en blanco";
	}


});
