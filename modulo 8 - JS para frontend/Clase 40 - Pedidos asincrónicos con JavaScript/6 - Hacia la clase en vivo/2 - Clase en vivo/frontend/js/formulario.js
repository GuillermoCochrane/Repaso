window.onload = () => {
    let $id = document.querySelector("#id")
    let $title = document.querySelector("#title");
    let $rating = document.querySelector("#rating");
    let $awards = document.querySelector("#awards");
    let $release_date = document.querySelector("#release_date")
    let $length = document.querySelector("#length")
    let $movie = document.querySelector("#movie");
    let $form = document.querySelector("#formulario");
    let $edit = document.querySelector("#edit");
    let $new = document.querySelector("#new");
    let $delete = document.querySelector("#delete");
    
    
    let formdata = { };

    const getData = (method) => {
        formdata.title = $title.value;
        formdata.rating = $rating.value;
        formdata.awards = $awards.value;
        formdata.release_date = $release_date.value;
        formdata.length = $length.value;
        let settings = {
            method: method,
            body: JSON.stringify(formdata),
            headers: {
                "Content-Type": "application/json",
            },
        }
        return settings
    }

    fetch("http://localhost:3031/api/movies/")
    .then(function(response){
    return response.json();
    })
    .then((data)=>{
        let allmovies = data.data
        for (const movie of allmovies) {
            $movie.innerHTML += `<option value="${movie.id}"> ${movie.title} </option>`
        }
    })

    $movie.addEventListener("change",()=>{
        let movieID = $movie.value;
        fetch(`http://localhost:3031/api/movies/${movieID}`)
        .then(function(response){
        return response.json();
        })
        .then((data)=>{
            let info = data.data;
            const fechaString = info.release_date
            const fecha = new Date(fechaString);
            $id.value = info.id;
            $title.value = info.title;
            $rating.value= info.rating;
            $awards.value = info.awards;
            $release_date.value =  fecha.toISOString().slice(0, 10);
            $length.value = info.length;
        })
    })
    
    $new.addEventListener("click", (e)=>{
        e.preventDefault();
        let settings = getData("POST");

        fetch("http://localhost:3031/api/movies/create", settings)
        .then(function(response){
            return response.json();
        })
        .then((info)=>{
            if(info.meta.status){
                alert("Pelicula Guardada exitosamente")
                window.location.reload()
            } else {
                alert("Ocurrió un error")
            }
        }).catch(function(e){
            console.log(e);
        })

    })


    $edit.addEventListener("click",(e)=>{
        e.preventDefault();
        let settings = getData("PUT");
        let movieID = $id.value
        fetch(`http://localhost:3031/api/movies/update/${movieID}`, settings)
        .then(function(response){
            return response.json();
        })
        .then((info)=>{
            if(info.meta.status){
                alert("Pelicula editada exitosamente")
                window.location.reload()
            } else {
                alert("Ocurrió un error")
            }
        }).catch(function(e){
            console.log(e);
        })
    })

    $delete.addEventListener("click",(e)=>{
        e.preventDefault();
        let settings = getData("DELETE");
        let movieID = $id.value
        fetch(`http://localhost:3031/api/movies/delete/${movieID}`, settings)
        .then(function(response){
            return response.json();
        })
        .then((info)=>{
            if(info.meta.status){
                alert("Pelicula eliminada exitosamente")
                window.location.reload()
            } else {
                alert("Ocurrió un error")
            }
        }).catch(function(e){
            console.log(e);
        })
    })

    /* $new.addEventListener("click", ()=>{
        $form.setAttribute("method", "post");
        $form.setAttribute("action","http://localhost:3031/api/movies/create")
        let url = window.location.href;
        //guarda pero no se volver
        }) */
}