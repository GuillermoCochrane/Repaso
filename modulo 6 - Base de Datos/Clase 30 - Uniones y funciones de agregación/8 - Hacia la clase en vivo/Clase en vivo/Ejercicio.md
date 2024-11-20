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
        WHERE movies.title 
        LIKE "%guerra%galaxia%";
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

---

### Micro desafío - Paso 4:
1. Necesitamos mostrar, de cada serie, la cantidad de días desde su estreno hasta su n, con la particularidad de que a la columna que mostrará dicha cantidad la renombraremos: “Duración”. Por ejemplo:

  | Título       | Duración |
  |--------------|----------|
  | Supernatural | 130      |

   - Ingresá la consulta que creaste. Recordá escribir las sentencias SQL en mayúscula.

        ``` sql
      SELECT title 
      AS Título, 
      DATEDIFF(NOW(), release_date) 
      AS Duración 
      FROM series;
      ```

---

### Micro desafío - Paso 5:

- Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.

    ```sql
    SELECT first_name, last_name
    FROM actors
    WHERE LENGTH(first_name) > 6
    ORDER BY first_name ASC;
    ```
- Debemos mostrar la cantidad total de los episodios guardados en la base de datos.

    ```sql
        SELECT COUNT(*)
        AS cantidad_de_episodios
        FROM episodes;
    ```

- Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total de temporadas que tiene cada una de ellas.

    ```sql	
    SELECT  series.title AS nombre_de_la_serie, 
            COUNT(seasons.id) AS cantidad_de_temporadas
    FROM  seasons
    INNER JOIN series 
    ON seasons.serie_id = series.id
    GROUP BY series.title;
    ``` 

- Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor
o igual a 3.

    ```sql
    SELECT  genres.name, 
            COUNT(*) AS cantidad_de_peliculas
    FROM movies
    INNER JOIN genres 
    ON movies.genre_id = genres.id
    GROUP BY genres.name
    HAVING COUNT(*) >= 3;
    ```

---