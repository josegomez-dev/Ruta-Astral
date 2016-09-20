var btnCancelar = document.querySelector('#btn_anular');
var mensajeError = document.querySelector(".mensaje-error");
var stringError = '';
verReservacionesPorUsuario($.cookie('idUsuario'));

btnCancelar.addEventListener('click', function() {
    var reservacion = document.querySelector('#cancelar_reservacion').value;
    var idReservacion = parseInt(reservacion);
    if (validarNumeros(idReservacion) == false || reservacion == ""){
        stringError += "Por favor ingrese un numero o el valor correcto";
        mensajeError.innerHTML =  stringError;
        mensajeError.classList.remove("hide");
    }else{
        console.log(idReservacion);
        eliminarReservacion(idReservacion);
  };
});

function validarNumeros(input){
  return !isNaN(parseFloat(input)) && isFinite(input);
}

function eliminarReservacion(id){
  var fechaActualizacion = new Date();
  console.log(id);
  var peticion = $.ajax({
    url:"php/cancelar_reservacion.php",
    type: "post",
    data: {
        'pid' : id,
    },
    
    success: function(response){
        location.reload();
    },
    error: function(request, error) {
        console.log(request.responseText);
    }
  });

}


function verReservacionesPorUsuario(usuario){
    var peticion = $.ajax({
        url:"php/ver_reservaciones.php",
        type: "post",
        data: {
          'pid' : usuario,
        },
        dataType: "json",
        
        success: function(response){
            console.log(response);
            var tbody = document.querySelector('#tabla_reservaciones tbody');
            tbody.innerHTML = '';
            
            for(var i = 0; i<response.length; i++){
                var fila = tbody.insertRow(i);
                var id = fila.insertCell(0);
                var fecha = fila.insertCell(1);
                var hora = fila.insertCell(2);
                var nombreMesa = fila.insertCell(3);


                id.innerHTML = response[i]['id_reservacion'];
                fecha.innerHTML = response[i]['Fecha'];
                hora.innerHTML = response[i]['hora'];
                nombreMesa.innerHTML = response[i]['nombre_mesa'];

                
            }
        },
        error: function(request, error) {
            console.log(request.responseText);
        }
    });
}