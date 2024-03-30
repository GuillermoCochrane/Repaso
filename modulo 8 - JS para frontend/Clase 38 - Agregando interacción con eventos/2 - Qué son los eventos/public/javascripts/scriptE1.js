/* 
Método load

Queremos empezar a escribir código JavaScript, pero es importante asegurarnos que primero se cargue todo el documento HTML para poder manipular los elementos.

Por eso debemos, usando addEventListener(), agregarle el evento "load" al objeto window.

-------------------------------------------------------------------------------------------------------

<html>
  <head>
    <title>JS Front</title>
    <script src="script.js"></script>
  </head>
  <body>
  </body>
</html>
-------------------------------------------------------------------------------------------------------
*/
window.addEventListener("load",function(){
  alert("Cargó la página")
})
