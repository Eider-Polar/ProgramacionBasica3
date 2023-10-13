function cartaP(){ 

    var div = document.createElement('div');
    div.id = 'carta';
    div.className = 'carta';
  
    var img= document.createElement('img');
    img.className='img'
    img.src="https://img.icons8.com/material/48/clubs.png";
  
    var img2= document.createElement('img');
    img2.className='img1';
    img2.src="https://img.icons8.com/material/48/clubs.png";
  
    var img3= document.createElement('img');
    img3.className='img2';
    img3.src="https://img.icons8.com/material/48/clubs.png";
  
    var span=document.createElement('span');
    var tx =document.createTextNode("A")
    span.className="spanN1"
    span.appendChild(tx);
  
    var span2=document.createElement('span');
    span2.className="spanN2"
    var tx =document.createTextNode("A")
    span2.appendChild(tx);
  
    div.appendChild(img);
    div.appendChild(img2);
    div.appendChild(span);
    div.appendChild(span2);
    div.appendChild(img3);
    document.body.appendChild(div);
  }

function cartaT(){ 

    var div = document.createElement('div');
    div.id = 'carta';
    div.className = 'carta';
  
    var img= document.createElement('img');
    img.className='img'
    img.src="https://img.icons8.com/material/48/spades.png";
  
    var img2= document.createElement('img');
    img2.className='img1';
    img2.src="https://img.icons8.com/material/48/spades.png";
  
    var img3= document.createElement('img');
    img3.className='img2';
    img3.src="https://img.icons8.com/material/48/spades.png";
  
    var span=document.createElement('span');
    var tx =document.createTextNode("A")
    span.className="spanN1"
    span.appendChild(tx);
  
    var span2=document.createElement('span');
    span2.className="spanN2"
    var tx =document.createTextNode("A")
    span2.appendChild(tx);
  
    div.appendChild(img);
    div.appendChild(img2);
    div.appendChild(span);
    div.appendChild(span2);
    div.appendChild(img3);
    document.body.appendChild(div);
  }

export {cartaP,cartaT}