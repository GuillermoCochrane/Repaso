window.addEventListener('load', function() {
  let user = this.prompt("Ingrese su nombre");
  if(user){
    localStorage.setItem("user",user)
  }
  let visitorName = localStorage.getItem('user')
  let greetings = document.querySelector("#greetings");
  if(visitorName) {
    greetings.innerText = "Hola " + visitorName;
  } else {
    greetings.innerText = "Hola visitante" ;
  } 
});
