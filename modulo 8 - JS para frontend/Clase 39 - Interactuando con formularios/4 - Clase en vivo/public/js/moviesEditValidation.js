window.addEventListener("load", ()=>{
        let formulario = document.querySelector('#formulario');
        let $title = document.querySelector("#title");
        let $rating = document.querySelector("#rating");
        let $awards = document.querySelector("#awards");
        let $date = document.querySelector("#release_date");
        let $lenght = document.querySelector("#length");
        let $genre = document.querySelector("#genre_id");
        $title.focus()

        let errors = {
            title: "",
            rating: "",
            awards: "",
            release_date: "",
            length: "",
            genre_id: "",
        };
        let e1 = [];
    
    
        function errorsValidations(key,message,min, max){
            let condition = document.querySelector(`#${key}`);
            let errorID = document.querySelector(`#${key}-error`);
            let msg = ""
            if(!(condition.value)){
                msg = "Debes ingresar " + message
                condition.classList.add("is-invalid");
                errorID.innerHTML = msg;
            } else {
                if(condition.value  && (condition.value > max || condition.value < min) ){
                    console.log(condition.value);
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
            }
            return msg
        }
    
        function errorsNotEmpty (key, msg,  min, max){
            let e = errorsValidations(key, msg, min, max);
            e1.push(e);
            errors[key] = msg;
        }
    
        $title.addEventListener("blur", ()=>{
            errorsNotEmpty("title", "un título");
        })
        $rating.addEventListener("blur", ()=>{
            errorsNotEmpty("rating","una calificación", 0, 10);
        })
        $awards.addEventListener("blur", ()=>{
            errorsNotEmpty("awards","la cantidad de premios", 0, 10);
        })
        $date.addEventListener("blur", ()=>{
            errorsNotEmpty("release_date","la fecha de creación")
        })
        $lenght.addEventListener("blur", ()=>{
            errorsNotEmpty("length","la duración", 60, 360);
        })
        $genre.addEventListener("blur", ()=>{
            errorsNotEmpty("genre_id", "un genero");
        })
    
        formulario.addEventListener("submit", (e)=>{
            errorsNotEmpty("title", "un título");
            errorsNotEmpty("rating","una calificación", 0, 10);
            errorsNotEmpty("awards","la cantidad de premios", 0, 10);
            errorsNotEmpty("release_date","la fecha de creación");
            errorsNotEmpty("length","la duarción", 60, 360);
            errorsNotEmpty("genre_id", "un genero");
            e1.length > 0 ? e.preventDefault()  :  alert("La película se guardó satisfactoriamente");
        }) 
    
})
