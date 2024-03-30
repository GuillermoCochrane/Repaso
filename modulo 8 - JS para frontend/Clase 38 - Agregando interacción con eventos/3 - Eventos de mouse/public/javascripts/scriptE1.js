window.addEventListener('load', function() {
  let titulo = document.querySelector('h1');
  titulo.addEventListener('mouseover',function(){
    titulo.classList.toggle('titulo')
  })
});
