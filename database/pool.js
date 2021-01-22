
var mysql2 = require('mysql2/promise');

var pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "1q2w3e4r5t",
    database: "gosmsdb",
    insecureAuth : true
});

module.exports = pool;