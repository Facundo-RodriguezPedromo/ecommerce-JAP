//ENTREGA 3 TABLA CON DESCRIPCION DEL PRODUCTO
document.addEventListener("DOMContentLoaded", function (e) {
  let url = "https://japdevdep.github.io/ecommerce-api/product/5678.json";

  fetch(url)
    .then((response) => response.json())
    .then((dataProduct) => mostrarData(dataProduct))
    .catch((error) => console.log(error));
  const mostrarData = (dataProduct) => {
    let body = "";
    {
      body += ` <table class="table table-bordered table-striped">
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
          </table>  `;
    }
    document.getElementById("dataProductID").innerHTML = body;
  };
});

//ENTREGA 3 OPINIONES DE USUARIOS JSON
document.addEventListener("DOMContentLoaded", function (e) {
  let url =
    "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";

  fetch(url)
    .then((response) => response.json())
    .then((dataProductOpinion) => mostrarData(dataProductOpinion))
    .catch((error) => console.log(error));
  const mostrarData = (dataProductOpinion) => {
    let estrellas = ` <div class="col-12" style="text-align: center;">
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="1estrella"></span>
  
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="2estrella"></span>
  
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="3estrella"></span>
  
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="4estrella"></span>
  
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="5estrella"></span>
    
  
  </div> `;

    let body1 = "";
    for (let i = 0; i < dataProductOpinion.length; i++) {
      // dataProductOpinion[i].score = calificar(item);

      body1 += ` <div class="container-comments" id="CajaDeNuevoComentario">
            <div class="comments">
              <div class="info-comments">
                <div class="header">
                  <h4>${dataProductOpinion[i].user}</h4>
                  <h5>${dataProductOpinion[i].dateTime}</h5>
                </div>
                <p>${dataProductOpinion[i].description}</p>
              <div>
                ${estrellas}
              </div>
               <div class="footer">
                  <label class="icon-bubble"></label>
                </div>
        </div>
            </div>
          </div> `;
    }
    document.getElementById("CajaDeNuevoComentario").innerHTML += body1;
  };
});

//ENTREGA 3 ... NUEVOS COMENTARIOS
document.addEventListener("DOMContentLoaded", function (e) {
  var boton = document.getElementById("button");

  boton.addEventListener("click", function () {
    var comentaAqui = document.getElementById("comenta_aqui").value;
    var suNombre = document.getElementById("NombreUsuarioComentario").value;
    document.getElementById("comenta_aqui").value = ""; //limpia luego de usarlos
    document.getElementById("NombreUsuarioComentario").value = "";
    let estrellas = ` <div class="col-12" style="text-align: center;">
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="1estrella"></span>
  
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="2estrella"></span>
  
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="3estrella"></span>
  
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="4estrella"></span>
  
    <span class="fa fa-star" onclick="calificar(this)"
    style="cursor: pointer;" id="5estrella"></span>
    
  
  </div> `;

    let body1 = "";

    body1 += ` <div class="container-comments" id="CajaDeNuevoComentario">
    <div class="comments">
      <div class="info-comments">
        <div class="header">
          <h4>${suNombre}</h4>
          <h5>Fecha</h5>
        </div>
        <p>${comentaAqui}</p>
       <div>
        ${estrellas}
        </div>
        <div class="footer">
          <label class="icon-bubble"></label>
        </div>

      </div>
    </div>
  </div> `;
    document.getElementById("CajaDeNuevoComentario").innerHTML += body1;
  });
});

// FUNCION PARA MARCAR LAS ESTRELLAS
var contador;
function calificar(item) {
  console.log(item);
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

calificar(item);
