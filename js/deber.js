var boton=document.getElementById("boton1");
boton.addEventListener("click", saludar); //

function saludar(evento){
  var nombre=document.getElementById("nombre").value;
  alert("Hola " + nombre);
}
