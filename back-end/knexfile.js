require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
  }
};

// host: '35.226.146.116',
//       user: '21712506-leo-santos',
//       password: 'kV83P$ahCv5W3JNfUYK5',
//       database: 'moreira-21712506-leo-santos',
