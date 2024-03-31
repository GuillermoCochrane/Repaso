window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    
    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    titulo.addEventListener("mouseover", ()=>{
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        titulo.style.color = rndCol
    })
}