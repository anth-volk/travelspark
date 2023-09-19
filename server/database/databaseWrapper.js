require('dotenv').config();

const { Sequelize } = require('sequelize');
const dbConfig = require('./config/config.js');

class DatabaseWrapper {
  constructor(environment = 'development') {

    // Define instance variables
    this.environment = environment;

    // Singleton constructor
    if (DatabaseWrapper.instance) {
      return DatabaseWrapper.instance;
    }
    DatabaseWrapper.instance = this;

    // If environment isn't present in config file,
    // throw warning
    if (!(this.environment in dbConfig)) {
      throw new Error('DatabaseWrapper: \'environment\' constructor value is invalid');
    }

    // If in dev mode, raise warning
    if (this.environment === 'development') {
      console.warn('DatabaseWrapper: Currently hosting a development database. ' + 
      'Be sure that DatabaseWrapper takes an explicit \'production\' argument ' +
      'when deploying live.');
    }

    // Return new Sequelize instance
    return new Sequelize(
      dbConfig[this.environment].database,
      dbConfig[this.environment].username,
      dbConfig[this.environment].password,
      {
        host: dbConfig[this.environment].host,
        dialect: dbConfig[this.environment].dialect
      }
    );
  }

}

module.exports = {
  DatabaseWrapper
};