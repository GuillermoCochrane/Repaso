window.addEventListener('load', function() {
  let id = localStorage.getItem('id')
  let idValue = document.querySelector("#idValue");
  idValue.innerHTML = id;
});
