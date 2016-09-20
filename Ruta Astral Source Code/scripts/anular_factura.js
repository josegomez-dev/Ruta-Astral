var btnAnular = document.querySelector('#btn_anular');
var mensajeError = document.querySelector(".mensaje-error");
var stringError = '';

llenarTabla();


btnAnular.addEventListener('click', function() {
    var factura = document.querySelector('#buscar_factura').value;
    var idFactura = parseInt(factura);
    if (validarNumeros(idFactura) == false || idFactura == ""){
        stringError += "Por favor ingrese un numero o el valor correcto";
        mensajeError.innerHTML =  stringError;
        mensajeError.classList.remove("hide");
    }else{
        console.log(idFactura);
        insertarDatosFactura(idFactura);
  };
});

function llenarTabla(){
    var peticion = $.ajax({
        url:"php/ver_solo_facturadas.php",
        type: "post",
        data: {},
        dataType: "json",
        
        success: function(response){
            console.log(response);
            var tbody = document.querySelector('#tabla_facturas tbody');
            tbody.innerHTML = '';
            var btn = document.createElement("Anular");
            for(var i = 0; i<response.length; i++){
                var fila = tbody.insertRow(i);
                var celdaIdFactura = fila.insertCell(0);
                var celdaIdOrden = fila.insertCell(1);
                var celdaIdUsuario = fila.insertCell(2);
                var celdaEstado = fila.insertCell(3);
                var celdaDescuento = fila.insertCell(4);
                var celdaTotal = fila.insertCell(5);

                celdaIdFactura.innerHTML = response[i]['id_factura'];
                celdaIdOrden.innerHTML = response[i]['id_orden'];
                celdaIdUsuario.innerHTML =  response[i]['id_cliente'];
                celdaEstado.innerHTML =  response[i]['estado'];
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

function insertarDatosFactura(id){
  var fechaActualizacion = new Date();
  console.log(id);
  var peticion = $.ajax({
    url:"php/anular_factura.php",
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
