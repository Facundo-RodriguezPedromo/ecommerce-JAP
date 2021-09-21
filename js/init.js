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

//AGREGA NOMBRE DE USUARIO A BARRA DE NAVEGACION
document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("UsuarioActualLogin") 
  var user = sessionStorage.getItem("UserEmailID");
  let agregarHtmldeUser = "";
agregarHtmldeUser =

` <div class="navUser">
<a class="py-2 d-none d-md-inline-block" href="#" id="UsuarioActualLogin">` + user + `</a>
<ul>
  <li><a class="py-2 d-none d-md-inline-block" href="cart.html">Mi carrito</a></li>
  <li><a class="py-2 d-none d-md-inline-block" href="Mi_perfil.html">Mi perfil</a></li>
  <li><a class="py-2 d-none d-md-inline-block" href="index.html">Cerrar sesión</a></li>
</ul>
</div>`;

document.getElementById("UsuarioActualLogin").innerHTML = agregarHtmldeUser; 
});

document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("UsuarioActualLogin") 
  var register = sessionStorage.getItem("NameTheRegisterID"); 
let agregarHtmldeUser = "";
agregarHtmldeUser =
`<div class="navUser">
<a class="py-2 d-none d-md-inline-block" href="#" id="UsuarioActualLogin">` + register + `</a>
<ul>
  <li><a class="py-2 d-none d-md-inline-block" href="cart.html">Mi carrito</a></li>
  <li><a class="py-2 d-none d-md-inline-block" href="Mi_perfil.html">Mi perfil</a></li>
  <li><a class="py-2 d-none d-md-inline-block" href="index.html">Cerrar sesión</a></li>
</ul>
</div>`;

document.getElementById("UsuarioActualLogin").innerHTML = agregarHtmldeUser; 

});

//CARRUSEL DE IMAGENES EN PRODUCT-INFO.HTML entrega 4

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