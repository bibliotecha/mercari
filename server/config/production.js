var config = {};

config.host = process.env.DATABASE_HOST || 'localhost';
config.user = process.env.DATABASE_USER || 'ken';
config.password = process.env.DATABASE_PASSWORD || 'kronos111';
config.db = process.env.DATABASE_DB || 'mercari';

config.port = process.env.PORT || 4000;

module.exports = config;
