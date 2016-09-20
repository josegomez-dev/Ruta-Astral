var ultimaOrden = 0;
var precios = [];
var descuentos = 0;
var impuestoServicio = 0;
var impuestoVentas = 0;
var btnCalcular = document.getElementById('btn_calcular');
var stringError = '';
var numerOrden = 0;
var porcentajeDescuento = 0
var puntosAGastar = 0;
var mensajeError = document.querySelector(".mensaje-error");
var calcSubtotal = 0;
var calctotal = 0;
var calcPuntos = 0;
var btnfacturar = document.querySelector('#btn_facturar');
var btnBuscarCliente = document.querySelector('#btn_buscar');
var cantidadPuntosCliente = 0;
var cancelaConPuntos = false;
var hayClientePresente = false;
var idCliente = 0;
var idCajero = 2

llenarTablaOrdenes();

btnCalcular.addEventListener('click', function() {
  porcentajeDescuento = document.getElementById('descuento').value;
  puntosAGastar = document.getElementById('puntos_redimidos').value;
   if (porcentajeDescuento == "" && puntosAGastar == "" ) {
      porcentajeDescuento = 0;
      puntosAGastar = 0;
   }else if(porcentajeDescuento == "" ){
      porcentajeDescuento = 0;
   }else if (puntosAGastar == "") {
      puntosAGastar = 0;
   }else{
    puntosAGastar = parseInt(puntosAGastar);
    porcentajeDescuento = parseInt(porcentajeDescuento);
   };

  if (validarNumeros(porcentajeDescuento) == false || validarNumeros(puntosAGastar)== false) {
    stringError += "Por favor ingrese un numero";
    mensajeError.innerHTML =  stringError;
    mensajeError.classList.remove("hide");
  }else{
    calcSubtotal = calcularSubTotal();
    calctotal = calcularTotal();
    calculoConCliente();
    calctotal  = calctotal - ((calctotal * porcentajeDescuento)/100);
    agregarRow('resultados', calcSubtotal,calctotal, calcPuntos);
  };

});

btnfacturar.addEventListener('click', function() {
  if (calctotal == 0 ) {
    stringError += "Por favor haga el calculo respectivo";
    mensajeError.innerHTML =  stringError;
    mensajeError.classList.remove("hide");
  }else {
    var descuento = parseInt(porcentajeDescuento);
    console.log(calctotal);
    console.log(descuento);
    console.log(calcPuntos);
    if (hayClientePresente == false) {
      idCliente = 1;
    };
    insertarDatosFactura(calctotal, descuento);
    if (hayClientePresente == true) {
      insertarPuntosACliente ();
    };
  };
});

btnBuscarCliente.addEventListener('click', function() {
  var nombreUsuario = document.querySelector('#buscar_cliente').value;
  var isNuber = parseInt(nombreUsuario);
  if (validarNumeros(isNuber) == true || nombreUsuario == ""){
    stringError += "Por favor ingrese un numero o el valor correcto";
    mensajeError.innerHTML =  stringError;
    mensajeError.classList.remove("hide");
  }else{
    hayClientePresente = true;
    console.log(nombreUsuario);
    llenarTabla(nombreUsuario);
  };
});

function llenarTablaOrdenes(){
   verTodasLasOrdenes();
   console.log('This is the temp variable ' + ultimaOrden);
   var id = parseInt(ultimaOrden);
   numerOrden= ultimaOrden;
   var peticion = $.ajax({
     url:"php/ver_ordenes.php",        
     type: "POST",
     async: false,
     data: {
         'porden_id' : idOrden,
       },
       dataType: "json",

         success: function(response){
           console.log(response);
           var tbody = document.querySelector('#tabla_factura tbody');
           tbody.innerHTML = '';
          
           for(var i = 0; i<response.length; i++){
            var fila = tbody.insertRow(i);
            var celdaNombre = fila.insertCell(0);
            var celdaPrecio = fila.insertCell(1);
        
            celdaNombre.innerHTML = response[i]['nombre_plato'];
            celdaPrecio.innerHTML = response[i]['precio_plato'];
            precios[i] = response[i]['precio_plato'];
          }
        },
         error: function(request, error) {
          console.log(request.responseText);
         }
     });
 }

function verTodasLasOrdenes(){

  return $.ajax({
    url:"php/ver_todas_ordenes.php",
    type: "post",
    async: false,
    data: {},
    dataType: "json",
      
    success: function(response){
      console.log(response);
      for(var i = 0; i<response.length; i++){
        ultimaOrden = response[i].id_orden;
        console.log(ultimaOrden);
          
      } 
    },
    error: function(request, error) {
      console.log(request.responseText);
    }
  });

}

function obtenerDatoseImpuestos(){
     var peticion = $.ajax({
         url:"php/ver_datos_generales.php",        
         type: "POST",
         async: false,
         data: {},
         dataType: "json",

         success: function(response){
             console.log(response);
            
             for(var i = 0; i<response.length; i++){
                
                 impuestoVentas = response[i]['impuesto_ventas'];
                 impuestoServicio = response[i]['impuesto_servicio'];
                 precioexpress = response[i]['costo_express'];

                
             }
         },
         error: function(request, error) {
             console.log(request.responseText);
         }
     });
 }

function calcularSubTotal(){
  var subTotal = 0;
  for(var i = 0; i<precios.length; i++){
    subTotal += parseInt(precios[i]);
  } 
  console.log(subTotal);
  agregarRow('resultados',subTotal);
  return subTotal;

}

function calcularTotal(){
  var total = 0;
  var totalDescuento = 0;
  total = calcularSubTotal();
  totalDescuento = (total * descuento)/100;
  total =  calcularMontoConImpuestos(total);

  return total

}

function validarNumeros(input){
  return !isNaN(parseFloat(input)) && isFinite(input);
}

function redimirPuntos(puntos){

  var stringError = '';
  var totalADescontar = 0;
  if (puntos >= 7 ) {
    totalADescontar = 6000;
    if (puntos = 10) {
      totalADescontar = 9000;
    }else {
      stringError += 'No se puede cangear mas de 10 puntos';
    }
  }else {
    stringError += 'No son suficientes puntos';
  }
  console.log(stringError);
  return totalADescontar;
}
function obtenerPuntos(monto){
  var montoCompra = 0;
  var puntos = 0;
  var totalPuntos= 0;
  montoCompra = parseFloat(monto);
  puntos = montoCompra / 5000;
  console.log(puntos);
  totalPuntos = Math.floor(puntos);
  return totalPuntos;
}

function calcularMontoConImpuestos(subTotal){
  obtenerDatoseImpuestos();
  console.log(impuestoServicio);
  var montoTotal = 0;
  var montoConImpuestoVentas = 0;
  var montoConImpuestoServicio = 0;
  montoConImpuestoServicio = (subTotal * impuestoServicio)/100;
  console.log(montoConImpuestoServicio);
  montoConImpuestoVentas = (subTotal * impuestoVentas)/100;
  console.log(montoConImpuestoVentas);
  montoTotal = subTotal + montoConImpuestoVentas + montoConImpuestoServicio;
  return montoTotal;
}

function agregarRow(nombreTabla, subtotal, total, puntos){
  var tbody = document.querySelector("#resultados tbody");
  tbody.innerHTML = '';
  var row = tbody.insertRow(0);

  row.insertCell().innerHTML = subtotal;
  row.insertCell().innerHTML = total;
  row.insertCell().innerHTML = puntos;
}


function insertarDatosFactura(total, descuento){
  var fechaActualizacion = new Date();
  fechaActualizacion = Math.round(fechaActualizacion/1000);
  console.log(fechaActualizacion);
  var estado = 'Facturada';
  console.log(numerOrden);
  var peticion = $.ajax({
    url:"php/insertar_factura.php",
    type: "post",
    data: {
        'pid_orden' : numerOrden,
        'ptotal' : total,
        'pestado' : estado,
        'pfecha' : fechaActualizacion,
        'pdescuento' : descuento,
        'pid_cliente' : idCliente,
        'pid_cajero' : idCajero,
    },
    
    dataType: "json",
    
    
    success: function(response){
        document.location.assign('salon.php');
    },
    error: function(request, error) {
        console.log(request);
    }
  });

}

function llenarTabla(usuario){
    var peticion = $.ajax({
        url:"php/obtener_datos_cliente.php",
        type: "post",
        async: false,
        data: {
          'pnombre' : usuario,
        },
        dataType: "json",
        
        success: function(response){
            console.log(response);
            var tbody = document.querySelector('#clients_table tbody');
            tbody.innerHTML = '';
            
            for(var i = 0; i<response.length; i++){
                var fila = tbody.insertRow(i);
                var celdaNombre = fila.insertCell(0);
                var celdaUsuario = fila.insertCell(1);
                var celdaCorreo = fila.insertCell(2);
                var celdaTelefono = fila.insertCell(3);
                var celdaPuntos = fila.insertCell(4);

                idCliente = response[i]['id_usuario'];
                console.log(idCliente);
                cantidadPuntosCliente = parseInt(response[i]['puntos']);

                celdaNombre.innerHTML = response[i]['nombre_completo'];
                celdaUsuario.innerHTML = response[i]['nombre_usuario'];
                celdaCorreo.innerHTML =  response[i]['correo'];
                celdaTelefono.innerHTML =  response[i]['telefono'];
                celdaPuntos.innerHTML =  response[i]['puntos'];
                
            }
        },
        error: function(request, error) {
            console.log(request.responseText);
        }
    });
}

function insertarPuntosACliente (){
  var peticion = $.ajax({
    url:"php/insertar_puntos_clientes.php",
    type: "post",
    data: {
        'pid' : idCliente,
        'ppuntos' : calcPuntos,
    },
    
    dataType: "json",
    
    
    success: function(response){
        
    },
    error: function(request, error) {
      console.log(request);
    }
  });
}

function calculoConCliente(){
  if (hayClientePresente == true && puntosAGastar == 0 ){
    calcPuntos = obtenerPuntos(calctotal);
    console.log('Este es el calculo de los Puntos' + calcPuntos);
  }else if(puntosAGastar > 0 && hayClientePresente == true && puntosAGastar <= cantidadPuntosCliente    ){
    calctotal = calctotal - redimirPuntos(puntosAGastar);
    cancelaConPuntos = true;
  } ;

}
