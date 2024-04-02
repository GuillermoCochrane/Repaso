window.addEventListener('load', function(){
  let elNombre = document.querySelector('#nombre');
  elNombre.addEventListener('focus', ()=>{
      elNombre.style.backgroundColor = 'pink'
    })
  })