let config   = {};
let MONGODB_URI = 'mongodb+srv://knowuchiha2881:Nayan$2881@cluster0.t6izx.mongodb.net/currency?retryWrites=true&w=majority' 

config.app_name         = "localhost";
config.app_port         = 8000;

/* Mongo db url */
config.mongo_url        = MONGODB_URI || 'mongodb://localhost:27017/currency';

module.exports = config;
