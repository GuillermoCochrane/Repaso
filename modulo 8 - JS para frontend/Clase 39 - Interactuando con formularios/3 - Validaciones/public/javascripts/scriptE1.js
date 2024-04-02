window.addEventListener('load', function() {
  let formulario = document.querySelector('form')
  let h3 = document.querySelector("h3")
  formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    h3.innerHTML = "Formulario Enviado"
  })
});
