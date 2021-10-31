//ENTREGA 5 CARRITO DE COMPRAS
document.addEventListener("DOMContentLoaded", function(e){
  

  let url = 'https://japdevdep.github.io/ecommerce-api/cart/987.json'

  fetch(url)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))
  const mostrarData = (data) => { 
      
    for (var i = 0; i < 4; i++) {
      let prod = JSON.parse(localStorage.getItem("producto_" + i));
      if (prod != null) data.articles.push(prod);
  }

  let body = '<table class="tabla"><thead class="cabecera border-top-right">';

  for (var i = 0; i < data.articles.length; i++) {
      let nombre = data.articles[i].name;
      let count = data.articles[i].count;
      let unitCost = data.articles[i].unitCost;
      let currency = data.articles[i].currency;
      let fuente = data.articles[i].src;
      
      body += ` 
        <tr id='tr_${i}'>
          <th class="border-top-left">`+ nombre + `</th>
          <th><input class="cantidad_${i}" type="number" min="1" value="`+ count + `" onchange="calcularLinea(${i})" /></th>
          <th class="moneda_${i}">` + currency + `</th>
          <th class="unitario_${i}">` + unitCost + `</th>
          <th class="totalLinea_${i} sumaSubTotal">` + ((currency == "USD") ? parseInt(count) * parseInt(unitCost) * 40 : parseInt(count) * parseInt(unitCost)) + `</th>
          <th class="border-top-right"><img src=`+ fuente + ` width="300" height="200"></th>
        </tr>`
  }
  
  body += `</thead></table>`;

  
  document.getElementById('carrito-body').innerHTML = body

  calcularSubTotal();
}


});

function calcularLinea(i) {
let cantidad = document.getElementsByClassName('cantidad_' + i)[0].value;
let unitario = document.getElementsByClassName('unitario_' + i)[0].innerHTML;
let moneda = document.getElementsByClassName('moneda_' + i)[0].innerHTML;
let cotizacion = 1;

if (moneda == "USD")
  cotizacion = 40;

let totalLinea = parseInt(cantidad) * parseInt(unitario) * cotizacion;

document.getElementsByClassName('totalLinea_' + i)[0].innerHTML = totalLinea;

calcularSubTotal();
}

function calcularSubTotal() {
var sum = 0;
$('.sumaSubTotal').each(function () {
  sum += parseFloat(this.innerHTML);  
});

document.getElementById('lbl_subTotal').innerHTML = sum;

calcularEnvio();
}

function calcularEnvio() {

let subtotal = parseFloat(document.getElementById('lbl_subTotal').innerHTML);
let porcentaje = 0;

if (document.getElementById('goldradio').checked) porcentaje = 13;
if (document.getElementById('premiumradio').checked) porcentaje = 7;
if (document.getElementById('standardradio').checked) porcentaje = 3;

let costo = subtotal / 100 * porcentaje;

document.getElementById('lbl_costoEnvio').innerHTML = costo;

calcularTotal();
}

function calcularTotal() {
let subtotal = parseFloat(document.getElementById('lbl_subTotal').innerHTML);
let costoEnvio = parseFloat(document.getElementById('lbl_costoEnvio').innerHTML);

let total = subtotal + costoEnvio;

document.getElementById('lbl_total').innerHTML = total;
}

function eliminarDelCarrito(i) {
localStorage.removeItem("producto_" + i);
document.getElementById('tr_' + i).remove();

calcularSubTotal();
}

function limpiarCarrito() {
localStorage.removeItem("producto_0");
localStorage.removeItem("producto_1");
localStorage.removeItem("producto_2");
localStorage.removeItem("producto_3");

window.location.reload();
}