# Uniones y funciones deagregación

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
