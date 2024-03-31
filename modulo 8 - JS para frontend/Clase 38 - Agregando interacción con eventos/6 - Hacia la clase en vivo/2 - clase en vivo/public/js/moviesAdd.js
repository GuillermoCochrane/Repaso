window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let $title = document.querySelector("#titulo")

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

    let status = 0
    //let frase = "" (para buscador)

    console.log($title);
    $title.addEventListener("keyup",(e)=>{
        let key = (e.key).toUpperCase();;
        //frase += key (para buscador)
        if(key == "S"){
            status = 1;
        } else if(key == "E" && status == 1){
            status = 2;
        } else if(key == "C" && status == 2){
            status = 3;
        } else if(key == "R" && status == 3){
            status = 4;
        } else if (key == "E" && status == 4){
            status = 5;
        } else if (key == "T" && status == 5){
            alert("SECRETO MAGICO")
        } else {
            status = 0
        }
    })
}
