var config = {};

config.host = process.env.DATABASE_HOST || 'localhost';
config.user = process.env.DATABASE_USER || 'root';
config.password = process.env.DATABASE_PASSWORD || 'password';
config.db = process.env.DATABASE_DB || 'mercari';

config.port = process.env.PORT || 4000;

module.exports = config;
