const path = require('path');
const mainController ={
    home: function(req, res){
        let home = path.join(__dirname,"../views/home.html")
        res.sendFile(home)
    },
    about: function(req, res){
        let about = path.join(__dirname,"../views/about.html")
        res.sendFile(about)
}
}
module.exports = mainController