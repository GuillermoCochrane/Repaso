
const menu =[{
    id:             1,
    nombre:         "Carpaccio fresco",
    descripcion:    "Entrada Carpaccio de salmón con cítricos",
    precio:         65.50,
    imagen:         "Carpaccio-de-salmon.jpg",
    detalle:        "Entrada Carpaccio de salmón con cítricos, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
},
{
    id:             2,
    nombre:         "Risotto de berenjena",
    descripcion:    "Risotto de berenjena y queso de cabra",
    precio:         47.00,
    imagen:         "Risotto-berenjena-queso-cabra.jpg",
    detalle:        "Risotto de berenjena y queso de cabra, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
},
{
    id:             3,
    nombre:         "Mousse de arroz",
    descripcion:    "Mousse de arroz con leche y aroma de azahar",
    precio:         27.50,
    imagen:         "Mousse-de-arroz-con-leche.jpg",
    detalle:        "Mousse de arroz con leche y aroma de azahar, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
},
{
    id:             4,
    nombre:         "Espárragos blancos",
    descripcion:    "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio:         37.50,
    imagen:         "esparragos.png",
    detalle:        "Espárragos blancos con vinagreta de verduras y jamón ibérico, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
},]

let developer = "Pimienta & Sal";

const mainController ={
    index: function(req,res){
        res.render('home',{
            menu: menu,
            developer: developer,
        })
    },
    detalle: function(req,res){
        res.render('menuCompleto', {
            menu: menu,
            developer: developer,
        })
    },
    detalleID: function(req,res){
        let id = req.params.id
        let plato = menu.filter(function(platos){
            return platos.id == id
        } )
        res.render('detalleMenu', {
            menu: menu,
            plato: plato[0],
            developer: developer,
        })
    },
}

module.exports = mainController