const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static_files'));

let db = new sqlite3.Database('./payment-storage.db', (err) => {
    if (err) {
        throw err
    } 
    console.log('Connected to the SQLite database.');
});

app.get("/api/payments", (req, res, next) => {
    let sql = `SELECT PaymentID id, CardNumber pan, CardHolderName name FROM Payments ORDER BY id`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.get("/api/show", (req, res, next) => {
    let sql = `SELECT PaymentID id, CardNumber pan, CardHolderName name FROM Payments ORDER BY id`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
