var visibles = {
	admin: ["#menu", "#salon", "#configuracion", "#orden", "#facturacion", "#reportes"],
	soporte: ["#menu", "#salon", "#configuracion", "#orden", "#facturacion", "#reportes"],
	salonero: ["#menu", "#salon", "#orden"],
	cocina: ["#menu", "#orden"],
	cajero: ["#menu", "#salon", "#facturacion"],
	miselaneo: ["#menu"],
	cliente: ["#menu", "#reserva", "#express"]
}

if(sessionStorage.rol != null){
	mostrarLinks();
} else if(window.location.pathname == "/menu.html"){
	document.getElementById("cerrar-session").classList.add("hide");
	document.getElementById("prefil-usuario").classList.add("hide");
	document.getElementById("iniciar-sesion").classList.remove("hide");
	document.getElementById("registrar-usuario").classList.remove("hide");
}

function mostrarLinks(){
	var i = visibles[sessionStorage.rol].length;

	while(i--){

		var elemento = document.querySelector(visibles[sessionStorage.rol][i]);

		if(elemento != null){
			elemento.classList.remove("hide");	
		}

		document.querySelector(".side-bar p").classList.remove("hide")
	}
}

document.getElementById("cerrar-session").addEventListener('click', function(){
	sessionStorage.clear();
	window.location.assign('iniciar_sesion.html');
})