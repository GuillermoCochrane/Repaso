const $body = document.querySelector("body");
const $h1 = document.querySelector("h1");
const $article = document.querySelectorAll("article");
const $buttonBox = document.querySelector("#buttonbox");
const $figure = document.querySelector("figure");

$figure.style.backgroundColor = "rgba(189,199,191,0.3)";
$h1.classList.add("titulo");
$h1.style.color = "#ebebeb"
$body.classList.add("fondoCRUD");
for (const art of $article) {
    art.classList.add("fondoTransparente");
}

$buttonBox.style.backgroundColor = "transparent";
$buttonBox.style.width = "50%"
$buttonBox.style.display = "flex";
$buttonBox.style.justifyContent = "space-evenly";