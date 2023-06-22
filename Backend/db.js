const Pool = require("pg").Pool;
//PostgreSql ayarlarım
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "locations",
    password: "1",
    port: 5432,
});

module.exports = pool;