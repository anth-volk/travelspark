// External package imports
const crypto = require('crypto');

// ORM wrapper import
const { DatabaseWrapper } = require('../database/databaseWrapper.js');
const { Query } = require('../models');

// ORM config
const db = new DatabaseWrapper();

async function createQuery(req, res) {

  try {
    const userId = req.user.userId;

    const inputJson = req.body.inputJson;
    const inputFull = req.body.inputFull;

    const queryId = crypto.randomUUID();
    const queryTypeId = 0;

    const result = await db.transaction(async (t) => {

      const output = await Query.create({
        user_id: userId,
        query_id: queryId,
        query_type_id: queryTypeId,
        input_full: inputFull,
        input_json: inputJson
      }, { transaction: t });

      return output;
    });

    return res
      .status(201)
      .json({
        connection_status: 'success',
        query_id: queryId
      });

  }
  catch (err) {
    console.error('controllers/createQuery: Error while creating new query: ', err);
    return res
      .status(500)
      .json({
        connection_status: 'failure',
        message: err
      });
  }

}

module.exports = {
  createQuery
};