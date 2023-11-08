const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../db/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let estadisticasController ={
    contarVisita: function(req,res){
        let id = req.params.id;
        for (const product of products) {
            if(product.id == id){
                product.visitas = product.visitas + 1
            }}
            let productJSON = JSON.stringify(products);
            fs.writeFileSync(productsFilePath,productJSON);
    }
}

module.exports = estadisticasController