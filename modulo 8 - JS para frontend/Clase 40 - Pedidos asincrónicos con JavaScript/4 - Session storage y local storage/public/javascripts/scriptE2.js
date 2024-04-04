window.addEventListener('load', function() {
  let body = this.document.querySelector("body");
  sessionStorage.setItem('bgColor', 'red');
  sessionStorage.removeItem('font');
  let a = confirm("¡desea cambiar el color de fondo?");
  if(a){
    body.style.background = sessionStorage.getItem("bgColor")
  }  
});