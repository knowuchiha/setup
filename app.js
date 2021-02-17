
const config    = require ('./common/config');

const {  mongo_url } = config;

const mongoose  = require ('./common/db');

async function init () {
	try {
		/* Making connection with mongodb */
		await mongoose.init (mongo_url);
	}
	catch (err) {
		process.exit (1);
	}
	
	/* Actually start the app */
	require('./index');
}

init ();
