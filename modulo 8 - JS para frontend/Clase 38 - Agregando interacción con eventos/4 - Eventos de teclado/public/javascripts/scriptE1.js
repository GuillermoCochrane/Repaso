window.addEventListener('load', function() {
  let userName = document.querySelector('#userName')
  userName.addEventListener('keydown', function(event){
      if(event.key=='#'){
          alert('Está prohibido el uso de #hashtags!')          
      }
    })
  }
);