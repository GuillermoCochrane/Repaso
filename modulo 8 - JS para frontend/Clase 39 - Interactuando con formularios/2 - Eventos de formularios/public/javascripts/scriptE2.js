window.addEventListener('load', function(){
  let elUsuario = document.querySelector('#user')
  elUsuario.addEventListener('blur', function(){
      elUsuario.style.backgroundColor = 'plum'
  })
})