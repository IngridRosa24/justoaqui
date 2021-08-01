var NombrePyme= "Piensadulce"




$(document).ready(function(){
    var etiquetaPyme = document.getElementById("pyme");
    etiquetaPyme.innerHTML= NombrePyme;

    $('#btnProducto').on("click",function(){
        $('#miModal1').modal("show");
    });

    
//Programar el botón
    $("#btnGuardar").on("click", function(){
        alert("Se ha registrado correctamente!!!");
        setTimeout(function(){
            location.reload();
        },1000);
    });
    $("#btnIngresar").on("click", function(){
        alert("Bienvenido!!!");
        setTimeout(function(){
            location.reload();
        },1000);
    
});


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