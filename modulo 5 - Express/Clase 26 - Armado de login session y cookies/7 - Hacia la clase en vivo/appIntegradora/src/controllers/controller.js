const controller = {
    index: function(req, res,) {
        res.render('index');
    },
    process: function(req,res){
        let color = ''
        let bkg = ''
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
        }
        let msg = {
            name: req.body.name,
            age: (req.body.age ? `es: ${req.body.age}` : "no la se, porque no la enviaste"),
            email: req.body.email,
            color: color,
            bkg: bkg
        }
        res.render("index", {msg: msg})
    }

};
module.exports = controller
