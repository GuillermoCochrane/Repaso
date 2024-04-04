window.addEventListener('load', function(){
  let mensajeOculto = document.querySelector('h1')
  let miForm = document.querySelector('#miForm')
      miForm.addEventListener('submit', function(e){
        e.preventDefault()
        miForm.style.display  = 'none'
        mensajeOculto.style.display ='block'
      })
    })