const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("products", {
			products: products,
			toThousand: toThousand,
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.filter( item =>  item.id == req.params.id )
		product = product[0];
		let discountedPrice = (product.price - ((product.price)*(product.discount/100)) )
		product.finalPrice = Math.round(discountedPrice)
		res.render("detail",{
			product: product,
			toThousand: toThousand,
			title: product.name
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let errors = validationResult(req)
		if (errors.isEmpty()) {
				let file = req.file;
				if(file){
					let lastProductPosition = (products.length)-1;
					let lastproductid = products[lastProductPosition].id;
					let newProduct = {
						id: 			lastproductid+1,
						name: 			req.body.name,
						price: 			req.body.price,
						discount: 		req.body.discount,
						category: 		req.body.category,
						description: 	req.body.description,
						image: 			file.filename,
					};
					products.push(newProduct);
					let newProductsJSON = JSON.stringify(products)
					fs.writeFileSync(productsFilePath,newProductsJSON)
					res.redirect("/products/"+newProduct.id)
				} else {
					res.render(res.render('product-create-form',{
						oldData: req.body,
						error: "Hubo un problema en la carga de la imagen"
					}))
				}
			} else {
				res.render('product-create-form', { errors: errors.mapped(), oldData: req.body });
			}
		/* let file = req.file;
		if(file){
			let lastProductPosition = (products.length)-1;
			let lastproductid = products[lastProductPosition].id;
			let newProduct = {
				id: 			lastproductid+1,
				name: 			req.body.name,
				price: 			req.body.price,
				discount: 		req.body.discount,
				category: 		req.body.category,
				description: 	req.body.description,
				image: 			file.filename,
			};
			products.push(newProduct);
			let newProductsJSON = JSON.stringify(products)
			fs.writeFileSync(productsFilePath,newProductsJSON)
			res.redirect("/products/"+newProduct.id)
		} else {
			res.render(res.render('product-create-form',{
				oldData: req.body,
				error: "Hubo un problema en la carga de la imagen"
			}))
		} */
	},

	// Update - Form to edit
	edit: (req, res) => {
		let product = products.filter( selected =>  selected.id == req.params.id )
		product = product[0];
		res.render("product-edit-form", {
			product: product,
			title: product.name
		})
	},
	// Update - Method to update
	update: (req, res) => {
		let file = req.file;
		let id = parseInt(req.params.id[0]+req.params.id[1])
		if(file){
			for (const product of products) {
				if(product.id == id){
					product.id == id
					product.name = req.body.name
					product.price = req.body.price
					product.discount = req.body.discount
					product.category = req.body.category
					product.description = req.body.description
					product.image = file.filename
				}}
				let productJSON = JSON.stringify(products);
				fs.writeFileSync(productsFilePath,productJSON);
				res.redirect("/products/"+req.params.id)
			} else {
				let product =req.body;
				product.id = req.params.id
				res.render(res.render('product-edit-form',{
					product: product,
					error: "Hubo un problema en la carga de la imagen",
					title: req.body.name
				}))
			}
		},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let newProducts = products.filter((product)=> product.id != req.params.id);
		let productsJSON = JSON.stringify(newProducts);
		fs.writeFileSync(productsFilePath,productsJSON);
		res.redirect("/");
	}
};

module.exports = controller;