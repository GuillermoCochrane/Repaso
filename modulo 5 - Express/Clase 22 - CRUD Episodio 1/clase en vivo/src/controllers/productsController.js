const fs = require('fs');
const path = require('path');

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
		let productId = req.params.id;
		let product = products.filter( prod =>  prod.id == productId )
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
		res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let lastProductPosition = (products.length)-1;
		console.log(lastProductPosition);
		let lastproductid = products[lastProductPosition].id;
		let newProduct = {
			id: 			lastproductid+1,
			name: 			req.body.name,
			price: 			req.body.price,
			discount: 		req.body.discount,
			category: 		req.body.category,
			description: 	req.body.description,
			image: 			"default-image.png"
		};
		products.push(newProduct);
		let newProductsJSON = JSON.stringify(products)
		fs.writeFileSync(productsFilePath,newProductsJSON)
		res.redirect("/products/"+newProduct.id)
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
		for (const product of products) {
			if(product.id == req.params.id){
				product.name = req.body.name
				product.price = req.body.price
				product.discount = req.body.discount
				product.category = req.body.category
				product.description = req.body.description
			}
		}
		let productJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath,productJSON);
		res.redirect("/products/"+req.params.id)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;