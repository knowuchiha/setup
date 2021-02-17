const connection = require ('../common/db');
const schema     = require ('../schemas/dropDown');
const db         = connection.db;

const model = db.model ('dropDown', schema, 'dropDown');

const mongo = {};

mongo.create = async function (data) {

	const __model = new model (data);
	const doc     = await __model.save ();
	return doc;
};


mongo.getdropDown = async function () {

	const docs = await model.find({}, { _id : 0, __v : 0 , createdAt : 0, updatedAt : 0 });
	return docs;
};

module.exports = mongo;
