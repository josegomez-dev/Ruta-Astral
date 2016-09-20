 obtenerDatosGenerales();
 function obtenerDatosGenerales(){
     var peticion = $.ajax({
         url:"php/ver_datos_generales.php",        
         type: "POST",
         data: {},
         dataType: "json",

         success: function(response){
             console.log(response);
             var tbody = document.querySelector('#datos_generales tbody');
             tbody.innerHTML = '';
            
             for(var i = 0; i<response.length; i++){
                 var fila = tbody.insertRow(i);
                 var impuestoVentas = fila.insertCell(0);
                 var impuestoServicio = fila.insertCell(1);
                 var precioexpress = fila.insertCell(2);
                
                 impuestoVentas.innerHTML = response[i]['impuesto_ventas'];
                 impuestoServicio.innerHTML = response[i]['impuesto_servicio'];
                 precioexpress.innerHTML = response[i]['costo_express'];

                
             }
         },
         error: function(request, error) {
             console.log(request.responseText);
         }
     });
 }