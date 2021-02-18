let config = {};

config.app_name         = "localhost";
config.app_port         = 8000;

/* Mongo db url */
config.mongo_url        = process.env.MONGODB_URI || 'mongodb://localhost:27017/currency';

module.exports = config;
