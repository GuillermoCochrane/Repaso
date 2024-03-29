const $main = document.querySelector("main");
const $h2 = document.querySelector("h2");
const $a = document.querySelectorAll("a");
const $p = document.querySelectorAll("p");
let askName = prompt("Ingrese su nombre")

askName ? $h2.innerText += askName : $h2.innerText +="Invitado";
$h2.style.textTransform.toUpperCase;

for (const a of $a) {
    a.style.color = "#E51B3E";
}

let background = confirm("¿Desea colocar un fondo de pantalla?");
background ? document.querySelector("body").classList.add("fondo") : null;

let i = 1
for (const p of $p) {
    i%2 != 0 ? p.classList.add("descatadoPar") : p.classList.add("destacadoImpar");
    i = i+1
}

$main.style.display = "block";
