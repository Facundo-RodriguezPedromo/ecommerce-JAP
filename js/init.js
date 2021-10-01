const CATEGORIES_URL =
  "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL =
  "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL =
  "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL =
  "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL =
  "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL =
  "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";


var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
};

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
};

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch("https://japdevdep.github.io/ecommerce-api/category/all.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      hideSpinner();
      return result;
    });
};



//ESTE CODIGO SOLO SE USA EN product-info.html Y relatedProducts.html CARRUSEL

let urlNumber = window.location.href.split("/").length
let url = window.location.href.split("/", urlNumber)[urlNumber - 1].split("?")[0].split("#")[0]
  //CARRUSEL DE IMAGENES EN PRODUCT-INFO.HTML entrega 4
if ("relatedProducts.html" === url || "product-info.html" === url){
  document.addEventListener("DOMContentLoaded", function (e){
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
      duration:15,
      dist:-80,
      shift:5,
      padding:5,
      numVisible:3,
      indicators:true,
      noWrap:false,
    });
  });

}


//AGREGA NOMBRE DE USUARIO ACTUAL A BARRA DE NAVEGACION                         
document.addEventListener("DOMContentLoaded", function (e) {

  var usuerConSuCuenta = localStorage.getItem("UserEmailID")
 
document.getElementById("UsuarioActualLogin").innerHTML = 
`<li>
        <div class="navUser">
            <a class="py-2 d-none d-md-inline-block" href="#" id="UsuarioActualLogin">${usuerConSuCuenta}</a> 
            <ul>
               <li><a class="py-2 d-none d-md-inline-block" href="cart.html">Mi carrito</a></li>
                <li><a class="py-2 d-none d-md-inline-block" href="my-profile.html">Mi perfil</a></li>
                <li><a class="py-2 d-none d-md-inline-block" href="index.html">Cerrar sesión</a></li>
            </ul>
        </div> 
    </li>`

});



