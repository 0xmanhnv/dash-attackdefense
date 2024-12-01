require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    type: process.env.DB_TYPE,
  },
};

module.exports = config;