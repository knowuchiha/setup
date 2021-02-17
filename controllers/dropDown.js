const data_model   = require ('../model/dropDown');

const controller = {};

controller.getdropDown = async function (req, res) {
	try {

		let data = await data_model.getdropDown ();

		res.status(200).send(data);
	}
	catch (err) {
		console.log(err);
		res.send(err); 
	}
};

module.exports = controller;
