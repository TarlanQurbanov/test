


document.getElementById("artir").addEventListener("click",function(){
      var div=document.createElement('div');
      div.className='Divs';

      document.body.appendChild(div);
})
  

  document.getElementById("azalt").addEventListener("click",function(){
      var nodeList=document.querySelectorAll(".Divs");
      
      var choosen=nodeList[nodeList.length-1];

      choosen.remove();
  })

    


