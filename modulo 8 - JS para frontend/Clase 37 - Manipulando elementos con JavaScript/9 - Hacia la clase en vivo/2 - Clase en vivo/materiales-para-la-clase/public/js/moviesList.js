const $body = document.querySelector("body");
const $h1 = document.querySelector("h1");

let dark = confirm("¿Desea modo oscuro?") // cambie prompt x confirm
if (dark){
    $body.classList.add("fondoMoviesList");
    $body.style.backgroundColor = "#7f7f7f​";
}

$h1.innerText += "LISTADO DE PELÍCULAS";
$h1.style.color = "white";
$h1.style.backgroundColor = "teal";
$h1.style.padding = "20px";