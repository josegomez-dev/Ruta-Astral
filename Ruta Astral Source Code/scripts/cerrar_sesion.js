var cerrarSesion = document.querySelector("#cerrar-session");

if(cerrarSesion != null){

	cerrarSesion.addEventListener('click', function(event){
		event.preventDefault();
		$.removeCookie('rol');
		$.removeCookie('idUsuario');
		$.removeCookie('nombreUsuario');
		window.location.assign('index.php');
	});
}
