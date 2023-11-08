const fs = require('fs');
const path = require('path');
const { validationResult, body } = require('express-validator')

/* const express = require('express');
const router = express.Router();
const { validationResult, body } = require('express-validator');

const userController = {
  login: (req, res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
      res.render('login',{errores: errores.array()});
    }
  }  
} */

const productsFilePath = path.join(__dirname, '../db/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController ={

	all: (req, res) => {
		res.send(products)
	},
    
    detail: (req, res) => {
		let product = products.filter( item =>  item.id == req.params.id )
		product = product[0];
		res.send(product)
	},

    store: (req, res) => {
		const errores = validationResult(req);
		if(!errores.isEmpty()){
			res.render('home',{errores: errores.array()});
		}
		let lastProductPosition = (products.length)-1;
		let lastproductid = products[lastProductPosition].id;
		let newProduct = {
			id: 		lastproductid+1,
			nombre:     req.body.nombreProducto,
			precio:     req.body.precioProducto,
			visitas:    0
		};
		products.push(newProduct);
		let newProductsJSON = JSON.stringify(products)
		fs.writeFileSync(productsFilePath,newProductsJSON)
		res.redirect("/productos/")
	},
}

module.exports = productsController