window.addEventListener('load', function(){
  let direccion = document.querySelector("#address")
  direccion.addEventListener('keypress', function(event){
      alert("Se presionó la tecla: "+ event.key);
  })
})
