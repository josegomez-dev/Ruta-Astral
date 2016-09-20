verReservacionesPorUsuario($.cookie('idUsuario'));
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
                var id = fila.insertCell();
                var fecha = fila.insertCell();
                var hora = fila.insertCell();
                var nombreMesa = fila.insertCell();

                cantidadPuntosCliente = parseInt(response[i]['puntos']);
                id.innerHTML = response[i]['id_reservacion'];
                fecha.innerHTML = response[i]['Fecha'];
                hora.innerHTML = response[i]['hora']+ ":00";
                nombreMesa.innerHTML = response[i]['nombre_mesa'];

            }
        },
        error: function(request, error) {
            console.log(request.responseText);
        }
    });
}