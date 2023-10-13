import  {CartaC,CartaD} from './CartasR.js';
import {cartaP,cartaT} from './CartasN.js';
var divPadre=document.getElementById("OC")


document.getElementById("OtraCarta").onclick = function(){
    CartaC();
    CartaD();
    cartaP();
    cartaT();
}