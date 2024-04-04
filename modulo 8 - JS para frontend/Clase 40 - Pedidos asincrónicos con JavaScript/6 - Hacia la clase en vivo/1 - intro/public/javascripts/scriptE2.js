window.addEventListener('load', function() {
  let greetings = document.querySelector("#greetings");
  let save = document.querySelector("#save");
  let del = document.querySelector("#delete");

  let user = localStorage.getItem("user")

  if (user){
    save.setAttribute("hidden","")
    del.removeAttribute("hidden","")
    let userInfo = JSON.parse(user);
    greetings.innerText = "Hola " + userInfo.user;
    del.addEventListener("click", () =>{
      this.localStorage.clear("user");
      window.location.reload();
    })
  } else {
    greetings.innerText = "Hola visitante";
    save.removeAttribute("hidden", "");
    del.setAttribute("hidden", "")
    save.addEventListener("click", ()=>{
      let data = prompt("Ingrese su nombre");
      let userInfo = {}
      userInfo.user = data;
      let userData = JSON.stringify(userInfo);
      localStorage.setItem("user",userData)
      window.location.reload()
    })
  }

});
