window.addEventListener('load', function() {

  let links = document.querySelectorAll('a')

  for(let link of links) {
    link.addEventListener('mouseout',function(){
      this.classList.toggle('dark-mode')
    })
  }
});
