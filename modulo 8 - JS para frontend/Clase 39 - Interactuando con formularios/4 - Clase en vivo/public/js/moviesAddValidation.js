window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let $title = document.querySelector("#title");
    let $rating = document.querySelector("#rating");
    let $awards = document.querySelector("#awards");
    let $date = document.querySelector("#release_date");
    let $lenght = document.querySelector("#length");
    let $genre = document.querySelector("#genre_id");
    let $te = document.querySelector("#title-error");
    let $re = document.querySelector("#rating-error");
    let $ae = document.querySelector("#awards-error");
    let $rde = document.querySelector("#release_date-error");
    let $le = document.querySelector("#length-error");
    let $ge = document.querySelector("#genre_id-error");

    let errors = {
        title: [],
        rating: [],
        awards: [],
        release_date: [],
        length: [],
        genre_id: [],
    };
    let e1 = [];

    $title.focus()

    function notEmpty(key,message){
        let condition = document.querySelector(`#${key}`);
        let errorID = document.querySelector(`#${key}-error`);
        let msg = ""
        if(!(condition.value)){
            msg = "Debes ingresar " + message
            condition.classList.add("is-invalid");
            errorID.innerHTML = msg;
        } else {
            condition.classList.remove("is-invalid")
            condition.classList.add("is-valid")
            errorID.innerHTML = "";
            msg = ""
        }
        return msg
    }

    function rate(key,message, min, max){
        let condition = document.querySelector(`#${key}`);
        let errorID = document.querySelector(`#${key}-error`);
        let data = notEmpty(key,message);
        if (!data){
            console.log(condition.value);
            if(condition.value  && (condition.value > max || condition.value < min) ){
                console.log("entro");
                msg = `El valor ingresado debe estar comprendido entre ${min} y ${max} ` ;
                condition.classList.remove("is-valid")
                condition.classList.add("is-invalid");
                errorID.innerHTML = msg;
            } else {
                condition.classList.remove("is-invalid")
                condition.classList.add("is-valid")
                errorID.innerHTML = "";
                msg = ""
            }
            return msg
        }
    }

    function errorsNotEmpty (key, msg, type, min, max){
        let e = notEmpty(key, msg);
        e1.push(e);
        errors[key] = msg;
        if (type == "rate"){
            let e =  rate(key, msg, min, max);
            e1.push(e);
            errors[key] = msg;
        }
    }

    $title.addEventListener("blur", ()=>{
        errorsNotEmpty("title", "un título");
    })
    $rating.addEventListener("blur", ()=>{
        errorsNotEmpty("rating","una calificación","rate", 0, 10);
    })
    $awards.addEventListener("blur", ()=>{
        errorsNotEmpty("awards","la cantidad de premios","rate", 0, 10);
    })
    $date.addEventListener("blur", ()=>{
        errorsNotEmpty("release_date","la fecha de creación")
    })
    $lenght.addEventListener("blur", ()=>{
        errorsNotEmpty("length","la duración","rate", 60, 360);
    })
    $genre.addEventListener("blur", ()=>{
        errorsNotEmpty("genre_id", "un genero");
    })


    formulario.addEventListener("submit", (e)=>{
        errorsNotEmpty("title", "un título");
        errorsNotEmpty("rating","una calificación","rate");
        errorsNotEmpty("awards","la cantidad de premios","rate");
        errorsNotEmpty("release_date","la fecha de creación");
        errorsNotEmpty("length","la duarción","duration");
        errorsNotEmpty("genre_id", "un genero");
        e1.length > 0 ? e.preventDefault()  :  null;
    })
}