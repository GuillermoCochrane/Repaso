window.addEventListener("keypress", function(e) {
  let key = e.key;
  const body = document.querySelector('body');
 
  if (key != 'x') {
     body.style.backgroundColor = "white";
  }
 
  if (key == 'x') {
     body.style.backgroundColor = "orange";
     alert("Te dije que no nos gusta la letra 'x'")
  }
})
