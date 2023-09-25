let carritoController = {

    index: function(req,res){res.send('Carrito')},
    sacarItem: function(req,res){res.send("Item sacado")},
    consultarItem: function(req,res){res.send("Item detallado")},
    agregarItem: function(req,res){
        let item = req.params.item;
        res.send( `${item} items agregados`) 
    }
};

module.exports = carritoController