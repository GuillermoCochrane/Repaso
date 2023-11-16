/*
1)-  Probando hash:

Vamos a probar el funcionamiento del módulo Hash. La idea es, dada una constante que tiene como valor un password, aplicar el método hashSync para encriptarla.
Primero debemos declarar la constante bcrypt e inicializarla con el require del módulo bcrypt.
Crear una nueva constante llamada hash y asignarle el resultado de aplicar el método hashSync al password.
Finalmente, debemos hacer un console.log para mostrar el valor de la constante hash.
----------------------------------------------------------------------------------------------------------------------------------------------------- 
2)-
Validando información hasheada:
La idea de usar Hash es guardar información sensible sin revelar su contenido orginal. Pero ¿qué pasa en el momento que necesitamos recuperar esa información para, por ejemplo, validar el login de un usuario?
En este ejemplo ya tenemos un cadena de texto previamente encriptada, que la guardamos dentro de la constante hash1. Nuestro objetivo es encriptar la cadena de texto '123456', almacenarla dentro de la constante hash2 y finalmente usar un if para comparar hash1 y hash2 para ver si son iguales.
Dentro del if, ejecutar un console.log que diga 'los hash son iguales'.
-----------------------------------------------------------------------------------------------------------------------------------------------------
3)-
Utilizando el método compareSync:
¡Vamos a encriptar y comparar!
En este ejercicio queremos comparar la contraseña y la contraseña encriptada. Para esto deberemos usar el método compareSync del módulo bcrypt. Este devuelve true si tanto la contraseña como la contraseña encriptada (la cual desencripta), son iguales.  
¿Qué deberemos hacer?
Tendremos que realizar la comparación con el método compareSync y, en el caso de que las contraseñas coincidan, deberemos imprimir por consola 'El password es correcto'.
-----------------------------------------------------------------------------------------------------------------------------------------------------
 */

const password = '123456';
const bcrypt = require('bcryptjs');
// 1)-
const hash = bcrypt.hashSync(password, 10);
console.log(`1)- El hash es ${hash}`)

//2)-
const hash1 = bcrypt.hashSync("123456", 10);
const hash2 = bcrypt.hashSync("123456", 10);

if(hash1==hash2){
    console.log('2)- Los hash son iguales')
}else{
    console.log('2)- Los hash no son iguales')
}
//3)-

const pass = '123456';
const passwordEncriptada = bcrypt.hashSync(pass, 10);

if(bcrypt.compareSync(pass,passwordEncriptada)){
    console.log( '3)- El password es correcto')
}

