const mongoose = require ('mongoose');
const Schema   = mongoose.Schema;

const schema = new Schema ({   
	dropDown    : { type : String, required : true },
	symbol      : { type : String, required : true },
}, { timestamps : true });

schema.index ({ dropDown : 1, symbol : 1 }, { unique : true });

module.exports = schema;
