/* Parámetros compartidos
Para este ejercicio debemos, analizando el HTML, completar el código que falta en el controlador para que el mismo 
pueda enviar al template engine las variables que necesita para poder renderizar la vista checkout.  */
let productos = ['Helado 1/4 kg', 'Franui Chocolate Negro', 'Surtido Chocolate 1/2kg'];
const usersController ={
    index: function(req, res, next) {
        res.send('respond with a resource');
    },
    checkout: function (req,res){
        res.render("checkout",{
            items: productos,
            title: 'Carrito'
        });
    }
}
module.exports = usersController