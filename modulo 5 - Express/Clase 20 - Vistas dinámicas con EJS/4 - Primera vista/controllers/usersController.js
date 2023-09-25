/* Renderizando el login
Para este ejercicio deberemos completar el controlador del usuario haciendo que, al invocar el loginUser, el mismo 
renderice con EJS la vista login. */

const usersController ={
    index: function(req, res, next) {
        res.send('respond with a resource');
    },
    loginUser: function (req,res){
            res.render('login',{ title: 'Login' });
        }
    }
module.exports = usersController