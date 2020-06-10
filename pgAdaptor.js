//Adaptor that queries the local database - POSTGRESS in this case

require('dotenv').config()
const pgPromise = require('pg-promise');

const pgp = pgPromise({});

const config = {
    host: "localhost",
    port: "5432",
    database: "empaticadb",
    user: "postgres",
    password: "00000"
};

const db = pgp(config);

exports.db = db;