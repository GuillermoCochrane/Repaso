let c = confirm("¿Desea corregir el error?")
if(c){
    const listItems = document.querySelectorAll("#cont01 li");

    for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].classList.contains('alert-danger')) {
        listItems[i].classList.remove('alert-danger');
        listItems[i].classList.add('alert-success');
    }}

}