require('dotenv').config();

const {
	DB_HOST,
	DB_USERNAME,
	DB_PASSWORD,
	DB_NAME_DEV,
	DB_NAME_TEST,
	DB_NAME_PROD
} = process.env;

module.exports = {
	"development": {
	    "username": DB_USERNAME,
	    "password": DB_PASSWORD,
	    "database": DB_NAME_DEV,
	    "host": DB_HOST,
	    "dialect": "postgres"
	},
	"test": {
	    "username": DB_USERNAME,
	    "password": DB_PASSWORD,
	    "database": DB_NAME_TEST,
	    "host": DB_HOST,
	    "dialect": "postgres"
	},
	"production": {
	    "username": DB_USERNAME,
	    "password": DB_PASSWORD,
	    "database": DB_NAME_PROD,
	    "host": DB_HOST,
	    "dialect": "postgres"
	}
};