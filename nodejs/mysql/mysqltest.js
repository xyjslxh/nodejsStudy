var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'lc3'
});

connection.connect();
connection.query('select * from user limit 5', function(error, results, fields) {
    if (error) { throw error; }
    console.log(results);
});
connection.end();