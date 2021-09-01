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
                  <td>${data[i].description}</td>
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
            <td>${data[i].description}</td>
            <td>${data[i].cost}</td>
            <td>${data[i].currency}</td>
            <td>${data[i].soldCount}</td></tr>`

            $(document).ready(function() {
                $('#LimpiarFiltroPrecios').click(function() {
                  $('input[type="number"]').val('');
                  window.location.href = "./products.html";
                });
              });
            
                } console.log(aux); document.getElementById('data').innerHTML = ListaConFiltro
            }
        } 
}
});    /*ENTREGA 2 RESETEO PARA LOS CAMPOS MIN Y MAX*/

