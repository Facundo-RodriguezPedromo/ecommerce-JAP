// Variables globales
const formularioNuevo = document.querySelector('#formularioPerfil');
const listaDatosNuevos = document.getElementById('DatosNuevosDeUsuario');
let arrayDeDatos = [];

  var nombreApellidoMiperfil = document.getElementById('Nombre');
  var correoElectronicoMiperfil = document.getElementById('E-mail');
  var edadMiperfil = document.getElementById('Edad');
  var telefonoContactoMiperfil = document.getElementById('Telefono');

  document.getElementById("actualizarDatos").addEventListener("click", function (ActualizarDatos){
    
  console.log('anda el clicker ers');
  
  nombreApellidoMiperfil.disabled = false;
  correoElectronicoMiperfil.disabled = false;
  edadMiperfil.disabled = false;
  telefonoContactoMiperfil.disabled = false;   
  

  let botonGuardar = ''
  botonGuardar += `<button type="submit" class="btn btn-primary">Guardar datos</button> <br>
  <br>`
document.getElementById('recibeBotonGuardar').innerHTML = botonGuardar

});

// Funciones
const CrearDato = (datoNuevo) => {
  let item = {
    datoNuevo: datoNuevo,
    
  }
  //agregamos nuevos valores a la lista de datos
  arrayDeDatos.push(item);
  return item;
}
//AQUI EL OBJETO JS SE TRANSFORMA EN CADENA DE TEXTO JSON
const GuardarDatosDelUsuario = () => {
  localStorage.setItem('actualizar', JSON.stringify(arrayDeDatos));
  DibujarEnHTML();
}

const DibujarEnHTML = () => {
    listaDatosNuevos.innerHTML = '';
    // ACA ANALIZAMOS LOS DATOS JSON QUE CREAMOS ANTES Y CON LA LLAVE ACTUALIZAR LOS MOSTRAMOS
    arrayDeDatos = JSON.parse(localStorage.getItem('actualizar'));
  
  if(arrayDeDatos === null){
    arrayDeDatos = [];
  }else{
// HACEMOS UN RECORRIDO POR CADA ELEMENTO DEL ARRAY Y PLASMAMOS EL HTML EN LISTA
    arrayDeDatos.forEach(element => {

        listaDatosNuevos.innerHTML += `
        <ul>${element.datoNuevo}</ul>`
     
    });

  }
}

// LA FUNCION CREAR DATO RECIBE EL VALUE DE LOS IMPUT
formularioNuevo.addEventListener('submit', (e) => {

  e.preventDefault();
  let nombreNuevo = document.querySelector('#Nombre').value;
  let edadNueva = document.querySelector('#Edad').value;
  let emailNuevo = document.querySelector('#E-mail').value;
  let telefonoNuevo = document.querySelector('#Telefono').value;

  CrearDato(nombreNuevo);
  CrearDato(edadNueva);
  CrearDato(emailNuevo);
  CrearDato(telefonoNuevo);
  GuardarDatosDelUsuario();

  formularioNuevo.reset();

});

document.addEventListener('DOMContentLoaded', DibujarEnHTML);

listaDatosNuevos.addEventListener('click', (e) => {

  e.preventDefault();

});





  /*

    document.getElementById("actualizarDatos").addEventListener("click", function (ActualizarDatos){
      console.log('anda el clicker ers');
      
      
      nombreApellidoMiperfil.disabled = false;
      correoElectronicoMiperfil.disabled = false;
      edadMiperfil.disabled = false;
      telefonoContactoMiperfil.disabled = false;   

      let botonGuardar = ''
      botonGuardar += `<a id="botonGuardarDatosUsuario"
      style = "background-color:#082E76 "
      type="button"
      class="btn btn-outline-info btn btn-secondary btn-lg"
      href="javascript:"
      >Guardar datos
   </a>`
   document.getElementById('recibeBotonGuardar').innerHTML = botonGuardar

//CLICK EN GUARDAR DATOS
   document.getElementById("botonGuardarDatosUsuario").addEventListener("click", function (guardarDatos) {

     guardarDatos.preventDefault();  

      nombreApellidoMiperfil.disabled = true;
      correoElectronicoMiperfil.disabled = true;
      edadMiperfil.disabled = true;
      telefonoContactoMiperfil.disabled = true; 

    let evaluaNombre = document.getElementById('nombreApellidoMiperfil').value;


   let datosNuevosUsuario = '' 
   evaluaNombre = JSON.parse(localStorage.getItem('nombreApellidoMiperfil')); 
   console.log(evaluaNombre)
   datosNuevosUsuario +=`<ul id="datosDePerfil" class="datosUsuario">
  <li> 
    <h5 id="nombreH5">${evaluaNombre}</h5>
    <input id="nombreApellidoMiperfil" href=""   disabled required>
  </li>
  <li>
    <h5>Correo electronico</h5>
    <input id="correoElectronicoMiperfil" href="" disabled required>
  </li>
  <li>
    <h5>Edad</h5>
    <input id="edadMiperfil" href="" disabled required>
  </li>
  <li>
    <h5>Telefono</h5>
    <input id="telefonoContactoMiperfil" href="" disabled required>
  </li>
</ul>
</form>`
document.getElementById("datosDePerfil").innerHTML = datosNuevosUsuario

localStorage.setItem('nombreApellidoMiperfil', JSON.stringify(evaluaNombre) );
  
});//LAVES GUARDAR DATOS

  
  
  });// LLAVES ACTUALIZAR DATOS */
  
    









//habilitar el boton guardar cuando estan renovando los datos
//let input = document.querySelector(".input");
//let button = document.querySelector(".button");
//button.disabled = true;
//input.addEventListener("change", stateHandle);
//function stateHandle() {
 // if (document.querySelector(".input").value === "") {
  //  button.disabled = true; 
  //} else {
   // button.disabled = false;
 // }
//}

