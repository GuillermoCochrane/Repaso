window.addEventListener('load', function() {
  let joke = document.querySelector("#joke")
  fetch("https://api.chucknorris.io/jokes/random")
  .then(function(response){
  return response.json();
  })
  .then(function(data){
  console.log(data);
  joke.innerHTML = data.value;
  })
  .catch(function(error){
  console.error(error);
  })
});
