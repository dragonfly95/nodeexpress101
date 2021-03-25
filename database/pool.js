
var mysql2 = require('mysql2/promise');

var pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "restaurant",
    insecureAuth : true
});

module.exports = pool;
