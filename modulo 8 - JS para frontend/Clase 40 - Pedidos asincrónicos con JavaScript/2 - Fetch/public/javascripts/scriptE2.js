window.addEventListener('load', function() {
  let formulario = document.querySelector('form');
  let name = document.querySelector("#name");
  let pass = this.document.querySelector("#pass")
  let password = document.querySelector('#password')
  let nombre = document.querySelector('#nombre')
  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    if (nombre.value == ""){
      name.style.color = "crimson"
      name.innerHTML = 'Hubo un error en el nombre'
    }

    if (password.value.length < 4){
      pass.style.color = "crimson"
      pass.innerHTML= 'Hubo un error en el password'
    }
  })
});