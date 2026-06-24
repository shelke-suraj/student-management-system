const mysql1 = require('mysql2');

const db = mysql1.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Suraj#123',
    database: 'student_db'
});

db.connect(err => {
    if (err) console.log(err);
    else console.log('MySql Connected');
});

module.exports = db;