const controller = {
	index: (req, res) => {
		res.render("index");
	},
	search: (req, res) => {
		res.send("Ud tiene privilegios")
	},
	redirect: (req, res) => {
		res.send("Hola")
	},
};

module.exports = controller;
