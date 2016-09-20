var registroUsuario = document.querySelector("#registro-usuario");
var registrarse = document.querySelector("#registrarse");

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

	}else{
		
	}
});
