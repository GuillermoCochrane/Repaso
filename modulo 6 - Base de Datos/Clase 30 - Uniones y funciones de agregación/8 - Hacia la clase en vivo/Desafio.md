# Desafío

## Ejercicio: Canciones por género

### Mira las respuestas de cada pregunta:


1. En musimundos estamos muy atentos a que nuestros usuarios encuentren una cantidad apropiada de canciones del estilo que quieran escuchar, es por eso que en esta oportunidad nos están solicitando una lista de cuantas canciones tenemos por género. Hacé una consulta a la base de datos que traiga el nombre del género y la cantidad de canciones que posee.

    - ingresá el número que te dio como resultado las canciones de género Blues.

        - 81

   - Ingresá la consulta que creaste. Recordá escribir las sentencias SQL en mayúscula.

        ``` sql
          SELECT generos.nombre AS genero, COUNT(*) AS cantidad_de_canciones
          FROM canciones
          INNER JOIN generos 
          ON canciones.id_genero = generos.id
          GROUP BY generos.nombre
        ```

¡Respuesta correcta!

---

## Ejercicio: Duración de los albums

### Mira las respuestas de cada pregunta:

1. En el sitio web de Musimundos queremos mejorar nuestras vistas de productos colocando al pie de cada álbum el promedio de duración de cada álbum. Tomemos como ejemplo a la banda AC/DC y consulta a la base de datos el álbum 'Let There Be Rock' , lista sus canciones , su duración y saca un promedio de duracion de las mismas. 

   - Ingresá el número que obtuviste.

       - 306657.3750

   - Ingresá la consulta que creaste. Recordá escribir las sentencias SQL en mayúscula.

        >como el enunciado es ambiguo, planteo 2 posibles soluciones: Con una sola consulta:

        ``` sql
        SELECT 	canciones.id, 
                canciones.nombre AS cancion, 
                milisegundos AS duracion, 
                artistas.nombre AS artista, 
                albumes.titulo AS album, 
                (SELECT 
                  AVG(canciones.milisegundos) 
                  FROM canciones 
                  INNER JOIN albumes ON canciones.id_album = albumes.id
                  WHERE albumes.titulo = "Let There Be Rock") AS promedio_duracion_canciones
        FROM canciones
        INNER JOIN albumes ON canciones.id_album = albumes.id
        INNER JOIN artistas ON albumes.id_artista = artistas.id
        WHERE titulo = "Let There Be Rock"
        ```

      > Con 2 consultas:

        ``` sql
        SELECT 	canciones.id, 
                canciones.nombre AS cancion, 
                milisegundos AS duracion, 
                artistas.nombre AS artista, 
                albumes.titulo AS album
        FROM canciones
        INNER JOIN albumes ON canciones.id_album = albumes.id
        INNER JOIN artistas ON albumes.id_artista = artistas.id
        WHERE titulo = "Let There Be Rock"
        ```

        ``` sql
        SELECT AVG(canciones.milisegundos) AS promedio_duracion_canciones
        FROM canciones
        INNER JOIN albumes ON canciones.id_album = albumes.id
        GROUP BY albumes.titulo
        HAVING albumes.titulo = "Let There Be Rock";
        ```


¡Respuesta correcta!

---

# DAB 2020 - SQL II - Funciones MySQL II #6 - Descuento

## Mira las respuestas de cada pregunta:

1. En el salón de Musimundos, estamos ofreciendo una promoción para los clientes regulares donde regalamos un 20% de descuento en su compra si alguna vez el cliente hizo una compra con un total de más de 12. El cliente número 48 acaba de entrar por la puerta y el vendedor quiere corroborar si el descuento se aplica.

   - Hacé una consulta a la base de datos que nos traiga el total de la factura más cara que tenga el cliente número 48. Insertá el número que obtuviste.

       - 13.86

   - Ingresá la consulta que creaste. Recordá escribir las sentencias SQL en mayúscula.

        Usando group by:

        ``` sql
        SELECT MAX(total) AS compra_mayor
        FROM facturas
        GROUP BY id_cliente
        HAVING id_cliente = 48;
        ```

        Usando where:

        ``` sql
        SELECT MAX(total) AS compra_mayor
        FROM facturas
        WHERE id_cliente = 48;
        ```

¡Respuesta correcta!