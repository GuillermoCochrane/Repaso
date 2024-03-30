window.addEventListener('load', function(){
  const specialAnchor = document.querySelector("a");
  specialAnchor.addEventListener('click', (event) => {
      event.preventDefault();
      specialAnchor.style.color = 'red' 
      specialAnchor.innerText ='este enlace no te llevará a ningún lado'       
  })
})