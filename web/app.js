// server.js
const express = require('express');
const app = express();

const mysql = require("mysql");

app.get('/', (req, res) => {

    const connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        charset: 'utf8'
    })

    connection.connect( (err) => {
        if(err) {
            return res.send('Error Connecting To DB');
        }
        return res.send('Success Connecting To DB. Hello world 1');
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});