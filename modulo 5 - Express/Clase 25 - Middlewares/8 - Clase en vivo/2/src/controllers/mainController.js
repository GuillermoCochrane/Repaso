const controller = {
	index: (req, res) => {
		res.render("index");
	},
	search: (req, res) => {
		res.render('index')
	},
	redirect: (req, res) => {
		res.send("Hola")
	},
};

module.exports = controller;
