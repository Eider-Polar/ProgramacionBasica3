function pelea  (jugador,pc){
    alert(pc)
    if (pc == jugador ){
      alert ("empate ")
  
    }
    else if(jugador==1 && pc==3) 
    {
     alert("Perdiste  ")
    
    }
    else if  (jugador==2 && pc==1){
      alert("perdiste")
    }else{
        alert("Ganaste")
    }

}
function aleatorio(){
    let min=1
    let max=3
    pc=Math.floor(Math.random()*(max-min+1)+min);
    return pc 
}



document.getElementById("1").onclick = function(){
    aleatorio();
    pelea(1,pc);

}
document.getElementById("2").onclick = function(){
    aleatorio();
    pelea(2,pc);
}
document.getElementById("3").onclick = function(){
    aleatorio();
    pelea(3,pc);



}

