window.addEventListener("load", () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  let favoritas = JSON.parse(localStorage.getItem("fav")) || [];
  
  fetch("http://localhost:3031/api/movies")
  .then(function(r){
    return r.json();
  })
  .then(function(i){
    let data = i.data;
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const dur = document.createElement("p");
      dur.textContent = `Duración: ${movie.length}`;

      const star = document.createElement("button");
      star.textContent = "⭐";
      star.setAttribute("class", "star-button");
      star.setAttribute("id",movie.id);

      for (const f of favoritas) {
        f.id == movie.id && f.fav == true ? star.classList.toggle("fav") : null
      }

      star.addEventListener("click", function () {
        const bID = star.getAttribute("id");
        let found = false;
        for (const m of favoritas) {
          if (m.id === bID) {
            m.fav = !m.fav;
            found = true;
          }
        }
        if (!found) {
          favoritas.push({ id: bID, fav: true });
        }
        star.classList.toggle("fav")
        localStorage.setItem("fav", JSON.stringify(favoritas));
        console.log(localStorage);
      });

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const gen = document.createElement("p");
        gen.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(gen);
      }
      card.appendChild(dur);
      card.appendChild(star);
    });
  })
});