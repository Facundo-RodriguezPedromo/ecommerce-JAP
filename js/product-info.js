//ENTREGA 3 TABLA CON DESCRIPCION DEL PRODUCTO
document.addEventListener("DOMContentLoaded", function (e) {

  let url = 'https://japdevdep.github.io/ecommerce-api/product/5678.json'

  fetch(url)
    .then(response => response.json())
    .then(dataProduct => mostrarData(dataProduct))
    .catch(error => console.log(error))
  const mostrarData = (dataProduct) => {

    let body = ''; {
    
        body += `<table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <td>${dataProduct.name}</td>
                      <td>${dataProduct.description}</td>
                      <td>${dataProduct.cost}</td>
                      <td>${dataProduct.currency}</td>
                      <td>${dataProduct.soldCount}</td>
                      <td>${dataProduct.category}</td>
                      <td>${dataProduct.relatedProducts}</td>
                     </tr>
                  </thead>
                       <tbody id="dataProductID"></tbody>
                </table>` }
                            document.getElementById('dataProductID').innerHTML = body
  }
});

//ENTREGA 3 OPINIONES DE USUARIOS JSON
document.addEventListener("DOMContentLoaded", function (e) {
         let url = 'https://japdevdep.github.io/ecommerce-api/product/5678-comments.json'

  fetch(url)
    .then(response => response.json())
    .then(dataProductOpinion => mostrarData(dataProductOpinion))
    .catch(error => console.log(error))
  const mostrarData = (dataProductOpinion) => {
    
    let body1 = '';

  for (let i = 0; i < dataProductOpinion.length; i++) {
       var scoreUser = dataProductOpinion[i].score
       var coloreaEstrellas = '';

  for (var S = 0; S < scoreUser; S++ )
      coloreaEstrellas += `<span class="fa fa-star" style="color:orange"/>`;

      body1 += `<div class="container-comments" id="CajaDeNuevoComentario">
                  <div class="comments">
                    <div class="info-comments">
                      <div class="header">
                        <h4>${dataProductOpinion[i].user}</h4>
                        <h5>${dataProductOpinion[i].dateTime}</h5>
                      </div>
                        <p>${dataProductOpinion[i].description}</p>
                      <div>
                        <p>${coloreaEstrellas}</p>
                      </div>
                      <div class="footer">
                        <label class="icon-bubble"></label>
                      </div>
                    </div>
                  </div>
                </div>`
    }
    document.getElementById('CajaDeNuevoComentario').innerHTML += body1
  }
});

//ENTREGA 3 ... NUEVOS COMENTARIOS
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
                           <h4>${suNombre}</h4>
                           <h5>${FechaNueva}</h5>
                         </div>
                           <p>${comentaAqui}</p>
                         <div>
                           <p>${coloreaEstrellas}</p>
                         </div>
                         <div class="footer">
                           <label class="icon-bubble"></label>
                         </div>
                       </div>
                     </div>
                   </div>`
    document.getElementById('CajaDeNuevoComentario').innerHTML += body1
  });
});





// ENTREGA 4 BARRA NAV3GACION 

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