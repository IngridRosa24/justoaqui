var NombreDeUsuario= "IngridRosa24"
var NombreDeContacto= "Ingrid Hernández"
var TelefonoDeContacto= "+56 9 6344 0332"
var CorreoElectronico= "sur.silicon.cl@gmail.com"
var Instagram= "@sursilicon"



$(document).ready(function(){
var etiquetaUsuario = document.getElementById("usuario");
etiquetaUsuario.innerHTML= NombreDeUsuario;

var etiquetaNombre = document.getElementById("nombre");
etiquetaNombre.innerHTML= NombreDeContacto;

var etiquetaTelefono = document.getElementById("telefono");
etiquetaTelefono.innerHTML= TelefonoDeContacto;

var etiquetaCorreo = document.getElementById("correo");
etiquetaCorreo.innerHTML= CorreoElectronico;



})

function iniciarMap(){
    var coord = {lat:-29.9209942, lng:-71.2437871};
    console.log(document.getElementById("map"))
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom : 15,
        center: coord
    })
}