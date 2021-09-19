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
document.addEventListener("DOMContentLoaded", function (e) {
      var boton = document.getElementById('button');
         
    boton.addEventListener("click", function () {
      var comentaAqui = document.getElementById('comenta_aqui').value;
      var suNombre = document.getElementById('NombreUsuarioComentario').value;
      document.getElementById('comenta_aqui').value = ""; //limpia luego de usarlos
      document.getElementById('NombreUsuarioComentario').value = "";
     
       var scoreUser = document.getElementById('estrellasHTML').value;
       var coloreaEstrellas = '';

  for (var S = 0; S < scoreUser; S++ )
      coloreaEstrellas += `<span class="fa fa-star" style="color:orange"/>`;
      
      let body1 = '';

          body1 +=`<div class="container-comments" id="CajaDeNuevoComentario">
                     <div class="comments">
                       <div class="info-comments">
                         <div class="header">
                           <h4>${suNombre}</h4>
                           <h5>fecha</h5>
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

// FUNCION PARA MARCAR LAS ESTRELLAS
var contador;
function calificar(item) {
  
  contador = item.id[0]; //primer caracter
  let nombre = item.id.substring(1); // captura todos menos el primero

  for (let i = 0; i < 5; i++) {
    if (i < contador) {
      document.getElementById(i + 1 + nombre).style.color = "orange";
    } else {
      document.getElementById(i + 1 + nombre).style.color = "black";
    }
  }
}