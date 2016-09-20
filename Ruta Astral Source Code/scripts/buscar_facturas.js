var btnBuscarFactura = document.querySelector('#btn_buscar');
var stringError = '';
var mensajeError = document.querySelector(".mensaje-error");

btnBuscarFactura.addEventListener('click', function() {
  var idFactura = document.querySelector('#buscar_cliente').value;
  var isNotNumber = parseInt(idFactura);
  if (validarNumeros(isNotNumber) == false || idFactura == ""){
    stringError += "Por favor ingrese un dato en el formato de Numero";
    mensajeError.innerHTML =  stringError;
    mensajeError.classList.remove("hide");
  }else{
    console.log(idFactura);
    buscarFactura(isNotNumber);
  };
});

function buscarFactura(id){
    var peticion = $.ajax({
        url:"php/buscar_factura.php",
        type: "post",
        data: {
          'pid' : id,
        },
        dataType: "json",
        
        success: function(response){
            console.log(response);
            var tbody = document.querySelector('#tabla_facturas tbody');
            tbody.innerHTML = '';
            
            for(var i = 0; i<response.length; i++){
                var fila = tbody.insertRow(i);
                var celdaIdFactura = fila.insertCell(0);
                var celdaIdOrden = fila.insertCell(1);
                var celdaIdUsuario = fila.insertCell(2);
                var celdaEstado = fila.insertCell(3);
                var celdaFecha = fila.insertCell(4);
                var celdaDescuento = fila.insertCell(5);
                var celdaTotal = fila.insertCell(6);

                celdaIdFactura.innerHTML = response[i]['id_factura'];
                celdaIdOrden.innerHTML = response[i]['id_orden'];
                celdaIdUsuario.innerHTML =  response[i]['id_cliente'];
                celdaEstado.innerHTML =  response[i]['estado'];
                celdaFecha.innerHTML =  response[i]['fecha_hora'];
                celdaDescuento.innerHTML =  response[i]['descuento'];
                celdaTotal.innerHTML =  response[i]['total']; 
                
            }
        },
        error: function(request, error) {
            console.log(request.responseText);
        }
    });
}

function validarNumeros(input){
  return !isNaN(parseFloat(input)) && isFinite(input);
}