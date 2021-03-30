// require('dotenv').config()
// const pg = require('pg')
// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false }
// }
// const sharedConfig = {
//   client: 'pg',
//   migrations: { directory: './data/migrations' },
//   seeds: { directory: './data/seeds' },
// }
// module.exports = {
//   development: {
//     ...sharedConfig,
//     connection: process.env.DEV_DATABASE_URL
//   },
//   production: {
//     ...sharedConfig,
//     connection: process.env.DATABASE_URL,
//     pool: { min: 2, max: 10 },
//   },
// }

const pg = require('pg');
const localConnection =
  'postgresql://postgres:password@localhost:5432/ttwebft72recipecookbook';
let connection;
if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
  connection = process.env.DATABASE_URL;
} else {
  connection = localConnection;
}
const sharedConfig = {
  client: 'pg',
  connection,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
};
module.exports = {
  development: { ...sharedConfig },
  production: {
    ...sharedConfig,
    pool: { min: 2, max: 10 },
  },
};
