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
            body += `<tr><td><img src="${data[i].imgSrc}" width="300" height="200" </td>
                  <td>${data[i].name}</td> 
                  <td>${data[i].description} <br> <br> <a
                  style = "background-color:#082E76 "
                  type="button"
                  class="btn btn-outline-info btn btn-secondary btn-lg"
                  href="product-info.html">
                  Informacion
                </a> </td>
                  <td>${data[i].cost}</td>                                                       
                  <td>${data[i].currency}</td>
                  <td>${data[i].soldCount}</td></tr>`
        }
        document.getElementById('data').innerHTML = body
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

                    ListaConFiltro += `<tr><td><img src="${data[i].imgSrc}" width="300" height="200" </td>
            <td>${data[i].name}</td>
            <td>${data[i].description}<br> <br> <a
            style = "background-color:#082E76 "
            type="button"
            class="btn btn-outline-info btn btn-secondary btn-lg"
            href="product-info.html">
            Informacion
          </a> </td>
            <td>${data[i].cost}</td>
            <td>${data[i].currency}</td>
            <td>${data[i].soldCount}</td></tr>`

                    /*ENTREGA 2 RESETEO PARA LOS CAMPOS MIN Y MAX*/
                    $(document).ready(function () {
                        $('#LimpiarFiltroPrecios').click(function () {
                            $('input[type="number"]').val('');
                            window.location.href = "./products.html";
                        });
                    });

                } console.log(aux); document.getElementById('data').innerHTML = ListaConFiltro
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
            OrdenadosMayor += `<tr><td><img src="${aux2[j].imgSrc}" width="300" height="200" </td>
            <td>${aux2[j].name}</td>
            <td>${aux2[j].description}<br> <br> <a
            style = "background-color:#082E76 "
            type="button"
            class="btn btn-outline-info btn btn-secondary btn-lg"
            href="product-info.html">
            Informacion
          </a> </td>
            <td>${aux2[j].cost}</td>
            <td>${aux2[j].currency}</td>
            <td>${aux2[j].soldCount}</td></tr>`


        } document.getElementById('data').innerHTML = OrdenadosMayor
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
            OrdenadosMenor += `<tr><td><img src="${aux2[j].imgSrc}" width="300" height="200" </td>
            <td>${aux2[j].name}</td>
            <td>${aux2[j].description}<br> <br> <a
            style = "background-color:#082E76 "
            type="button"
            class="btn btn-outline-info btn btn-secondary btn-lg"
            href="product-info.html">
            Informacion
          </a> </td>
            <td>${aux2[j].cost}</td>
            <td>${aux2[j].currency}</td>
            <td>${aux2[j].soldCount}</td></tr>`


        } document.getElementById('data').innerHTML = OrdenadosMenor
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
            OrdenadosRelevancia += `<tr><td><img src="${aux2[j].imgSrc}" width="300" height="200" </td>
            <td>${aux2[j].name}</td>
            <td>${aux2[j].description}<br> <br> <a
            style = "background-color:#082E76 "
            type="button"
            class="btn btn-outline-info btn btn-secondary btn-lg"
            href="product-info.html">
            Informacion
          </a> </td>
            <td>${aux2[j].cost}</td>
            <td>${aux2[j].currency}</td>
            <td>${aux2[j].soldCount}</td></tr>`


        } document.getElementById('data').innerHTML = OrdenadosRelevancia
        console.log(aux2)
    }
}















