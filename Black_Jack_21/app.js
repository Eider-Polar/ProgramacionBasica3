document.getElementById("Ncarta").onclick = function(){
  var newDiv =document.createElement("div");
  var newContent=document.createTextNode("esto es una prueba");
  newDiv.appendChild(newContent);

  var currentDiv=document.getElementsByClassName("contenedor")
    document.body.insertBefore(newDiv,currentDiv)
    
}