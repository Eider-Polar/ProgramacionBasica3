function pelea  (jugador,pc){
    if (pc == jugador ){
      alert ("empate ")
      pc=pc+"a"
      document.getElementById(pc).classList.add("borderColorE");
    }
    else if(jugador==1 && pc==3) 
    {
     alert("Perdiste  ")
     pc=pc+"a"
      document.getElementById(pc).classList.add("borderColorP");
    }
    else if  (jugador==2 && pc==1){
      alert("perdiste")
      pc=pc+"a"
      
      document.getElementById(pc).classList.add("borderColorP");
    }else if (jugador==3 && pc==2 ){
        alert("perdiste")
        pc=pc+"a"
        document.getElementById(pc).classList.add("borderColorP");
    }else{
        alert("ganaste")
        pc=pc+"a"
        document.getElementById(pc).classList.add("borderColorG")
    }


}
function aleatorio(){
    let min=1
    let max=3
    pc=Math.floor(Math.random()*(max-min+1)+min);
    return pc 
}



 

document.getElementById("1").onclick = function(){
    document.getElementById("1a").classList.add("borderColor");
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
let a=0
document.getElementById("conta").onclick= function(){
    a=a+1000
    document.getElementById("conta").innerHTML=a;
}