//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

/*ENTREGA 1 FETCH Y LISTA DE AUTOS PARA SECION PRODUCTOS*/
document.addEventListener("DOMContentLoaded", function (e) {
    let url = 'https://japdevdep.github.io/ecommerce-api/product/all.json'
        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
			             const mostrarData = (data) => {
                  console.log(data)
                  let body = ''
                  for (let i = 0; i<data.length; i++){
                body += `<tr><td><img src="${data[i].imgSrc}" width="300" height="200" </td>
                  <td>${data[i].name}</td>
                  <td>${data[i].description}</td>
                  <td>${data[i].cost}</td>
                  <td>${data[i].currency}</td>
                  <td>${data[i].soldCount}</td></tr>`                
            }
            document.getElementById('data').innerHTML = body
        }            

});