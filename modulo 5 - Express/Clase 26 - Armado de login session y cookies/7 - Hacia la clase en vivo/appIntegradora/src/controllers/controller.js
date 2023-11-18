const { validationResult } = require('express-validator')
const controller = {
    index: function(req, res,) {
        res.render('index');
    },
    process: function(req,res){
        let errors = validationResult(req)
		if (errors.isEmpty()){
            let color = '';
            let bkg = '';
            let selectedColor = req.body.color;
            switch(selectedColor){
                case "1":
                    color = "Rojo";
                    bkg = "option1";
                    break;
                case "2":
                    color = "Amarillo";
                    bkg = "option2"
                    break;
                case "3":
                    color = "Azul"
                    bkg = "option3"
                    break;
                case "4":
                    color = "Gris"
                    bkg = "option4"
                    break;
                default:
                    color = "no seleccionó ninguno"
                    break
            };
            let msg = {
                name: req.body.name,
                age: (req.body.age ? `es: ${req.body.age}` : "no la se, porque no la enviaste"),
                email: req.body.email,
                color: color,
            };
            if(req.body.remember){
                res.cookie( "bkg", bkg, {maxAge: 300000});
            }
            req.session.msg = msg;
            req.session.bkg = bkg;
            return res.render("index", {
                msg: msg,
                bkg: bkg
            })
            } else {
                res.render('index', { 
                    errors: errors.mapped(), 
                    oldData: req.body 
                });
            };
    },

    greetings: function(req,res){
        res.render("greets", {
            msg: req.session.msg,
            bkg: req.session.bkg
        })
    },

    forget: function(req,res){
        res.clearCookie("bkg");
        req.session.destroy();
        return res.redirect('/')
    }

};
module.exports = controller
