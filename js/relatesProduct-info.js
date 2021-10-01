/** ENTREGA 4 PRODUCTOS RELACIONADOS */
document.addEventListener("DOMContentLoaded", function (e) {

    let url = 'https://japdevdep.github.io/ecommerce-api/product/all.json'

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {

      
        let body = ''
       
            body += `<tr>
                  <td>${data[2].name}</td> 
                  <td>${data[2].description}</td>
                  <td>${data[2].cost}</td>                                                       
                  <td>${data[2].currency}</td>
                  <td>${data[2].soldCount}</td></tr>
                  
                  <tr>
                  <td>${data[3].name}</td> 
                  <td>${data[3].description}</td>
                  <td>${data[3].cost}</td>                                                       
                  <td>${data[3].currency}</td>
                  <td>${data[3].soldCount}</td></tr>
                  
                  <tr>
                  <td>${data[1].name}</td> 
                  <td>${data[1].description}</td>
                  <td>${data[1].cost}</td>                                                       
                  <td>${data[1].currency}</td>
                  <td>${data[1].soldCount}</td></tr>`
        
        document.getElementById('dataProductIDrelated').innerHTML = body
    }
  });



// CAJA Y FECHA PARA COMENTARIOS ENTREGA 3
  window.onload = function fechaNueva(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;
  }
  
  document.addEventListener("DOMContentLoaded", function (e) {
        var boton = document.getElementById('button');
           
      boton.addEventListener("click", function () {
        var comentaAqui = document.getElementById('comenta_aqui').value;
        var suNombre = document.getElementById('NombreUsuarioComentario').value;
        document.getElementById('comenta_aqui').value = ""; //limpia luego de usarlos
        document.getElementById('NombreUsuarioComentario').value = "";
       
         var scoreUser = document.getElementById('estrellasHTML').value;
         var coloreaEstrellas = '';
         var FechaNueva =   document.getElementById('fechaActual').value;  
    for (var S = 0; S < scoreUser; S++ )
        coloreaEstrellas += `<span class="fa fa-star" style="color:orange"/>`;
        
        let body1 = '';
  
            body1 +=`<div class="container-comments" id="CajaDeNuevoComentario">
                       <div class="comments">
                         <div class="info-comments">
                           <div class="header">
                             <h4 id="NombreJson">${suNombre}</h4>
                             
                           </div>
                             <p>${comentaAqui}</p>
                           <div>
                             <p>${coloreaEstrellas}</p>
                           </div>
                           <div class="footer">
                             <label class="icon-bubble"></label>
                             <h5 id="fechaJson">${FechaNueva}</h5>
                           </div>
                         </div>
                       </div>
                     </div>`
      document.getElementById('CajaDeNuevoComentario').innerHTML += body1
    });
  });
  

  // ENTREGA 4 BARRA NAVEGACION MANU PARA EL BOTON USUARIO

document.addEventListener('DOMContentLoaded', function () {
  const userName = document.querySelector('#UsuarioActualLogin')
  const list = document.querySelector('.navUser ul')

  userName.addEventListener('mouseover', () => {
      list.style.display = "block"
  })
  document.querySelector('.containerGaleriaAuto').addEventListener('mouseover', () => {
      list.style.display = "none"
  })
  document.querySelector('h1').addEventListener('mouseover', () => {
      list.style.display = "none"
  })
  document.querySelector('#DesapareceMenuUser').addEventListener('mouseover', () => {
    list.style.display = "none"
})




});