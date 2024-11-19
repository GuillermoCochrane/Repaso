# Uniones y funciones de agregación

## Práctica integradora

---

### Micro desafío - Paso 1:

1. Utilizando la base de datos de películas queremos conocer, por un lado, los títulos y el nombre del género de todas las series de la base de datos. 

   - Ingresá la consulta que creaste. Recordá escribir las sentencias SQL en mayúscula.

        ``` sql
        SELECT 	series.id,
		        series.title AS Serie, 
		        genres.name AS Genero 
        FROM series
        INNER JOIN genres 
        ON series.genre_id = genres.id
        ```

   - Por otro, necesitamos listar los títulos de los episodios junto con el nombre y apellido de los actores que trabajan en cada uno de ellos.

        ``` sql
        SELECT DISTINCT episodes.title AS Episodio, 
				        actors.first_name AS Nombre, 
                        actors.last_name AS Apellido
        FROM actor_episode
        INNER JOIN actors ON actor_episode.actor_id = actors.id
        INNER JOIN episodes ON actor_episode.episode_id = episodes.id;
        ```

---

### Micro desafío - Paso 2:

1. Para nuestro próximo desafío necesitamos obtener a todos los actores o actrices (mostrar
nombre y apellido) que han trabajado en cualquier película de la saga de la Guerra de las
galaxias, pero ¡cuidado!: debemos asegurarnos de que solo se muestre una sola vez cada
actor/actriz.

   - Ingresá la consulta que creaste. Recordá escribir las sentencias SQL en mayúscula.

        ``` sql
        SELECT DISTINCT actors.first_name AS Nombre, actors.last_name AS Apellido
        FROM actor_movie
        INNER JOIN actors 
        ON actor_movie.actor_id = actors.id
        INNER JOIN movies 
        ON actor_movie.movie_id = movies.id
        WHERE movies.title LIKE "%guerra%galaxia%";
        ```

---

### Micro desafío - Paso 3:

1. Debemos listar los títulos de cada película con su género correspondiente. En el caso de
que no tenga género, mostraremos una leyenda que diga "no tiene género". Como ayuda
podemos usar la función COALESCE() que retorna el primer valor no nulo de una lista.

   - Ingresá la consulta que creaste. Recordá escribir las sentencias SQL en mayúscula.

        ``` sql
        SELECT movies.title 
        AS Pelicula, 
        COALESCE(genres.name, 'No tiene género') 
        AS Genero
        FROM movies
        LEFT JOIN genres 
        ON movies.genre_id = genres.id;
        ```