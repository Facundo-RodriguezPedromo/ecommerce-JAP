//ENTREGA 5 CARRITO DE COMPRAS
document.addEventListener("DOMContentLoaded", function(e){
  

    let url = 'https://japdevdep.github.io/ecommerce-api/cart/987.json'

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => { 
        
        let nombre= data.articles[0].name;
        let count=data.articles[0].count;
        let uniCost=data.articles[0].unitCost;
        let currency =data.articles[0].currency;
        let fuente= data.articles[0].src;
      
        let body = ''
       
            body += ` <table class="tabla">
            <!--<caption class="titulo-tabla">Productos en el carrito</caption>-->
            <thead class="cabecera border-top-right">
              <tr>
                <th class="border-top-left">`+ nombre +`</th>
                <th><input id="sumaProduct" type="number" min="1" /></th>
                <th>`+ uniCost +`</th>
                <th>`+ currency +`</th>
                <th class="border-top-right"><img src=`+fuente+` width="300" height="200"></th>
              </tr>
            </thead>
            <tbody id="carrito-body">
        
            </tbody>
          
          </table> `
        document.getElementById('carrito-body').innerHTML = body
    }


   //SUMA DE COSTOS
});
var subTotalAfuera;
function subTotal(){
  var cantidad= $('#sumaProduct').val();
  var precio=  100;
  var subTotal=cantidad*precio;
  subTotalAfuera=subTotal;
  console.log(subTotal);
  document.getElementById('productCostText').innerHTML = subTotal;
  costoDeEnvioYtotal();
}

function costoDeEnvioYtotal(){
 var costoEnvioGold=0;
 
 var goldEnvio = document.getElementById("goldradio").checked;

if(goldEnvio){
    costoEnvioGold = subTotalAfuera*0.13;
    document.getElementById('comissionText').innerHTML = costoEnvioGold;
    costoTotal = subTotalAfuera+costoEnvioGold;
    document.getElementById('totalCostText').innerHTML = costoTotal;
}

var premiumEnvio = document.getElementById("premiumradio").checked;

if(premiumEnvio){
    costoEnvioPremium = subTotalAfuera*0.07;
    document.getElementById('comissionText').innerHTML = costoEnvioPremium;
    costoTotal = subTotalAfuera+costoEnvioPremium;
    document.getElementById('totalCostText').innerHTML = costoTotal;
  
}

var estandarEnvio = document.getElementById("standardradio").checked;

if(estandarEnvio){
    costoEnvioEstandar = subTotalAfuera*0.03;
    document.getElementById('comissionText').innerHTML = costoEnvioEstandar;
    costoTotal = subTotalAfuera+costoEnvioEstandar;
    document.getElementById('totalCostText').innerHTML = costoTotal;
  }
}


