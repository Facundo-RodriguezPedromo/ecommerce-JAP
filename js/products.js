/*ENTREGA 1 FETCH CON LISTA DE AUTOS PARA SECION PRODUCTOS*/
document.addEventListener("DOMContentLoaded", function (e) {

    let url = 'https://japdevdep.github.io/ecommerce-api/product/all.json'

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {

        let body = ''
        for (let i = 0; i < data.length; i++) {

body += `
       <div class="col-md-4">
        <a href="categories.html" class="card mb-4 shadow-sm custom-card">
        <img src="${data[i].imgSrc}" class="src_${i}" width="300" height="200">
        <h3 class='name_${i}'>${data[i].name}</h3>
        <h5>${data[i].description}</h5>
        <br> <br> <a
        style = "background-color:#082E76 "
        type="button"
        class="btn btn-outline-info btn btn-secondary btn-lg"
        href="product-info.html">
        Informacion
      </a> <br> <br> <a
      style = "background-color:#082E76 "
      type="button"
      class="btn btn-outline-info btn btn-secondary btn-lg"
      href="javascript:agregarAlCarrito(${i})">
      Agregar al carrito
    </a>

          <div class="card-body">
          <p class='unitCost_${i}'> 
          ${data[i].cost}
           </p>
           <p class='currency_${i}'> 
           ${data[i].currency}
           </p>
           <p> 
            ${data[i].soldCount}
                          </p>
          </div>
        </a>
      </div>
      `
        }
        document.getElementById('producto').innerHTML = body
    }

    /*ENTREGA 2 FILTROS POR PRECIOS*/
    document.getElementById("FiltrarPrecios").onclick = function () {
        let valueMin = document.getElementById("rangoPrecioMin").value;
        let valueMax = document.getElementById("rangoPrecioMax").value;
        let url = 'https://japdevdep.github.io/ecommerce-api/product/all.json'
        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
        const mostrarData = (data) => {

            let ListaConFiltro = ''
            for (let i = 0; i < data.length; i++) {
                if (valueMin <= data[i].cost && valueMax >= data[i].cost) {

                    aux = data[i];

                    ListaConFiltro += ` <div class="col-md-4">
                    <a href="categories.html" class="card mb-4 shadow-sm custom-card">
                    <img src="${data[i].imgSrc}" class="src_${i}" width="300" height="200">
                    <h3 class='name_${i}'>${data[i].name}</h3>
                    <h5>${data[i].description}</h5>
                    <br> <br> <a
                    style = "background-color:#082E76 "
                    type="button"
                    class="btn btn-outline-info btn btn-secondary btn-lg"
                    href="product-info.html">
                    Informacion
                  </a> <br> <br> <a
                  style = "background-color:#082E76 "
                  type="button"
                  class="btn btn-outline-info btn btn-secondary btn-lg"
                  href="javascript:agregarAlCarrito(${i})">
                  Agregar al carrito
                </a>
            
                      <div class="card-body">
                      <p class='unitCost_${i}'> 
                      ${data[i].cost}
                       </p>
                       <p class='currency_${i}'> 
                       ${data[i].currency}
                       </p>
                       <p> 
                        ${data[i].soldCount}
                                      </p>
                      </div>
                    </a>
                  </div>`

                    /*ENTREGA 2 RESETEO PARA LOS CAMPOS MIN Y MAX*/
                    $(document).ready(function () {
                        $('#LimpiarFiltroPrecios').click(function () {
                            $('input[type="number"]').val('');
                            window.location.href = "./products.html";
                        });
                    });

                } console.log(aux); document.getElementById('producto').innerHTML = ListaConFiltro
            }
        }
    }
});

/**MENOR A MAYOR */
function oredenarMenoraMayor() {
    aux = [];
    let url = 'https://japdevdep.github.io/ecommerce-api/product/all.json'
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        aux = [];
        aux2 = [];
        for (i = 0; i < data.length; i++) {
            aux.push(data[i]);
        }
        aux2 = aux.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;

        });
        let OrdenadosMayor = ''
        for (j = 0; j < aux2.length; j++) {
            OrdenadosMayor += ` <div class="col-md-4">
            <a href="categories.html" class="card mb-4 shadow-sm custom-card">
            <img src="${aux2[j].imgSrc}" class="src_${i}" width="300" height="200">
            <h3 class='name_${i}'>${aux2[j].name}</h3>
            <h5>${aux2[j].description}</h5>
            <br> <br> <a
            style = "background-color:#082E76 "
            type="button"
            class="btn btn-outline-info btn btn-secondary btn-lg"
            href="product-info.html">
            Informacion
          </a> <br> <br> <a
          style = "background-color:#082E76 "
          type="button"
          class="btn btn-outline-info btn btn-secondary btn-lg"
          href="javascript:agregarAlCarrito(${i})">
          Agregar al carrito
        </a>
    
              <div class="card-body">
              <p class='unitCost_${i}'> 
              ${aux2[j].cost}
               </p>
               <p class='currency_${i}'> 
               ${aux2[j].currency}
               </p>
               <p> 
                ${aux2[j].soldCount}
                              </p>
              </div>
            </a>
          </div>`


        } document.getElementById('producto').innerHTML = OrdenadosMayor
        console.log(aux2)
    }
}

/**MAYOR A MENOR */
function oredenarMayoraMenor() {
    aux = [];
    let url = 'https://japdevdep.github.io/ecommerce-api/product/all.json'
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        aux = [];
        aux2 = [];
        for (i = 0; i < data.length; i++) {

            aux.push(data[i]);

        }

        aux2 = aux.sort(function (a, b) {
            if (a.cost < b.cost) { return 1; }
            if (a.cost > b.cost) { return -1; }
            return 0;

        });
        let OrdenadosMenor = ''
        for (j = 0; j < aux2.length; j++) {
            OrdenadosMenor += `<div class="col-md-4">
            <a href="categories.html" class="card mb-4 shadow-sm custom-card">
            <img src="${aux2[j].imgSrc}" class="src_${i}" width="300" height="200">
            <h3 class='name_${i}'>${aux2[j].name}</h3>
            <h5>${aux2[j].description}</h5>
            <br> <br> <a
            style = "background-color:#082E76 "
            type="button"
            class="btn btn-outline-info btn btn-secondary btn-lg"
            href="product-info.html">
            Informacion
          </a> <br> <br> <a
          style = "background-color:#082E76 "
          type="button"
          class="btn btn-outline-info btn btn-secondary btn-lg"
          href="javascript:agregarAlCarrito(${i})">
          Agregar al carrito
        </a>
    
              <div class="card-body">
              <p class='unitCost_${i}'> 
              ${aux2[j].cost}
               </p>
               <p class='currency_${i}'> 
               ${aux2[j].currency}
               </p>
               <p> 
                ${aux2[j].soldCount}
                              </p>
              </div>
            </a>
          </div>`


        } document.getElementById('producto').innerHTML = OrdenadosMenor
        console.log(aux2)
    }
}

/**RECUENTO VENDIDOS */
function oredenarRelevancia() {
    aux = [];
    let url = 'https://japdevdep.github.io/ecommerce-api/product/all.json'
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        aux = [];
        aux2 = [];
        for (i = 0; i < data.length; i++) {

            aux.push(data[i]);
        }

        aux2 = aux.sort(function (a, b) {
            if (a.soldCount < b.soldCount) { return 1; }
            if (a.soldCount > b.soldCount) { return -1; }
            return 0;

        });
        let OrdenadosRelevancia = ''
        for (j = 0; j < aux2.length; j++) {
            OrdenadosRelevancia += `<div class="col-md-4">
            <a href="categories.html" class="card mb-4 shadow-sm custom-card">
            <img src="${aux2[j].imgSrc}" class="src_${i}" width="300" height="200">
            <h3 class='name_${i}'>${aux2[j].name}</h3>
            <h5>${aux2[j].description}</h5>
            <br> <br> <a
            style = "background-color:#082E76 "
            type="button"
            class="btn btn-outline-info btn btn-secondary btn-lg"
            href="product-info.html">
            Informacion
          </a> <br> <br> <a
          style = "background-color:#082E76 "
          type="button"
          class="btn btn-outline-info btn btn-secondary btn-lg"
          href="javascript:agregarAlCarrito(${i})">
          Agregar al carrito
        </a>
    
              <div class="card-body">
              <p class='unitCost_${i}'> 
              ${aux2[j].cost}
               </p>
               <p class='currency_${i}'> 
               ${aux2[j].currency}
               </p>
               <p> 
                ${aux2[j].soldCount}
                              </p>
              </div>
            </a>
          </div>`


        } document.getElementById('producto').innerHTML = OrdenadosRelevancia
        console.log(aux2)
    }
}
 /*ENTREGA 5 AGREGAR AL CARRITO*/
function agregarAlCarrito(i) {

    var prod = {
        name : document.getElementsByClassName('name_' + i)[0].innerHTML,
        unitCost: document.getElementsByClassName('unitCost_' + i)[0].innerHTML,
        currency: document.getElementsByClassName('currency_' + i)[0].innerHTML,
        count : 1,
        src: document.getElementsByClassName('src_' + i)[0].currentSrc
    }
    localStorage.setItem("producto_" + i, JSON.stringify(prod));
}





























