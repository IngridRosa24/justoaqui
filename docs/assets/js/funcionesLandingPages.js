var NombreDeUsuario= "IngridRosa24"
var NombreDeContacto= "Ingrid Hernández"
var TelefonoDeContacto= "+56 9 6344 0332"
var CorreoElectronico= "sur.silicon.cl@gmail.com"
var Instagram= "@sursilicon"
var Direccion= "San Juaquin 2008"



$(document).ready(function(){
var etiquetaUsuario = document.getElementById("usuario");
etiquetaUsuario.innerHTML= NombreDeUsuario;

var etiquetaNombre = document.getElementById("nombre");
etiquetaNombre.innerHTML= NombreDeContacto;

var etiquetaTelefono = document.getElementById("telefono");
etiquetaTelefono.innerHTML= TelefonoDeContacto;

var etiquetaCorreo = document.getElementById("correo");
etiquetaCorreo.innerHTML= CorreoElectronico;

var etiquetaDireccion = document.getElementById("direccion");
etiquetaDireccion.innerHTML= Direccion;



})

function iniciarMap(){
    var coord = {lat:-29.9209942, lng:-71.2437871};
    console.log(document.getElementById("map"))
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom : 15,
        center: coord
    })
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
        alpha:0.5
    });
}