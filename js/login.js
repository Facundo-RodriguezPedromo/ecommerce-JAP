/* ENTREGA 1 FUNCION Y MOVIMIENTOS DE LOGIN Y REGISTER */

//* USER AND REGISTRATION FORMS SENT TO E-COMMERCE *//

/* FORMS VALIDATION */

//* Validacion De Usuario e-commerce *//       
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("UserFormID").addEventListener('submit', validarFormularioDeUsuario);
});

function validarFormularioDeUsuario(evento) {
  evento.preventDefault();

  var usuario = document.getElementById('UserEmailID').value;
  var clave = document.getElementById('UserPasswordID').value;
  if (usuario.length == 0 || clave.length == 0) {
    swal('Los datos Correo Electronico y Contraseña son obligatorios', '', 'error');

  }
  if (usuario.length >= 1 && clave.length >= 1) {
    sessionStorage.setItem("UserEmailID", usuario)

    window.location.href = "./inicio.html";

  }
}

//* Validacion De Usuario Que Se Registra *//
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("RegistrationFormID").addEventListener('submit', validarFormularioDeRegistro);
});

function validarFormularioDeRegistro(evento) {
  evento.preventDefault();

  var usuarioRegister = document.getElementById('NameTheRegisterID').value;
  var usuarioMailRegister = document.getElementById('MailTheRegisterID').value;
  var usuarioNameRegister = document.getElementById('NameTheRegisterID').value;
  var clavePasswordRegister = document.getElementById('PasswordTheRegisterID').value;
  if (usuarioRegister.length == 0 || usuarioMailRegister.length == 0 ||
    usuarioNameRegister.length == 0 || clavePasswordRegister.length == 0) {
    swal('Debe completar todos los datos', '', 'error');
  }
  if (usuarioRegister.length >= 1 && usuarioMailRegister.length >= 1 && usuarioNameRegister.length >= 1
    && clavePasswordRegister.length >= 1) {
    return window.location.href = "./inicio.html";
  }
}

/** MOVIMIENTO DE CAJAS / LOGIN Y REGISTER **/

var FormLogin = document.querySelector(".ClassFormLogin");
var FormRegister = document.querySelector(".ClassFormRegister");
var ContainerLoginRegister = document.querySelector(".ClassContainerLoginRegister");
var LoginBackBox = document.querySelector(".ClassLoginBackBox");
var RegisterBackBox = document.querySelector(".ClassRegisterBackBox");

function Registration() {
  FormRegister.style.display = "block";
  ContainerLoginRegister.style.left = "410px";
  FormLogin.style.display = "none";
  RegisterBackBox.style.opacity = "0";
  LoginBackBox.style.opacity = "1";
}


function Login() {
  FormLogin.style.display = "block";
  ContainerLoginRegister.style.left = "10px";
  FormRegister.style.display = "none";
  RegisterBackBox.style.opacity = "1";
  LoginBackBox.style.opacity = "0";
}



document.getElementById("btn__iniciar-sesion").addEventListener("click", Login);
document.getElementById("btn__registrarse").addEventListener("click", Registration);


/** nombre de usuario en la barra */

sessionStorage.setItem("UserEmailID", Usuario)
/** login with google */
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();

  console.log('Id Profile: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  console.log('Id Token ' + googleUser.getAuthResponse().id_token);
  window.location.href = "./inicio.html";
}

/** FONDO ANIMADO PENDIENTE */


/** ESTO VINO CON LA PROPUESTA LO DEJO APARTE **/

/**Función que se ejecuta una vez que se haya lanzado el evento de
que el documento se encuentra cargado, es decir, se encuentran todos los
elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});**/