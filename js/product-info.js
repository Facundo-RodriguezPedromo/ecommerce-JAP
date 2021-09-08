

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    let url = 'https://japdevdep.github.io/ecommerce-api/product/5678.json'

    fetch(url)
        .then(response => response.json())
        .then(dataProduct => mostrarData(dataProduct))
        .catch(error => console.log(error))
    const mostrarData = (dataProduct) => {
let body = ''
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
            <tbody id="dataProductID">
            </tbody>
        
        </table>  `
        }
        document.getElementById('dataProductID').innerHTML = body
    }
    
});

