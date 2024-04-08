window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  let favoritas = JSON.parse(localStorage.getItem("fav")) || [];
  let counter = 0;
  fetch("http://localhost:3031/api/movies")
  .then(function(r){
    return r.json();
  })
  .then(function(i){
    let data = i.data;
    let foundFavorites = false;
    data.forEach((movie) => {
      for (const fav of favoritas) {
        if( fav.id == movie.id && fav.fav == true){
          const card = document.createElement("div");
          card.setAttribute("class", "card");
    
          const h1 = document.createElement("h1");
          h1.textContent = movie.title;
    
          const p = document.createElement("p");
          p.textContent = `Rating: ${movie.rating}`;
    
          const duracion = document.createElement("p");
          duracion.textContent = `Duración: ${movie.length}`;
    
          container.appendChild(card);
          card.appendChild(h1);
          card.appendChild(p);
          if (movie.genre !== null) {
            const genero = document.createElement("p");
            genero.textContent = `Genero: ${movie.genre.name}`;
            card.appendChild(genero);
          }
          card.appendChild(duracion);
          foundFavorites = true;
        }}
    });
    if (!foundFavorites) {
      const noFavoritesMessage = document.createElement("h2");
      noFavoritesMessage.textContent = "Aún no tiene favoritos";
      container.appendChild(noFavoritesMessage);
    }
  })
};
