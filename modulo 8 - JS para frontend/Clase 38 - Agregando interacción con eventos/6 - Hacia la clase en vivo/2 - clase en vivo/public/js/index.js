window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    let img = document.querySelector("img");
    let menu = document.querySelector("#menu")
    
    let nombre = prompt('Ingrese su nombre');

    if(nombre){
        nombre = " " + nombre
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += ' INVITADO';
    }

    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }

    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    container.style.display = 'block';

    img.addEventListener("click", ()=>{
        menu.classList.toggle("menu")
    })

    menu.addEventListener("mouseleave", ()=>{
        menu.classList.remove("menu")
    })
}