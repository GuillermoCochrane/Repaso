window.addEventListener('load', function(){
  let body = document.querySelector('body');
  let miInput = document.querySelector('#miInput');
  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  miInput.addEventListener('input', function(){ 
  //el ejercicio pide change, pero se activa cuando cambia y salimos del formulario
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    body.style.backgroundColor = rndCol;
  })
})
  