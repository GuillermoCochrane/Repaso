window.addEventListener('load', function() {
  let formulario = document.querySelector('form')
  formulario.addEventListener('submit',function(evento){
    evento.preventDefault()
    alert("Cancelaste el envio del formulario")
  })
});
