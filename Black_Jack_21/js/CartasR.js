function CartaC(){ 
    
    var div = document.createElement('div');
    div.id = 'carta';
    div.className = 'carta';
  /**imagen del centro  */
    var img= document.createElement('img');
    img.className='img'
    img.src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png";
  /*** imagen de abajo*/
    var img2= document.createElement('img');
    img2.className='img2';
    img2.src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png";
  /*** imagen de arriba*/
    var img3= document.createElement('img');
    img3.className='img1';
    img3.src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png";
  /**letra arriba */
    var span=document.createElement('span');
    var tx =document.createTextNode("A")
    span.className="spanR1"
    span.appendChild(tx);
  /**letra abajo */
    var span2=document.createElement('span');
    span2.className="spanR2"
    var tx =document.createTextNode("A")
    span2.appendChild(tx);
  
    div.appendChild(img);
    div.appendChild(img2);
    div.appendChild(span);
    div.appendChild(span2);
    div.appendChild(img3);
    document.body.appendChild(div);
  }
  function CartaD(){ 
    
    var div = document.createElement('div');
    div.id = 'carta';
    div.className = 'carta';
  /**imagen del centro  */
    var img= document.createElement('img');
    img.className='img'
    img.src="https://img.icons8.com/material/48/diamonds.png";
  /*** imagen de abajo*/
    var img2= document.createElement('img');
    img2.className='img2';
    img2.src="https://img.icons8.com/material/48/diamonds.png";
  /*** imagen de arriba*/
    var img3= document.createElement('img');
    img3.className='img1';
    img3.src="https://img.icons8.com/material/48/diamonds.png";
  /**letra arriba */
    var span=document.createElement('span');
    var tx =document.createTextNode("A")
    span.className="spanR1"
    span.appendChild(tx);
  /**letra abajo */
    var span2=document.createElement('span');
    span2.className="spanR2"
    var tx =document.createTextNode("A")
    span2.appendChild(tx);
  
    div.appendChild(img);
    div.appendChild(img2);
    div.appendChild(span);
    div.appendChild(span2);
    div.appendChild(img3);
    document.body.appendChild(div);
  }
  export {CartaD,CartaC
  }